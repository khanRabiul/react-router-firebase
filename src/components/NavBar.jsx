import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          MyWebsite
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="users"
              className={({ isActive }) =>
                isActive ? "text-yellow-500 font-bold" : "hover:text-yellow-500"
              }
            >
              Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "px-2 py-1 bg-yellow-500 text-white font-bold rounded-md"
                  : "px-3 py-1.5 bg-slate-400 text-white rounded-md hover:bg-yellow-500 hover:text-white"
              }
            >
              SignUp
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
