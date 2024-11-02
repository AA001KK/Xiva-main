import React from "react";
// Icons
import Clock from "/src/assets/header/clock.svg";
import Login from "./Login";
import Language from "../../Language/Language";
import { useTranslation } from "react-i18next";
const HeaderTop = () => {
  const {t} = useTranslation()
  return (
    <div className="bg-[#202338] hidden md:block  text-white">
      <div className="container mx-auto  py-[10px] flex  justify-between items-center ">
        <div className="flex md:gap-[98px] md:flex-row flex-col ">
          <div className="flex items-center gap-2">
            <img src={Clock} alt="" />
            <h6>{t("qoldiqlar.oclock")} 09:00-18:00</h6>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px]">
              <i className="fa-solid  w-[20px] text-[18px] lg:text-[20px] fa-location-dot"></i>
            </div>
            <h6>{t("qoldiqlar.city")} </h6>
          </div>
        </div>
        <div className="flex items-center  gap-[20px]">
          <Language />
          <Login />
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
