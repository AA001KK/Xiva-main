import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import HotelONavbar from "./navbar";
import Loader from "../../components/Loader/Loader";
import LinksAdmin from "../Admin/AdminHeader/LinksAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function HotelOLayout() {
  const loaderRedux = useSelector((state) => state.hotels.loaderRedux);

  return (
    <div className=" bg-[#F4F7FD]  h-screen">
      <HotelONavbar />
      <ToastContainer position="top-center" closeButton={false} />

      {loaderRedux && (
        <div className="relative flex items-center justify-center h-full ">
          <div className="absolute top-0 left-0 w-full h-full">
            <Loader />
          </div>
        </div>
      )}
      <div className=" bg-[#F4F7FD] ">
        <Outlet />
      </div>
    </div>
  );
}
