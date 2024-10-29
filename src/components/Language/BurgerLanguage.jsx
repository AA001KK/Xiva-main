import React from "react";
import { useTranslation } from "react-i18next";
import { langs } from "../../constants";

const BurgerLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  return (
    <div className="grid grid-cols-2 gap-4">
      {langs.map((lang, idx) => {
        return (
          <div
          key={idx}
            onClick={() => {
              changeLanguage(lang);
            }}
            className="flex justify-center gap-2 border shadow-sm rounded-md cursor-pointer py-[10px]  border-border"
          >
            <img
              src={`/Main/langs/${lang}.png`}
              className=" w-[25px] rounded-[50%] object-cover h-[25px]"
              alt=""
            />
            <button className="uppercase ">{lang}</button>
          </div>
        );
      })}
    </div>
  );
};

export default BurgerLanguage;
