import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const {name, email, address: {city}} = useLoaderData();

  return (
    <>
    <h1>user details</h1>
    <p>{name}</p>
    <p>{email}</p>
    <p>{city}</p>
    </>
  );
};

export default UserDetails;