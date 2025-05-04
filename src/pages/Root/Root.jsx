import React from "react";
import NavBar from "../../components/Header/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../../components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const Root = () => {
  const navigation = useNavigation();
  const isNavigating = Boolean(navigation.location);
  return (
    <div>
      <div className="w-11/12 mx-auto">
        <NavBar></NavBar>
        {isNavigating && (
          <div className="flex justify-center items-center p-1">
            <span className="loading loading-spinner text-warning"></span>
          </div>
        )}
        <Outlet></Outlet>
      </div>
      <Footer></Footer>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
};

export default Root;
