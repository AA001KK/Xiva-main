import React from "react";
import { Link } from "react-router-dom";
import { headerLinks } from "../../../constants";
import { useTranslation } from "react-i18next";

const BurgerLinks = ({ classList, func}) => {
  const { t } = useTranslation();
  return (
    <ul
      className={` text-[18px] text-blue flex  items-center  font-medium ${classList}`}
    >
      {headerLinks.map((item, idx) => {
        let link = item;
        if (link == "home") {
          link = "";
        }
        return (
          <li
            className="transition-all p-[10px] px-[20px] border-b border-border w-full hover:text-main"
            key={idx}
          >
            <Link onClick={func} to={`${link}`}>{t("main.headersLinks." + item)}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default BurgerLinks;
