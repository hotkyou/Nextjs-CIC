import { EqualUser } from '../../../generated/graphql'

type Props = {
  equaluser: EqualUser
};
export const UserContent = ({ equaluser }: Props) => {
  const { User_ID, Face_img, Name, Address} = equaluser|| {};

  return (
    <div>
      <p>User_ID: {User_ID}</p>
      <p>Face_img: {Face_img}</p>
      <p>Name: {Name}</p>
      <p>Address: {Address}</p>
    </div>
  );
};