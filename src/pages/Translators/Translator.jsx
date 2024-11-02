import React, { useState } from "react";
import Experience from "/public/translators/customer-review.svg";
import Lang_level from "/public/translators/lang_level.svg";
import museum from "/public/translators/museum.svg";
import check from "/src/assets/check.png";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import TranslatorLangs from "./Languages";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  getBasket,
  incrementCart,
} from "../../components/redux/slice/cart_slice";
import MuchDescription from "../../components/typography/MuchDescription";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import BtnImgModal from "../../components/Modals/BtnImgModal";
const Translator = ({ translatorData }) => {
  const {i18n:{language: lang}, t} = useTranslation()


  const { items } = useSelector(getBasket);
  const dispatch = useDispatch();

  const item = items.find(({ item }) => item._id === translatorData._id);
  const quantity = item?.quantity || 0;

  const increment = () => {
    dispatch(incrementCart({ type: "translator", item: translatorData }));
  };

  const decrement = () => {
    dispatch(decrementCart({ type: "translator", item: translatorData }));
  };

  return (
    <div className=" p-[10px] lg:p-[25px] xl:p-[45px] lg:flex-row flex-col my-[20px] lg:my-[30px] xl:my-[50px] flex justify-between border-dashed border border-grayLight rounded-[12px] ">
      <div className="relative  rounded-[10px] md:rounded-[20px] overflow-hidden  group">
        <img
          src={translatorData.image}
          className=" object-cover  w-full  max-h-[300px] md:max-h-[530px] md:w-[250px] lg:w-[300px] xl:w-[400px] aspect-[3/4] "
        />
        <BtnImgModal img={translatorData?.image} />
      </div>
      <div className="   py-2 md:px-0 lg:ms-[30px]  xl:ms-[40px] flex-1">
        <div className="flex justify-between w-full ">
          <div>
            <div className="flex items-center justify-between my-2 lg:my-4">
              <h1 className="md:text-[30px] text-[25px] ">
                {translatorData[lang].translator_name}
              </h1>
              <div className="flex items-end px-3 py-1 text-lg border border-dashed md:px-5 sm:text-2xl text-main border-grayLight sm:mt-0">
                {translatorData.price} <div className=""> $ </div>
                <div className="text-lg sm:text-xl">
                  {" "}
                  /{t("translators.translatorPrice")}
                </div>
              </div>
            </div>

            <MuchDescription description={translatorData[lang].bio} />
          </div>
        </div>
        <div className="flex flex-wrap text-grayBlog">
          <div className="  gap-[10px] flex-col flex font-mono   font-medium text-[13px] md:text-[15px] my-[20px]">
            <div className="flex items-center gap-2">
              <img src={Experience} className="w-[30px]  object-cover" alt="" />
              <h1>
                {translatorData.experience}{" "}
                {t("translators.translatorExperience")}{" "}
              </h1>
            </div>
            <div className="flex items-center gap-2 ">
              <img src={Lang_level} className="w-[30px]  object-cover" alt="" />
              <h1>
                {" "}
                {t("translators.translatorLang_level")}{" "}
                {translatorData.lang_level}
              </h1>
            </div>
            <TranslatorLangs translatorsLanguages={translatorData.languages} />

            <div className="flex text-[15px] lg:text-[16px] items-center gap-2">
              <img src={museum} className="w-[30px]  object-cover" alt="" />
              <h1 className="px-4 py-1 text-white rounded-md lg:py-0 lg:rounded-sm bg-green ">
                {t("translators.ekskursiya")}
              </h1>
            </div>
            <YourComponent t={t} />
          </div>
        </div>
        <div className="flex justify-start text-end">
          {quantity === 0 ? (
            <UniversalBtn
              click={increment}
              bg={"bg-main"}
              txt={"translators.book"}
            />
          ) : (
            <div className="flex items-center justify-center gap-2">
              <UniversalBtn
                bg={"bg-transparent text-green !px-0 flex items-center gap-2"}
                text={<>
                  <i className="text-lg fa-solid fa-check text-green"></i>
                  {t("main.buttons.success")}
                </>}
                classList="cursor-pointer"
              />
              <button
                onClick={decrement}
                className="lg:rounded-[6px]  rounded-[6px]  font-normal text-white bg-[#F72B50] text-[17px] flex "
              >
                <div className="p-[10px] hidden lg:block px-[15px] border-r border-white ">
                  {t("translators.cancel")}
                </div>
                <div className="md:p-[10px] p-[5px] px-[15px] md:px-[10px]">
                  <i className="fa-regular fa-trash-can"></i>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Translator;

const YourComponent = ({ t }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Ваш список значений

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Показываем все элементы на больших экранах, и только первые 3 — на мобильных
  const visibleItems =
    isExpanded || window.innerWidth >= 1024 ? items : items.slice(0, 3);

  return (
    <div className="flex mt-1  flex-col lg:flex-row lg:flex-wrap gap-2 md:items-center text-[14px] text-grayLight">
      {visibleItems.map((value, index) => (
        <div key={index} className="flex gap-2 font-mono font-normal">
          <img
            src={check}
            className="object-cover rounded-sm w-[17px] h-[17px]"
            alt=""
          />
          <h1>{t("translators.museums.museum" + value)}</h1>
        </div>
      ))}

      {/* Кнопка "подробнее" только на мобильных устройствах */}
      {window.innerWidth < 1024 && !isExpanded && (
        <div
          onClick={toggleReadMore}
          className="block w-full mt-2 font-semibold transition-all cursor-pointer text-main hover:text-main"
        >
          {t("main.buttons.moreBtn")}
        </div>
      )}

      {/* Кнопка "скрыть" только на мобильных устройствах */}
      {window.innerWidth < 1024 && isExpanded && (
        <div
          onClick={toggleReadMore}
          className="block w-full mt-2 font-semibold transition-all cursor-pointer text-main hover:text-main"
        >
          {t("main.buttons.hide")}
        </div>
      )}
    </div>
  );
};

export { YourComponent };
