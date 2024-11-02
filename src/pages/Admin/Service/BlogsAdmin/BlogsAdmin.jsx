import React from "react";
import { Link, NavLink } from "react-router-dom";
import PageDesign from "../../components/PageDesign";
import Temperature from "/src/assets/blogs/temperature.svg";
import Calendar from "/src/assets/blogs/calendar.svg";
import User from "/src/assets/blogs/user.svg";
import Blog1 from "/src/assets/blogs/blog1.png";
import DateComponent from "../../../Blogs/Date";
import useFetch from "../../../../hooks/useFetch";
import TitlePage from "../../components/TitlePage";

const BlogsAdmin = () => {
  const { data } = useFetch("blogs?limit=100");
  const blogs = data.items || [];
  return (
    <PageDesign>
      <TitlePage add title={"Saytga joylangan Bloglar"} link={"add"} />
      <div className="px-[20px]  pb-[60px] pt-0">
        {blogs?.map((item, idx) => {
          return (
            <Link key={idx} to={`${item._id}`}>
              <Blog blogData={item} />
            </Link>
          );
        })}
      </div>
    </PageDesign>
  );
};

export default BlogsAdmin;

const Blog = ({ blogData }) => {
  const lang = localStorage.getItem("i18nextLng");

  return (
    <div
      className="h-[460px] my-6 rounded-3xl overflow-hidden  relative container mx-auto w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: `url(${blogData.image})`,
      }}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 flex flex-col items-center justify-center text-center text-white bgbg">
        <h1 className=" text-[40px] shadow-sm"> {blogData[lang].title}</h1>
        <div className="flex items-center my-[10px] md:my-[20px] gap-[30px] text-white  text-[14px] md:text-[16px] ">
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
        <p className=" line-clamp-3 max-w-[1100px] text-[20px] ">
          {blogData[lang].description}
        </p>
        <Link to={blogData._id}>
          <div className="relative h-full mt-2 overflow-hidden ">
            <div className=" relative  cursor-pointer  px-[50px] py-[10px] text-[17px] rounded-md bg-main">
              Batafsil
              <div className="btn_effects"></div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Blog };
