import React from "react";

const RangeBar = ({ rate }) => {
  return (
    <div className="relative border-[1px] border-main w-full md:h-2 h-1     rounded-full orw-full progres-container">
      <div className="h-full bg-main" style={{ width: rate + "%" }}></div>
    </div>
  );
};

export default RangeBar;
