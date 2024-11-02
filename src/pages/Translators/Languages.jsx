import React from "react";
import { translatorsLanguages } from "../../constants";
import { useTranslation } from "react-i18next";

const TranslatorLangs = ({ translatorsLanguages: languages }) => {
  function isCherries(lang) {
    const found = translatorsLanguages.find((_, id) => id + 1 == lang);
    if (found) return found;
  }

  const { t } = useTranslation();
  return (
    <div className="flex flex-wrap gap-[20px]">
      {languages?.map((item, idx) => {
        const lang = isCherries(item);
        return (
          lang && (
            <div key={idx} className="">
              <div className="capitalize md:gap-[10px] gap-[5px] flex justify-center items-center   border-grayLight  md:text-[16px] text-[13px]">
                <img
                  src={lang.image}
                  className=" md:w-[30px] w-[20px] rounded-[3px] md:h-[20px] h-[15px] object-cover "
                  alt=""
                />
                {t(`translators.translatorFilters.${lang.language}`)}
              </div>
            </div>
          )
        );
      })}
    </div>
  );
};

export default TranslatorLangs;
