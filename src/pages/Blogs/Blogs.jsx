import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import Temperature from "/src/assets/blogs/temperature.svg";
import Calendar from "/src/assets/blogs/calendar.svg";
import User from "/src/assets/blogs/user.svg";
import Blog1 from "/src/assets/blogs/blog1.png";
import DateComponent from "./Date";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Blog from "./Blog";

const Blogs = () => {
  const lang = localStorage.getItem("i18nextLng");
  const { t, i18n } = useTranslation();
  const { data, loading } = useFetch("blogs?limit=100");
  const blogs = data.items || [];

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    !loading && (
      <div className="flex  px-[10px] lg:px-0  font-mono  flex-col my-6 gap-[20px] lg:gap-[40px]">
        {blogs?.map((item, idx) => {
          return <Blog blogData={item} key={idx} />;
        })}
      </div>
    )
  );
};

export default Blogs;
