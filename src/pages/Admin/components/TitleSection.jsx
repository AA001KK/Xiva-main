import React from "react";

const TitleSection = ({ text }) => {
  return (
    <h1 className=" text-[17px] ">
      {text} <span>*</span>
    </h1>
  );
};

export default TitleSection;
