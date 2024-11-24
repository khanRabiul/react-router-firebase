import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import { registerWithEmailAndPassword } from "../firebase/firebase";
const SignUp = () => {
  const navigate = useNavigate("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    try{
      await registerWithEmailAndPassword(name, email, password)
      toast.success("Signedup  Successfull, Please verify your email and login", {
        onClose: ()=> navigate('/login'),
        toastId: "success2",
      })
    } catch (error) {
      toast.error(`An error occurred during singup): ${error.message}`)
    }
  }
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Create an Account</h2>
        <form 
        onSubmit={handelSubmit}
        className="space-y-4">
          {/* Name */}
          <div>
            <label htmlFor="name"className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute inset-y-0 right-3 flex items-center text-sm text-gray-500 hover:text-gray-700"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <div>
            <p>Do you have account already? <span><Link to="/signin" 
            className="text-orange-500 font-bold"
            >Sing In</Link></span></p>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-300"
          >
            Sign Up
          </button>
        </form>

        {/* OR Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        {/* Social Login Buttons */}
        <div className="space-y-3">
          <button
            type="button"
            className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
          >
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.4 12.7c0-.9-.1-1.7-.2-2.6H12v5h5.9c-.3 1.5-1.1 2.7-2.4 3.5v3h3.9c2.3-2.1 3.6-5.2 3.6-8.9z" />
              <path d="M12 22c2.7 0 4.9-.9 6.5-2.4l-3.9-3c-1.1.7-2.6 1.1-4.1 1.1-3.2 0-5.8-2.1-6.7-5H1.6v3.1c1.7 3.3 5.1 5.2 8.8 5.2z" />
              <path d="M5.3 13.6c-.2-.5-.3-1-.3-1.6s.1-1.1.3-1.6V7H1.6C.9 8.4.5 10.2.5 12s.4 3.6 1.1 5l3.7-3.4z" />
              <path d="M12 4.8c1.5 0 2.8.5 3.9 1.4l2.9-2.9C16.9 1.6 14.7.7 12 .7c-3.7 0-7.1 1.9-8.8 5.2l3.7 3.4c.8-2.8 3.5-4.5 6.1-4.5z" />
            </svg>
            Sign up with Google
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900"
          >
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.4 0 0 5.4 0 12c0 5.3 3.4 9.8 8.2 11.4v-8H5.8v-3.4h2.4v-2.6c0-2.5 1.5-3.8 3.7-3.8 1 0 1.8.1 2.1.1v2.4h-1.5c-1.2 0-1.5.6-1.5 1.4v1.8h3l-.4 3.4h-2.6v8C20.6 21.8 24 17.3 24 12c0-6.6-5.4-12-12-12z" />
            </svg>
            Sign up with Facebook
          </button>
          <button
            type="button"
            className="w-full flex items-center justify-center bg-gray-900 text-white py-2 rounded-md hover:bg-gray-700"
          >
            <svg
              className="h-5 w-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .3C5.4.3 0 5.7 0 12.3c0 5.3 3.4 9.8 8.2 11.4v-8H5.8v-3.4h2.4v-2.6c0-2.5 1.5-3.8 3.7-3.8 1 0 1.8.1 2.1.1v2.4h-1.5c-1.2 0-1.5.6-1.5 1.4v1.8h3l-.4 3.4h-2.6v8c4.8-1.6 8.2-6.1 8.2-11.4C24 5.7 18.6.3 12 .3z" />
            </svg>
            Sign up with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
