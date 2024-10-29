import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { genderUser } from "../../constants";
import UserLogo from "/src/assets/admin/user.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { useTranslation } from "react-i18next";

const User = ({ user }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleLogout = () => {
    localStorage.removeItem("acsess-token");
    localStorage.removeItem("cart");
  };

  const userPages = [
    {
      icon: "fa-solid fa-gear",
      title: "settings",
      link: "/profile/settings",
    },
    {
      icon: "fa-solid fa-right-from-bracket",
      title: "logout",
      link: "/login",
      function: handleLogout,
    },
  ];

  return (
    <Menu>
      <MenuButton className="flex items-center gap-2">
        <div className="w-[35px] h-[35px] md:w-[45px] md:h-[45px] overflow-hidden">
          <img
            src={
              genderUser.find((item) => user?.gender == item.title)?.image ||
              UserLogo
            }
            className="object-cover w-full h-full rounded-[50%]"
            alt=""
          />
        </div>
        <div className=" hidden md:flex font-mono text-[15px] flex-col">
          <h1 className="font-medium leading-[1]">
            {user.last_name || user.first_name
              ? `${user.last_name || ""} ${user.first_name || ""}`
              : user.email}
          </h1>
          <p className="font-normal text-start font-proppins text-grayLight">
            {t(`roles.${user.role}`)}
          </p>
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom center"
        transition
        className="bg-white z-[1000] text-[12px] lg:text-sm transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:-translate-y-2 data-[closed]:opacity-0 mt-1.5 shadow-md lg:text-[16px] bg-blue-700 hover:bg-blue-800  cursor-pointer font-mono rounded-lg !overflow-hidden dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 divide-y divide-black/10"
      >
        {userPages.map((pages, idx) => (
          <MenuItem key={idx}>
            <div
              onClick={() => {
                pages?.function ? pages.function() : null;
                navigate(pages.link);
              }}
              className="px-4  bg-white  py-[8px] font-mono hover:text-main transition uppercase hover:bg-gray-100 dark:hover:bg-gray-600 group"
            >
              <div className="flex items-center gap-2 transition-all group-hover:translate-x-2">
                <i
                  className={`${pages.icon}`}
                ></i>
                <span className="">{t(`main.buttons.${pages.title}`)}</span>
              </div>  
            </div>
          </MenuItem>
        ))}
        {user.role === "hotel_owner" && (
          <MenuItem>
            <div
              onClick={() => navigate("/hotel-owner/orders")}
              className="px-4 py-[8px] font-mono hover:text-main transition uppercase hover:bg-gray-100 dark:hover:bg-gray-600 group"
            >
              <div className="flex items-center gap-2 transition-all group-hover:translate-x-2">
                <i
                  className={`fa-solid fa-user`}
                ></i>
                <span className="">{t("main.buttons.cabinet")}</span>
              </div>
            </div>
          </MenuItem>
        )}
        {user.role === "admin" && (
          <MenuItem>
            <div
              onClick={() => navigate("/admin/home")}
              className="px-4 py-[8px] font-mono hover:text-main transition uppercase hover:bg-gray-100 dark:hover:bg-gray-600 group"
            >
              <div className="flex items-center gap-2 transition-all group-hover:translate-x-2">
                <i
                  className={`fa-solid fa-user`}
                ></i>
                <span className="">{t("main.buttons.cabinet")}</span>
              </div>
            </div>
          </MenuItem>
        )}
      </MenuItems>
    </Menu>
  );
};

export default User;
