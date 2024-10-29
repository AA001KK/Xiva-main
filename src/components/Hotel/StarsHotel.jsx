import React, { useEffect, useState } from "react";
import Star from "/src/assets/hotels/star.svg";
const StarsHotel = ({ numStars }) => {
  return (
    <div className="flex text-yellow ">
      {Array(numStars)
        .fill("*")
        .map((_, index) => (
          <img
            src={Star}
            key={index}
            className="w-[18px] md:w-[19px] xl:w-[21px] 2xl:w-[23px]"
            alt=""
          />
        ))}
    </div>
  );
};

export default StarsHotel;
