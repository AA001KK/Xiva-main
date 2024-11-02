import React, { useState } from "react";
import { Link } from "react-router-dom";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import StarsHotel from "../../components/Hotel/StarsHotel";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { useTranslation } from "react-i18next";
const HotelCard = ({ hotel }) => {
  const [hover, setHover] = useState(false);

  const {i18n:{language: lang},t} = useTranslation()
  return (
    <div className=" relative shadow-md rounded-[8px] lg:rounded-[10px] lg:p-[15px] p-[10px] pb-[20px] lg:pb-[25px]">
      <Link to={`/hotels/${hotel._id}`}>
        <div className="relative z-1 group lg:rounded-[16px] rounded-[8px] overflow-hidden">
          <img
            src={hotel.images[0]}
            className="w-full object-cover   aspect-[4/3]"
            alt=""
          />
          <div
            className={` ${
              hover ? " " : ""
            } absolute top-0  left-0 right-0 cursor-pointer  group-hover:opacity-1 group-hover:bg-[#2222225c] bottom-0  ease all duration-[.2s]`}
          ></div>
        </div>
      </Link>
      <div className="flex mt-[15px] lg:mt-[25px]  flex-col gap-[5px] lg:gap-[10px]">
        <Link to={`${hotel._id}`}>
          <h1 className="text-main text-[22px] leading-6 ">
            {hotel[lang].hotel_name}
          </h1>
        </Link>
        <div className="relative text-grayLight text-[17px]">
          <h3 className=" line-clamp-3">{hotel[lang].description}</h3>
          <Link to={`${hotel._id}`}>
            <span className="absolute bottom-0 right-0 transition-all bg-white cursor-pointer hover:text-main">
              {t("main.buttons.moreBtn")}
            </span>
          </Link>
        </div>

        <div className=" flex-col flex w-full   lg:gap-[10px] gap-[5px]  "> 
          <div className="flex justify-between">
            <StarsHotel numStars={hotel.stars} />
            <h3 className="flex text-main  font-display  items-center text-[22px]">
              <span className="">$</span>
              {hotel.price}
            </h3>
          </div>
          <Link to={`${hotel._id}`} className="flex justify-center w-full text-center">
            <UniversalBtn txt={"main.buttons.showPrice"} bg={"bg-main"}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
