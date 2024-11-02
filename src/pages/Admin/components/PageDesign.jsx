import React from "react";

const PageDesign = ({ children }) => {
  return (
    <div className="px-[10px]  md:px-0">
      <div className="container mx-auto  md:py-[30px] py-[20px] font-medium font-mono ">
        <div className="border border-grayLight   bg-white  rounded-[10px]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default PageDesign;
