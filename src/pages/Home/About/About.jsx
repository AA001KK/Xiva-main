import React from "react";
import SectionDesign from "../../../components/typography/SectionDesign";
import BgImg from "/src/assets/about/bgAbout.png";
import Title from "/src/components/typography/Title";
import Subtitle from "/src/components/typography/Subtitle";
import Criterion from "../../../components/typography/Criterion";
import Img1 from "/src/assets/about/img1.png";
import Img2 from "/src/assets/about/img2.png";
import UniversalBtn from "../../../components/buttons/UniversalBtn";
const About = () => {
  return (
    <div className="container mt-[50px] lg:mb-[200px] mb-[50px]  flex-col-reverse md:flex-row gap-[20px] w-full mx-auto flex relative justify-between">
      <div className="absolute z-[ mt-[50px] overflow-hidden object-cove  h-full ">
        <img
          src={BgImg}
          className=" h-full lg:w-[800px]  object-contain lg:max-w-[1000px]"
          alt=""
        />
      </div>
      <div className="flex mt-12   px-[15px] flex-col lg:w-[40%]  xl:w-[40%] ">
        <div className="mx-auto text-center">
          <SectionDesign text={"About"} />
          <Title
            classNameList={
              "text-[25px] md:text-[30px] xl:text-[40px]   font-playfair "
            }
            txt={`sectionsData.aboutSection.title`}
          />
        </div>
        <Subtitle
          classNameList={
            "max-w-[547px] lg:text-[17px] xl:text-[19px] font-proppins"
          }
          txt={`sectionsData.aboutSection.subtitle`}
        />
        <div className="flex flex-col gap-2 pt-4 ps-4">
          <Criterion txt={`sectionsData.aboutSection.criterion1`} />
          <Criterion txt={`sectionsData.aboutSection.criterion3`} />
          <Criterion txt={`sectionsData.aboutSection.criterion2`} />
        </div>
        <div className="flex mt-[50px] gap-[20px]  justify-center items-center">
          <UniversalBtn txt={"main.buttons.contactBtn"} bg={"bg-main"} />
        </div>
      </div>
      {/* Images  */}
      <div className="images md:relative">
        <div className="mx-auto md:translate-x-[-30px] lg:translate-x-[-100x] xl:translate-x-[-80px] h-[356px] border z-10 relative   border-dashed border-main w-[80vw] md:w-[300px]  lg:w-[500px] xl:w-[609px] 2xl:w-[809px]  ">
          <div className=" translate-x-[15px] overflow-hidden translate-y-[15px] flex justify-center items-center relative  md:w-[300px] lg:w-1/2">
            <img
              src={Img1}
              className=" min-h-[356px] xl:min-h-[356px] 2xl:min-h-[456px] object-cover relative z-100  lg:w-[290px] xl:w-full h-full"
              alt="Img "
            />
            <div className="w-[90%] border border-solid border-white h-[90%] absolute z-[2]"></div>
          </div>
          <div className="lg:w-[280px] translate-x-[300px] xl:translate-x-[360px] 2xl:translate-x-[460px]  overflow-hidden hidden   translate-y-[-60%] 2xl:translate-y-[-75%] lg:flex justify-center items-center relative md:w-[350px]  xl:w-1/2">
            <img
              src={Img2}
              className="  lg:min-h-[306px] xl:min-h-[356px] 2xl:min-h-[456px]  object-cover w-full   h-full"
              alt="Img "
            />
            <div className="w-[90%] border border-solid border-white h-[90%] absolute z-[2]"></div>
          </div>
        </div>
        <div className="hidden lg:block h-[356px] 2xl:h-[416px] lg:translate-x-[20%] lg:translate-y-[-60%]  w-[500px] xl:w-[609px] 2xl:w-[809px]   absolute  xl:translate-y-[-50%] xl:translate-x-[0%]  2xl:translate-y-[-40%]  2xl:translate-x-[0%] border  z-[1]  border-dashed border-main  "></div>
      </div>
    </div>
  );
};

export default About;
