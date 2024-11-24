import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
const Layout = () => {
   const navigation = useNavigation();
  return (
    <>
     <div>
        <Navbar />
        {
         navigation.state === "loading" && (
            <div className="fixed inset-0 flex justify-center ite w-full bg-blue-500 text-white text-center py-2">
            Loading...
          </div>
         )
        }
     </div>
     <div>
        <Outlet />
     </div>
     <div>
        <Footer />
     </div>
    </>
  );
};

export default Layout;