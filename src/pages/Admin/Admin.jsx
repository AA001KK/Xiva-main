import React from "react";
import AdminHeader from "./AdminHeader/AdminHeader";
import { Outlet } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { useSelector } from "react-redux";
import LinksAdmin from "./AdminHeader/LinksAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Admin = () => {
  const loaderRedux = useSelector((state) => state.hotels.loaderRedux);

  return (
    <div className=" bg-[#F4F7FD]   h-[100vh]">
      <AdminHeader />
      <ToastContainer position="top-center" closeButton={false} />

      <div className="my-4 md:hidden">
        <LinksAdmin />
      </div>
      {loaderRedux && (
        <div className="relative w-full h-full mt-[-60px]">
          <Loader />
        </div>
      )}
      <div className=" bg-[#F4F7FD] ">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
