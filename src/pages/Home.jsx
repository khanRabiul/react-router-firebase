import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="bg-blue-600 text-white py-20 px-6 h-screen">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-lg mb-8">
            We create amazing experiences for users.
          </p>
          <Link
            to="services"
            className="bg-yellow-500 text-blue-600 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-400 transition duration-300"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
