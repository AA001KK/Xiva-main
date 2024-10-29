import React from "react";
import Logo from "../../components/Header/HeaderMenu/Logo";
import AdminIcon from "../Admin/AdminHeader/AdminIcon";
import LinksAdmin from "../Admin/AdminHeader/LinksAdmin";
import User from "../../components/Header/User";
import { getUser } from "../../components/redux/slice/user_slice";
import { useSelector } from "react-redux";

export default function HotelONavbar() {
  const { user } = useSelector(getUser);

  return (
    <div className="relative z-10 bg-white shadow-md border-grayLight">
      <div className="container relative flex items-center justify-between w-full py-4 mx-auto ">
        <Logo />
        <LinksAdmin />
        <User user={user}/>
      </div>
    </div>
  );
}
