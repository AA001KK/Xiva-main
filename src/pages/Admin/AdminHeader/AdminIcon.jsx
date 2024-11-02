import React from "react";
import User from "/src/assets/admin/user.svg";

import BasketCount from "../../../components/Header/HeaderMenu/BasketCount";
import { useSelector } from "react-redux";
import { getUser } from "../../../components/redux/slice/user_slice";
import { genderUser } from "../../../constants";
import { useTranslation } from "react-i18next";
const AdminIcon = () => {
  const { user } = useSelector(getUser)
  const { t } = useTranslation()
  return (
    <div className=" flex  gap-[25px]">
      <div className="relative mt-2">
        <div className="top-[-5px] right-0  absolute">
          <BasketCount count={1} />
        </div>
        <i className="fa-regular text-[25px] fa-bell"></i>
      </div>{" "}
      <div className="flex items-center gap-4">
        <div className="w-[45px] h-[45px]  overflow-hidden">
          <img
            src={genderUser.find(item => user.gender == item.title)?.image || User}
            className="object-cover w-full  h-full rounded-[50%]"
            alt=""
          />
        </div>
        <div className="flex font-mono text-[17px] flex-col">
          <h1 className="font-medium leading-[1] uppercase">{ (user.last_name || user.first_name) ? `${user.last_name} ${user.first_name}` : user.email}</h1>
          <p className="font-normal font-proppins text-grayLight">
            { t(`roles.${user.role}`) }
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminIcon;
