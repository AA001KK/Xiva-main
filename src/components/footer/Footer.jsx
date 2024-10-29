import React from "react";
import Logo from "../Header/HeaderMenu/Logo";
import HeaderLinks from "../Header/HeaderMenu/HeaderLinks";
import ListItem from "../Header/HeaderMenu/ListItem";
import { contactData, paymentTypes } from "../../constants";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const linksCompany = [
    {
      link: "",
      icon: "fa-brands fa-whatsapp",
    },
    {
      link: "",
      icon: "fa-brands fa-telegram",
    },
    {
      link: "",
      icon: "fa-brands fa-instagram",
    },
  ];

  const { t } = useTranslation();

  return (
    <footer className=" bg-[#2D373C]    bottom-0  w-full lg:mt-20 mt-4 px-[15px] font-mono text-white">
      <div className="container lg:py-[55px] py-[35px] mx-auto ">
        <div className="flex flex-col justify-between lg:flex-row ">
          <div className="flex flex-col">
            <Logo />
            <h1 className=" text-[14px] lg:text-[16px] mt-2  lg:mt-4  max-w-[440px]">
              {t("sectionsData.footerSection.title")}
            </h1>
            <div className="hidden my-4 md:block lg:my-2">
              <h1 className="text-[16px] lg:text-[18px] tracking-wide  mb-2   ">
                {t("sectionsData.footerSection.ourLinks")}
              </h1>
              <div className="flex gap-4 text-[18px] lg:text-[20px]">
                {linksCompany.map((item, idx) => (
                  <Link key={idx} to={item.link}>
                    <div
                      key={item}
                      className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer hover:bg-white hover:text-main bg-main"
                    >
                      <i className={item.icon}></i>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="my-4 lg:my-0">
            <h1 className="text-[18px] lg:text-[20px] tracking-wide     lg:mb-4">
              {t("sectionsData.footerSection.foydali")}
            </h1>
            <HeaderLinks
              classList={
                "tracking-wide  flex-col  !text-[15px] lg:!text-[18px] !mt-2 md:my-0  !font-normal !items-start !justify-start !gap-[8px] text-white "
              }
            />
          </div>
          <div className="text-[14px] my-4 lg:my-0 lg:text-[18px]">
            <h1 className="text-[18px] lg:text-[20px] tracking-wide mb-2   md:mb-4">
              {t("sectionsData.footerSection.contactUs")}
            </h1>
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex items-center gap-4 font-mono">
                <i className="fa-solid  w-[20px] text-[18px] lg:text-[20px]  fa-phone"></i>
                <a href={`tel:${contactData.tel}`}>{contactData.tel}</a>
              </div>
              <div className="flex items-center gap-4 font-mono t">
                <i className="fa-regular w-[20px]  text-[18px] lg:text-[20px]  fa-envelope"></i>
                <a href={`mailto:${contactData.mailto}`}>{contactData.mailto}</a>

              </div>

              <div className="flex items-center gap-4 font-mono">
                <i className="fa-solid  w-[20px] text-[18px] lg:text-[20px] fa-location-dot"></i>
                <a href={`map:${contactData.location}`}>  {t(`sectionsData.contactSection.location`)}</a>

              </div>
            </div>
          </div>
          <div>
            <h1 className="text-[18px] lg:text-[20px] mb-4 tracking-wide">
              {t("sectionsData.footerSection.payUs")}

            </h1>
            <div className="grid items-center grid-cols-2 gap-4 ">
              {paymentTypes.map((item, idx) => (
                <div
                  className="w-[106px] lg:w-[126px] flex items-center justify-center h-full py-[10px] px-[20px] lg:py-[20px] bg-white rounded-md lg:rounded-xl"
                  key={idx}
                >
                  <img src={item} className="object-cover" alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="my-4 md:hidden lg:my-0">
            <h1 className="text-[16px] lg:text-[18px] tracking-wide  mb-2   ">
            {t("sectionsData.footerSection.ourLinks")}

            </h1>
            <div className="flex gap-4 justify-center text-[18px] lg:text-[20px]">
              {linksCompany.map((item, idx) => (
                <Link key={idx} to={item.link}>
                  <div className="flex items-center justify-center w-10 h-10 text-white transition-all rounded-full cursor-pointer hover:bg-white hover:text-main bg-main">
                    <i className={item.icon}></i>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
