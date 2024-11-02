import React, { useState } from "react";
import driver from "/src/assets/driver2.png";
import check from "/src/assets/check.png";
import conditsioner from "/src/assets/air-conditioner.png";
import SwiperCar from "./SwiperCar";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCart,
  getBasket,
  incrementCart,
} from "../../components/redux/slice/cart_slice";
import MuchDescription from "../../components/typography/MuchDescription";
import UniversalBtn from "../../components/buttons/UniversalBtn";
const Car = ({ car }) => {
  const {
    i18n: { language: lang },
    t,
  } = useTranslation();

  const { items } = useSelector(getBasket);
  const dispatch = useDispatch();

  const item = items.find(({ item }) => item._id === car._id);
  const quantity = item?.quantity || 0;

  const increment = () => {
    dispatch(incrementCart({ type: "car", item: car }));
  };

  const decrement = () => {
    dispatch(decrementCart({ type: "car", item: car }));
  };

  return (
    <div className="lg:p-[30px] p-[10px] xl:p-5 md:mb-[20px] md:items-start lg:gap-7 xl:gap-9  sm:p-4 md:my-12 my-6 md:flex  md:flex-row  items-center border-dashed border border-gray-300 rounded-lg">
      <div className="rounded-[14px]  max-w-[600px] h-[250px]  swiperCar w-full lg:h-[400px] lg:w-[450px]  xl:h-[500px] xl:w-[500px] 2xl:h-[500px] 2xl:w-[600px]  overflow-hidden">
        <SwiperCar images={car.images} />
      </div>
      <div className="flex-1 w-full mt-5 ">
        <div className="flex flex-col flex-wrap justify-between min-w-full md:items- sm:flex-row">
          <div className="w-full ">
            <div className="flex items-center justify-between w-full ">
              <h1 className="font-mono text-[18px] font-medium  md:text-2xl sm:text-3xl">
                {car[lang].car_name}
              </h1>
              <div className="flex items-end px-5 py-1 text-xl border border-dashed sm:text-2xl text-main border-grayLight sm:mt-0">
                {car.price} <div className=""> $ </div>
                <div className="text-lg sm:text-xl"> /{t("cars.carPrice")}</div>
              </div>
            </div>
            <MuchDescription description={car[lang].description} />
          </div>
        </div>
        <div className="md:mt-5 ">
          <div className="flex  flex-col text-[13px]  md:text-[15px] xl:gap-5  lg:gap-3 gap-1 font-mono  text-blue mt-2  md:mt-5">
            <div className="flex items-center">
              <img
                src={driver}
                className="w-[15px] md:w-[20px]  object-cover"
                alt=""
              />
              <h1 className="ml-2">{t("cars.carDriver")}</h1>
            </div>

            <div className="flex items-center">
              <img
                src={conditsioner}
                className=" w-[15px] md:w-[20px]  object-cover"
                alt=""
              />
              <h1 className="ml-2">{t("cars.conditioner")}</h1>
            </div>
            <div className="flex items-center">
              <img
                src={check}
                className=" w-[15px] md:w-[20px]  object-content"
                alt=""
              />
              <h1 className="ml-2">
                {t("cars.doors")} {car.car_doors}
              </h1>
            </div>
            <div className="flex items-center">
              <img
                src={check}
                className=" w-[15px] md:w-[20px]  object-content"
                alt=""
              />
              <h1 className="ml-2">
                {t("cars.seats")} {car.car_seats}
              </h1>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-between gap-2 mt-5 sm:flex-row">
          {quantity === 0 ? (
            <UniversalBtn click={increment} bg={"bg-main"} txt={"cars.book"} />
          ) : (
            <div className="flex items-center justify-center gap-2">
            <UniversalBtn
                bg={"bg-transparent text-green !px-0 flex items-center gap-2"}
                text={<>
                  <i className="text-lg fa-solid fa-check text-green"></i>
                  {t("main.buttons.success")}
                </>}
                classList="cursor-pointer"
              />
              <button
                onClick={decrement}
                className="lg:rounded-[6px]  rounded-[6px]  font-mono font-normal text-white bg-[#F72B50] text-[17px] flex "
              >
                <div className="p-[10px] hidden lg:block px-[15px] border-r border-white ">
                  {t("cars.cancel")}
                </div>
                <div className="md:p-[10px] p-[5px] px-[15px] md:px-[10px]">
                  <i className="fa-regular fa-trash-can"></i>
                </div>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Car;
