import React from "react";
import Temperature from "/src/assets/blogs/temperature.svg";
import Calendar from "/src/assets/blogs/calendar.svg";
import User from "/src/assets/blogs/user.svg";
import DateComponent from "./Date";
import { Link } from "react-router-dom";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { useTranslation } from "react-i18next";
const Blog = ({ blogData }) => {
  const lang = localStorage.getItem("i18nextLng");
  const {t} = useTranslation()
  return (
    <div
      className="lg:h-[560px] h-[360px] rounded-md lg:rounded-3xl overflow-hidden  relative container mx-auto w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${blogData.image})`,
      }}
    >
      <div className="absolute top-0  px-[5px] lg:px-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center text-white bgbg">
        <h1 className=" text-[20px] lg:text-[40px] shadow-sm">
          {" "}
          {blogData[lang].title}
        </h1>
        <div className="flex flex-wrap gap-[10px] justify-center items-center my-[10px] md:my-[20px] lg:gap-[30px] text-white  text-[14px] md:text-[16px] ">
          <div className="flex items-center gap-2">
            <img src={Temperature} className=" w-[20px] lg:w-[30px]" alt="" />
            {blogData.temperature}
          </div>
          <div className="flex items-center gap-2">
            <img src={Calendar} className=" w-[20px] lg:w-[30px]" alt="" />
            <DateComponent date={blogData.date} />
          </div>
          <div className="flex gap-2 blogDatas-center">
            <img src={User} className=" w-[20px] lg:w-[30px]" alt="" />
            {blogData?.author?.first_name}
            <span> {blogData?.author?.last_name}</span>
          </div>
        </div>
        <p className=" line-clamp-3 max-w-[1100px] text-[16px] lg:text-[20px] ">
          {blogData[lang].description}
        </p>
        <Link  className="lg:mt-4 " to={blogData._id}>
          <UniversalBtn txt={"main.buttons.more"} bg={"bg-main"} />
        </Link>
      </div>
    </div>
  );
};

export default Blog;
