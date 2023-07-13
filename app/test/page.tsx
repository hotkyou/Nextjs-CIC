import { useQuery } from '@apollo/client';
import { GetEqualUserQuery, GetEqualUserQueryVariables, GetEqualUserDocument } from '../../generated/graphql';

const useGetEqualUserQuery = (variables: GetEqualUserQueryVariables) => {
  return useQuery<GetEqualUserQuery, GetEqualUserQueryVariables>(GetEqualUserDocument, {
    variables,
  });
};

export default useGetEqualUserQuery;
