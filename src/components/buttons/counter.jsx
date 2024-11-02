import React from "react";

export default function Counter({ quantity, increment, decrement, maxCount }) {
  const max = maxCount || 10;

  return (
    <div className="btn-addProduct  flex items-center  py-[3px] px-[15px] sm:py-[9px] sm:px-[24px] text-[16px] md:text-[18px] rounded-lg bg-main text-[white] font-sm">
      <button
        onClick={decrement}
        className={`flex mr-2 ${
          quantity == 0 ? "  " : ""
        } justify-center items-center  rounded-[50%]`}
      >
        <i className="fa-solid  fa-minus text-[16px] md:text-[22px]"></i>
      </button>
      <span className="mx-2 text-[16px] md:text-[19px] font-medium ">
        {quantity}
      </span>
      <button
        onClick={increment}
        className={`flex ms-2 ${
          quantity == max ? " text-[#c5c9ca]" : ""
        } justify-center items-center  rounded-[50%]`}
      >
        <i className="fa-solid fa-plus text-[16px] md:text-[22px]"></i>
      </button>
    </div>
  );
}
