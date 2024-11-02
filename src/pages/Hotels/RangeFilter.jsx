import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";

const RangeFilter = ({ price, setPrice }) => {
  const hello = (e) => {
    const value = e.target.value;
    setPrice(value);
  };

  const {t} = useTranslation()

  return (
    <div>
      <h1 className=" lg:my-[10px] my-[5px] lg:text-[18px] text-[16px] text-main">{t("main.hotelFilters.byudjet")}</h1>
      <div className="relative w-full progress-container">
        <input
          type="range"
          value={price}
          min="0"
          max="1000"
          step="20"
          onChange={hello}
          className={`progress rounded-lg
            ${
              price > 200
                ? "[&::-webkit-slider-thumb]:shadow-xl"
                : "[&::-webkit-slider-thumb]:static"
            }
           `}
          style={{
            background: `linear-gradient(to right,#ec6416 0%,#ec6416 ${
              (price / 1000) * 100
            }%, #fff ${(price / 1000) * 100}%, #fff 100%)`,
          }}
        />
        <div
          className={`rounded-[6px] left-[-13px] px-3 py-[3px]  text-white font-proppins text-[14px] bg-[#ED8A51]  top-[25px] absolute  left-[${
            (price / 1000) * 100
          }%] -translate-x-1/2 text-gray-500 `}
          style={{
            left: `${(price / 1000) * 100}%`,
          }}
        >
          {price}$
        </div>
      </div>
    </div>
  );
};

export default RangeFilter;
