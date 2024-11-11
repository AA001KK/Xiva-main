import React, { act, useEffect, useRef } from "react";

// Icons
import Phone from "/src/assets/header/headerMenu/phone.svg";
import { useState } from "react";
import Basket from "./Basket";
import Logo from "./Logo";
import HeaderLinks from "./HeaderLinks";
import BurgerLanguage from "../../Language/BurgerLanguage";
import BurgerLinks from "./BurderLinks";
import Login from "../HeaderTop/Login";
import { useTranslation } from "react-i18next";
import { contactData } from "../../../constants";
const HeaderMenu = () => {
  const [active, setActive] = useState(false);
  const clickedLink = () => {
    setActive(false);
  };
  const { t } = useTranslation();
  return (
    <header className="header  lg:static w-full z-[2000] bg-white px-[10px]">
      <div className="container items-center    transition-all mx-auto py-[8px]  flex justify-between">
        <Logo active={active} />
        <div className="hidden md:block">
          <HeaderLinks />
        </div>
        <div className="flex flex-row-reverse items-center md:gap-4 md:flex-row">
          <button
            onClick={() => setActive(!active)}
            className={`toggle  flex flex-col text-main  gap-[5px] ${
              active
                ? "abolute md:flex top-[10px] right-[0px]  z-[101]"
                : "md:hidden"
            }`}
          >
            <span
              className={`w-[27px] all ease-in-out duration-[0.3s]  ${
                active
                  ? " origin-top-left translate-y-[0px]    rotate-[45deg] "
                  : ""
              } h-[3px] rounded-md bg-main`}
            ></span>
            <span
              className={`w-[27px] all ease-in-out duration-[0.3s]  ${
                active ? " bg-white opacity-0  " : ""
              } h-[3px] rounded-md bg-main`}
            ></span>
            <span
              className={`w-[27px] all ease-in-out duration-[0.3s] ${
                active
                  ? "origin-bottom-left translate-y-[2px]    rotate-[-45deg]"
                  : ""
              } h-[3px] rounded-md bg-main`}
            ></span>
          </button>
          <div className="mr-2 md:hidden">
            <Login />
          </div>
          <div className="h-full mt-2 mr-4 md:mr-2">
            <Basket />
          </div>
          <a
          href={`mailto:${contactData.mailto}`}
            className="md:flex hidden    gap-[10px] items-center  font-medium"
          >
            <i className="fa-regular  text-main  text-[30px]  fa-envelope"></i>

            <div className=" hover:text-[#EC6416] transition-all">
              <h3> {t(`sectionsData.contactSection.title`)}</h3>
              <h4>{contactData.mailto}</h4>
            </div>
          </a>
        </div>

        <div
          className={`flex flex-col overflow-y-scroll justify-between  fixed ${
            active ? " box-menu__info-active  " : " md:hidden box-menu__info"
          }    overflow-y-auto transition-all top-[50px] bottom-0  w-full   !z-[1000] bg-white`}
        >
          <div className="flex  flex-col gap-2 py-[20px] md:hidden ">
            <BurgerLinks
              func={clickedLink}
              classList={"flex-col  !items-start !justify-start"}
            />
          </div>
          <div className="px-[20px]">
            <BurgerLanguage />
          </div>
          <div className="   text-white p-[20px] py-[30px] 2xl:p-[40px]   2xl:py-[50px] bg-[#2D373C]  w-full  mt-12">
            <div className="text-[14px] my-4 lg:my-0 lg:text-[18px]">
              <h1 className="text-[18px] lg:text-[20px] tracking-wide mb-2   md:mb-4">
                {t(`sectionsData.contactSection.title`)}
              </h1>
              <div className="flex flex-col gap-2 lg:gap-4">
                <a href={`tel:${contactData.tel}`}>
                  <div className="flex items-center gap-4 font-mono">
                    <i className="fa-solid  w-[20px] text-[18px] lg:text-[20px]  fa-phone"></i>
                    <h1>{contactData.tel}</h1>{" "}
                  </div>
                </a>
                <a href={`mailto:${contactData.mailto}`}>
                  <div className="flex items-center gap-4 font-mono t">
                    <i className="fa-regular w-[20px]  text-[18px] lg:text-[20px]  fa-envelope"></i>
                    <h1>{t(`sectionsData.contactSection.email`)}</h1>{" "}
                  </div>
                </a>
                <a href={`map:${contactData.location}`}>
                  <div className="flex items-center gap-4 font-mono">
                    <i className="fa-solid  w-[20px] text-[18px] lg:text-[20px] fa-location-dot"></i>
                    <h1>{t(`sectionsData.contactSection.location`)}</h1>{" "}
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderMenu;
