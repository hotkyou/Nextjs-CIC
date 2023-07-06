import { UserContent } from "./components";
import { GetEqualUserDocument, EqualUser } from "../../generated/graphql";
import client from "../../lib/graphqlClient";
type Props = {
  user: EqualUser;
};
const Content = ({ user }: Props) => {
  return <UserContent user={user} />;
};
export const getServerSideProps = async () => {
  const user = (
    await client.query({
      query: GetEqualUserDocument,
      variables: { User_ID: 1 },
    })
  ).data;
  return {
    props: {
      ...user,
    },
  };
};
export default Content;