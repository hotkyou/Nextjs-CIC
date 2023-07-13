import useGetEqualUserQuery from '../page';

type Props = {
  User_ID: number;
};

const UserComponent = ({ User_ID }: Props) => {
  const { loading, error, data } = useGetEqualUserQuery({ User_ID });

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!data || !data.getUser) {
    return <p>No data found</p>;
  }

  const { Face_img, Name, Address } = data.getUser;

  return (
    <div>
      <p>Face_img: {Face_img}</p>
      <p>Name: {Name}</p>
      <p>Address: {Address}</p>
    </div>
  );
};

export default UserComponent;
