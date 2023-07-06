import { EqualUser } from '../../../generated/graphql'

type Props = {
  user: EqualUser;
};
export const UserContent = ({ user }: Props) => {
  const { User_ID, Face_img, Name, Address} = user;
  return (
    <div>
      <p>User_ID: {User_ID}</p>
      <p>Face_img: {Face_img}</p>
      <p>Name: {Name}</p>
      <p>Address: {Address}</p>
    </div>
  );
};