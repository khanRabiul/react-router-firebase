import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email} = user;
  return (
    <div className=" w-60 text-center bg-gray-200 rounded-md py-2 mx-auto">
    <h1 className="text-2xl font-bold">{name}</h1>
    <h3 className="text-blue-600 cursor-pointer">{email}</h3>
    <Link
    to={`/users/${id}`}
    className="px-2 p-1 bg-yellow-500 ">Details</Link>
    </div>
  );
};

export default User;