import React from "react";
import Title from "../../../components/typography/Title";
import SectionDesign from "../../../components/typography/SectionDesign";
import BgAbout from "/src/assets/about/bgAbout2.png";
import Features1 from "/src/assets/about/features1.png";
import Features2 from "/src/assets/about/features2.png";
import Features3 from "/src/assets/about/features3.png";
import Features4 from "/src/assets/about/features4.png";
import { useTranslation } from "react-i18next";
const Features = () => {
  const { t } = useTranslation();
  return (
    <div className="container mx-auto relative features lg:my-[150px] my-[70px]">
      <SectionDesign
        classNameList={"text-center justify-center "}
        text={"Features"}
      />
      <Title
        classNameList={
          "font-playfair text-[25px] md:text-[30px] xl:text-[40px] text-center"
        }
        txt={`sectionsData.featuresSection.title`}
      />
      <div className=" justify-start   items-start 2xl:flex-nowrap  flex flex-wrap   gap-[20px] mt-[50px] font-normal font-proppins   text-white     text-[17px]">
        <div className="py-[35px] px-[10px]  mx-auto xl:py-[44px] bg-main xl:px-[40px] text-center">
          <img
            src={Features1}
            className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] xl:w-[110px] xl:h-[110px] object-cover  mx-auto"
            alt=""
          />
          <p className="w-[250px] md:w-[270px] xl:w-[280px] 2xl:w-[300px] px-[20px] mt-[10px] text-[15px] sm:text-[17px] xl:text-[19px] text-center">
            {t("sectionsData.featuresSection.features1")}
          </p>
        </div>

        <div className="py-[35px] px-[10px]  mx-auto xl:py-[44px] bg-main xl:px-[40px] text-center">
          <img
            src={Features2}
            className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] xl:w-[110px] xl:h-[110px] object-cover  mx-auto"
            alt=""
          />
          <p className="w-[250px] md:w-[270px] xl:w-[280px] 2xl:w-[300px] px-[20px] mt-[10px] text-[15px] sm:text-[17px] xl:text-[19px] text-center">
            {t("sectionsData.featuresSection.features2")}
          </p>
        </div>
        <div className="py-[35px] px-[10px] lg:h-[231px] xl:h-[265px]  mx-auto xl:py-[44px] bg-main xl:px-[40px] text-center">
          <img
            src={Features3}
            className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] xl:w-[110px] xl:h-[110px] object-cover  mx-auto"
            alt=""
          />
          <p className="w-[250px] md:w-[270px]  xl:w-[280px] 2xl:w-[300px]  mt-[10px] text-[15px] sm:text-[17px] xl:text-[19px] text-center">
            {t("sectionsData.featuresSection.features3")}
          </p>
        </div>
        <div className="py-[35px] px-[10px]  mx-auto xl:py-[44px] bg-main xl:px-[40px] text-center">
          <img
            src={Features4}
            className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] xl:w-[110px] xl:h-[110px] object-cover  mx-auto"
            alt=""
          />
          <p className="w-[250px] md:w-[270px] xl:w-[280px] 2xl:w-[300px] px-[20px] mt-[10px] text-[15px] sm:text-[17px] xl:text-[19px] text-center">
            {t("sectionsData.featuresSection.features4")}
          </p>
        </div>
      </div>
      <img
        src={BgAbout}
        className="object-cover  z-[-1] absolute top-0"
        alt=""
      />
    </div>
  );
};

export default Features;
