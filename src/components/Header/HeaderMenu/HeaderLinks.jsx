import React from "react";
import { NavLink } from "react-router-dom";
import { headerLinks } from "../../../constants";
import { useTranslation } from "react-i18next";

const HeaderLinks = ({ classList }) => {
  const { t } = useTranslation();
  return (
    <div
      className={` md:text-[18px] text-[16px] transition-all kombo-box md:overflow-hidden   overflow-x-scroll   justify-start     max-w-[100%]  text-blue flex  items-center gap-[18px] md:gap-[28px] font-medium ${classList}`}
    >
      {headerLinks.map((item, idx) => {
        let link = item;
        if (link == "home") {
          link = "";
        }
        return (
            <NavLink
              key={idx}
              to={`${link}`}
              className={({ isActive }) => `${ isActive ? 'text-main' : '' } transition-all hover:text-main`}
            >
              {t("main.headersLinks." + item)}
            </NavLink>
        );
      })}
    </div>
  );
};

export default HeaderLinks;
