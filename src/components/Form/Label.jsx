import React from "react";

const Label = ({ id, title }) => {
  return (
    <label
      htmlFor={id}
      className="cursor-pointer text-white  md:text-black text-[13px] md:text-[16px] "
    >
      {title}
    </label>
  );
};

export default Label;
