import React from "react";
import Xiva from "/src/assets/banner/xiva4.jpg";
import Xiva2 from "/src/assets/banner/xiva2.jpg";
import Xiva3 from "/src/assets/banner/xiva3.jpg";
import Air from "/src/assets/banner/air.svg";
import Cloud from "/src/assets/banner/cloud.svg";
import Cloud2 from "/src/assets/banner/cloud2.svg";
import Varrok from "/src/assets/banner/varrok.svg";
import UniversalBtn from "../../../components/buttons/UniversalBtn";
import { useTranslation } from "react-i18next";
const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="relative">
      <div className="container mx-auto px-[20px] flex-col-reverse md:flex-row flex items-center lg:relative   justify-between">
        <div className="border hidden lg:block  w-[349px] border-dashed border-main my-[100px] rounded-[175px] h-[405px] lg:h-[575px]">
          <div className="xiva  overflow-hidden w-full h-full  rounded-[175px]">
            <img src={Xiva} className="object-cover w-full h-full img" alt="" />
          </div>
        </div>
        <div className="flex flex-col font-playfair justify-center text-[16px]  items-center text-center  gap-[20px]">
          <h3> {t(`sectionsData.bannerSection.h3`)}</h3>
          <h1 className="max-w-[669px]  text-[28px] md:text-[34px] lg:text-[44px] font-semibold  ">
            {t(`sectionsData.bannerSection.h1`)}
          </h1>
          <p className="text-gray max-w-[650px] font-mono text-[15px]">
            {t(`sectionsData.bannerSection.p`)}
          </p>
          <UniversalBtn txt={"main.buttons.contactBtn"} bg={"bg-main"} />
        </div>
        <div className="border-[1px]  hidden md:block 2xl:translate-x-[60px] translate-x-[50px] relative w-[240px] h-[400px] left-0   md:w-[402px] max-w-[400px] border-dashed border-[#EC6416] my-[50px] rounded-[217px] md:rounded-[257px]  md:h-[459px] lg:h-[659px]">
          <div className="translate-x-[-15px]  translate-y-[-10px]  rounded-[147px] overflow-hidden max-w-[400px] md:w-full h-full  md:rounded-[257px]">
            <img
              src={Xiva3}
              className="object-cover w-full h-full img"
              alt=""
            />
          </div>
          <div className="absolute bottom-[43px]  left-[-120px] rounded-[50%] overflow-hidden  w-[138px] h-[138px] md:w-[188px] md:h-[188px] lg:w-[238px] lg:h-[238px] object-cover border-[5px] md:border-[10px] border-white">
            <img src={Xiva2} className="object-cover w-full h-full " alt="" />
          </div>
        </div>
        <div className=" absolute  top-[250px] air left-[15%] text-main ">
          <img src={Air} className="text-main " alt="" />
        </div>
        <div className="absolute hidden lg:block lg:w-[120px] lg:translate-x-[-30px] xl:translate-x-[-10px]  2xl:translate-x-[0px] xl:w-[140px] 2xl:w-[180px] bottom-[70px] lg:bottom-[90px] left-[-5%] lg:left-[30%] ">
          <img src={Varrok} className="text-main " alt="" />
        </div>
      </div>
      <marquee
        className="absolute pt-6 top-[5vh] -ml-[500px] w-[calc(100vw + 500px)] -z-10"
        scrollamount="7"
        direction="right"
      >
        <img src={Cloud2} alt="" />
      </marquee>
      <marquee
        className="absolute top-[5vh] w-full -z-10"
        scrollamount="8"
        direction="right"
      >
        <img src={Cloud2} className="translate-x-0" alt="" />
      </marquee>
      <marquee
        className="absolute pt-10 top-[5vh] -ml-[200px] w-[calc(100vw + 200px)] -z-10"
        scrollamount="6"
        direction="right"
      >
        <img src={Cloud} className="translate-x-0" alt="" />
      </marquee>
      <marquee
        className="absolute pt-3 top-[5vh] -ml-[1000px] w-[calc(100vw + 1000px)] -z-10"
        scrollamount="5"
        direction="right"
      >
        <img src={Cloud} className="translate-x-0" />
      </marquee>
    </div>
  );
};

export default Banner;
