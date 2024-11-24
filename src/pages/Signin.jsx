import { Link } from "react-router-dom";

const SignIn = () => {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Sign In
          </h2>
          <form>
            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
  
            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Enter your password"
              />
            </div>
  
            {/* Remember Me and Forgot Password */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember-me"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <a href="/forgot-password" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
  
            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-200"
              >
                Sign In
              </button>
            </div>
          </form>
  
          {/* Additional Links */}
          <p className="text-sm text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignIn;
  