import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const MuchDescription = ({ description ,classList, line, txt }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  const { t } = useTranslation();
  return (
    <div className={`relative text-gray-600 font-mono  text-sm sm:text-base lg:text-[14px] xl:text-[16px] mt-2 ${classList}`}>
      <span
        className={`${
          isExpanded ? "" : `line-clamp-4 ${line}`
        } overflow-hidden transition-all relative`}
      >
        {description || t(txt )}
        {!isExpanded && (
          <span
            onClick={toggleReadMore}
            className="absolute bottom-0 right-0 pl-1 bg-white cursor-pointer text-main hover:text-main"
            style={{ paddingLeft: "8px" }} // Дополнительный стиль для кнопки
          >
            {t("main.buttons.moreBtn")}
          </span>
        )}
      </span>
      {isExpanded && (
        <span
          onClick={toggleReadMore}
          className="block mt-2 transition-all bg-white cursor-pointer text-main hover:text-main"
        >
          {t("main.buttons.hide")}
        </span>
      )}
    </div>
  );
};

export default MuchDescription;
