import React from "react";
import Img from "/src/assets/header/headerMenu/logo.jpg";
import { Link } from "react-router-dom";

const Logo = ({ active }) => {
  return (
    <Link to={"/"} className="flex items-center gap-2 font-medium ">
      <img
        src={Img}
        className={`${
          active ? " relative  z-[1000]" : ""
        } w-[40px]  object-contain lg:w-[70px] `}
        alt="sss"
      />
      <span className=" sm:text-[20px] text-[16px] font-playfair leading-0">
        XIVA GOLD TOUR
      </span>
    </Link>
  );
};

export default Logo;
