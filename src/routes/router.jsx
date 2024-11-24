import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import SignUp from "../pages/Signup";
import SignIn from "../pages/Signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Main layout
    children: [
      {
        path: "", // Default route
        element: <Home />,
      },
      {
        path: "about", // /about
        element: <About />,
      },
      {
        path: "users", // /users
        element: <Users />,
        loader:() => fetch(`https://jsonplaceholder.typicode.com/users`)
      },
      {
        path: "users/:id",
        element: <UserDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: "contact", // /contact
        element: <Contact />,
      },
      {
        path: "signup", // /contact
        element: <SignUp />,
      },
      {
        path: "signin", // 
        element: <SignIn />,
      },
      {
        path: "*", // Catch-all route for 404
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
