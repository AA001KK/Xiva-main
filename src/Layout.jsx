import React, { useEffect } from "react";
import HeaderTop from "./components/Header/HeaderTop/HeaderTop";
import HeaderMenu from "./components/Header/HeaderMenu/HeaderMenu";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { useSelector } from "react-redux";
import Footer from "./components/footer/Footer";
import ImgModal from "./components/Modals/ImgModal";
import HeaderLinks from "./components/Header/HeaderMenu/HeaderLinks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Layout = () => {
  const loaderRedux = useSelector((state) => state.hotels.loaderRedux);
  useEffect(() => {
    let langValue = localStorage.getItem("i18nextLng");
    let lang = "ru";
    localStorage.setItem("i18nextLng", lang);
  }, []);
  return (
    <div className="relative flex flex-col h-screen">
      <HeaderTop />
      <ToastContainer position="top-center" closeButton={false} />
      <div className="mb-4 lg:mb-8">
        <HeaderMenu />
      </div>
      <div className="mx-auto md:hidden px-[10px] my-2 container">
        <HeaderLinks />
      </div>

      {loaderRedux && (
        <div className="relative flex-1">
          <Loader />
        </div>
      )}
      <Outlet />
      <ImgModal />
      <Footer />
    </div>
  );
};

export default Layout;
