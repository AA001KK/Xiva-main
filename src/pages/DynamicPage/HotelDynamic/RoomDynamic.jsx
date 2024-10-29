import React, { useState } from "react";
import SwiperCar from "../../Cars/SwiperCar";
import bed from "/src/assets/hotels/bed.png";
import child_bed from "/src/assets/hotels/child_bed.svg";
import area from "/src/assets/hotels/area.svg";
import peoples from "/src/assets/hotels/peoples.svg";
import check from "/src/assets/check.png";
import price from "/src/assets/hotels/price.svg";
import { useTranslation } from "react-i18next";
import OutlineBtn from "../../../components/buttons/OutlineBtn";
import {
  decrementCart,
  getBasket,
  incrementCart,
} from "../../../components/redux/slice/cart_slice";
import { useDispatch, useSelector } from "react-redux";
import BtnCounter from "../../../components/buttons/Btn-counter";
const RoomDynamic = ({ roomData, hotel }) => {
  const { items } = useSelector(getBasket);
  const dispatch = useDispatch();

  const item = items.find(({ item }) => item._id === roomData._id);
  const quantity = item?.quantity || 0;

  const lang = localStorage.getItem("i18nextLng");
  const { t, i18n } = useTranslation();

  const increment = () => {
    dispatch(incrementCart({ type: "hotel", item: { ...roomData, hotel } }));
  };

  const decrement = () => {
    dispatch(decrementCart({ type: "hotel", item: { ...roomData, hotel } }));
  };
  return (
    <div className="rounded-[5px] md:rounded-[10px]  xl:flex gap-[20px] my-[20px] border border-dashed p-[10px]  border-grayLight md:py-[15px]">
      <div className=" rounded-[5px]  md:rounded-[10px] xl:max-w-[400px] xl:min-w-[400px] 2xl:max-w-[500px] 2xl:min-w-[400px]  h-[280px] md:h-[350px]   overflow-hidden">
        <SwiperCar images={roomData.images} />
      </div>
      <div className="flex-1 text-[13px] md:text-[16px] md:py-[10px] pt-[10px] md:px-[20px] px-[0px] flex flex-col gap-[5px] ">
        <h1 className=" text-main  font-mono font-semibold md:text-[20px]">
          {roomData[lang]?.room_name}
        </h1>
        <div className="flex items-center gap-2 mt-1 ">
          <img src={bed} className="w-[28px] md:w-[35px]" alt="" />
          <h1 className="font-mono text-grayLight">
            {t("roomBeds.bed" + roomData.bed.type + roomData.bed.count)}
          </h1>
        </div>
        <div className="flex items-center gap-2 ">
          <img src={child_bed} className="w-[28px] md:w-[35px]" alt="" />
          <h1 className="font-mono text-grayLight">{t("hotels.babybed")}</h1>
        </div>
        <div className="flex items-center gap-2 text-main ">
          <img src={area} className="w-[28px] md:w-[35px]" alt="" />
          <h1 className="font-mono text-grayLight">
            <span>
              {roomData.area} m<sup>2</sup>
            </span>
          </h1>
        </div>
        <div className="flex items-center gap-2 text-main ">
          <img src={peoples} className="w-[28px] md:w-[35px]" alt="" />
          <h1 className="font-mono text-grayLight">
            <span>Maksimal mehmonlar soni: {roomData.max_people}</span>
          </h1>
        </div>

        <div className="flex mt-1 flex-wrap gap-2 items-center text-[12px] md:text-[14px] text-grayLight">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
            <div
              key={value}
              className="flex items-center gap-1 font-mono font-normal md:gap-2"
            >
              <img
                src={check}
                className="  object-cover rounded-sm w-[12px] h-[12px] md:w-[17px] md:h-[17px]"
                alt=""
              />{" "}
              <h1>{t("hotels.hotel_comforts.hotel_comfort" + value)}</h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between w-auto gap-3 border-dashed md:mt-2 text-main border-grayLight ">
          <div className="flex items-center gap-2 md:items-start">
            <img src={price} className="w-[25px] object-cover" alt="" />
            <h1 className="font-mono text-grayLight">
              <span>Narxi: {roomData.price} $</span>
            </h1>
          </div>
          <BtnCounter
            quantity={quantity}
            increment={increment}
            decrement={decrement}
          />
        </div>
      </div>
    </div>
  );
};

export default RoomDynamic;
