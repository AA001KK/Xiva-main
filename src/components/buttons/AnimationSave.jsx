import React from "react";

const AnimationSave = () => {
  const formFull = false;
  return (
    <div className="relative mt-2 overflow-hidden text-white">
      <div
        className={` ${
          !formFull
            ? "bg-[#B0BEC5] cursor-not-allowed"
            : "bg-[#007BFF] hover:bg-[#0056b3]"
        }  relative  cursor-pointer px-[50px] py-[10px] text-[17px] rounded-md `}
      >
        Saqlash
        <div className="btn_effects"></div>
      </div>
    </div>
  );
};

export default AnimationSave;
