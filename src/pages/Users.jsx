import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="mx-auto w-full">
      <h2 className="text-center">Users</h2>
      <div className="flex flex-col gap-3 ">
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Users;
