import { UserContent } from "./components";
import { GetEqualUserDocument, EqualUser } from "../../generated/graphql";
import client from "../../lib/graphqlClient";
type Props = {
  equaluser: EqualUser;
};
const Content = ({ equaluser }: Props) => {
  return <UserContent equaluser={equaluser} />;
};
export const getServerSideProps = async () => {
  const equaluser = (
    await client.query({
      query: GetEqualUserDocument,
      variables: { User_ID: 3 },
    })
  ).data;
  return {
    props: {
      ...equaluser,
    },
  };
};
export default Content;