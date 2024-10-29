import React from "react";
import Logo from "../../../components/Header/HeaderMenu/Logo";
import LinksAdmin from "./LinksAdmin";
import AdminIcon from "./AdminIcon";
import Login from "../../../components/Header/HeaderTop/Login";

const AdminHeader = () => {
  return (
    <div className="relative z-10 px-[10px] md:px-0 bg-white shadow-md border-grayLight">
      <div className="container relative flex items-center justify-between w-full py-4 mx-auto ">
        <Logo />
        <div className="hidden md:block">
          <LinksAdmin />
        </div>
        <Login />
      </div>
    </div>
  );
};

export default AdminHeader;
