import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  // to navigate desired page
  const navigate = useNavigate()
  const handleBackHome =()=>{
    navigate("/")
  }
  return (
    <>
    <section className="h-screen flex items-center justify-center bg-gray-800 text-white text-center">
  <div>
    <h1 className="text-6xl font-bold mb-4">404</h1>
    <p className="text-2xl mb-8">Oops! Page not found.</p>
    {/* way one  */}
    <Link className="bg-yellow-500 text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400"
    onClick={navigate}
    >Go Back to Homepage</Link>
    {/* way 2  */}
   {/*  <Link to={"/"} className="bg-yellow-500 text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400"
    >Go Back to Homepage</Link> */}
  </div>
</section>

    </>
  );
};

export default NotFound;