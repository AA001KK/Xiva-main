import React from "react";

const BasketCount = ({ classNameList = "bg-[#00CC14]", count }) => {
  return (
    <span
      className={`${classNameList} w-[15px] text-white right-[-5px] h-[15px] rounded-[50%] text-[11px]  absolute top-[-8px] flex justify-center items-center`}
    >
      {count}
    </span>
  );
};

export default BasketCount;
