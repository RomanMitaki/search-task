import "./style.css";

type TPropsUserCard = {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  address: {
    city: string;
  };
};

export function UserCard(props: TPropsUserCard) {
  const { image, firstName, lastName, address } = props;
  return (
    <div className="userCard">
      <img className="userPic" src={image} />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}
