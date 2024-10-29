import React from "react";
import { useTranslation } from "react-i18next";
import { translatorsLanguages } from "../../../../constants";

const LangsTranslator = ({ translatorsLanguages: languages }) => {
  function isCherries(lang) {
    const found = translatorsLanguages.find((item) => item.language === lang);
    if (found) return found;
  }

  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-wrap gap-[20px]">
      {languages?.map((item, idx) => {
        const lang = isCherries(item);
        return (
          lang && (
            <div key={idx} className="">
              <div className="capitalize  gap-[5px] flex justify-center items-center   border-grayLight text-[13px]">
                <img
                  src={lang.image}
                  className=" w-[20px] rounded-[3px]  h-[15px] object-cover "
                  alt=""
                />
                {t(`translatorFilters.${lang.language}`)}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default LangsTranslator;
