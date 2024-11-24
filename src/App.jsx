import { Router, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import SignUp from "./pages/Signup";
import Users from "./pages/Users";
import SignIn from "./pages/Signin";

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/signup" element={<SignUp /> } />
          <Route path="/signin" element={<SignIn /> } />
          <Route path="/users" element={<Users /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
