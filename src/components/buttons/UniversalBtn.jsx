import React from "react";
import { useTranslation } from "react-i18next";

const UniversalBtn = ({
  text,
  txt,
  bg,
  click,
  classList = "btn_effects ",
}) => {
  const { t } = useTranslation(); 

  return (
    <button
      onClick={click}
      className="relative overflow-hidden font-mono text-white"
    >
      <div
        className={`relative overflow-hidden cursor-pointer  text-center  lg:px-[40px] px-[20px] py-[8px] lg:py-[10px] text-[14px]  lg:text-[17px] rounded-md lg:rounded-md ${bg}`}
      >
        {t(txt) || text}
        <div className={classList}></div>
      </div>
    </button>
  );
};

export default UniversalBtn;
