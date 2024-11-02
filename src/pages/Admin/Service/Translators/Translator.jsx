import React from "react";
import { Link } from "react-router-dom";
import TranslatorLangs from "../../../Translators/Languages";
import Experience from "/public/translators/customer-review.svg";
import Lang_level from "/public/translators/lang_level.svg";
import LangsTranslator from "./LangsTranslator";
const TranslatorAdmin = ({ translatorData }) => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <Link to={translatorData._id}>
      <div className=" border-border border flex flex-col hover:shadow-xl  transition-all cursor-pointer rounded-[15px] overflow-hidden shadow-md">
        <img
          src={translatorData.image}
          alt=""
          className="w-full aspect-[3/4] object-cover"
        />
        <div className="px-[20px] py-[10px]  pb-[20px]">
          <h1 className="font-mono text-[20px] mb-[10px]">
            {translatorData[lang].translator_name}
          </h1>
          <div className="gap-[5px] flex-col flex font-mono text-[#1E1E1E]  text-[15px] ">
            <div className="flex items-center gap-2">
              <img src={Experience} className="w-[30px]  object-cover" alt="" />
              <h1>{translatorData.experience} yillik tajriba </h1>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={Lang_level} className="w-[30px]  object-cover" alt="" />
              <h1>Til bilish darajasi: {translatorData.lang_level}</h1>
            </div>
            <LangsTranslator translatorsLanguages={translatorData.languages} />
          </div>
          <div className="flex items-center gap-2 mt-3">
            <i className="fa-solid fa-hand-holding-dollar text-main text-[20px]"></i>
            <Link>
              <h1 className=" hover:text-main text-[16px] 2xl:text-[18px] text-grayLight font-mono font-normal">
                Xizmat Narxi: {translatorData.price}$
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TranslatorAdmin;

{
  /* <div
className={` ${
  activeSearch ? "bg-[#2222225c] opacity-1" : ""
} absolute top-0  left-0 right-0 bottom-0  ease all duration-[.3s] flex justify-center items-center`}
> */
}
