import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarImg from "/src/assets/about/calendar/calendar.svg";
import User from "/src/assets/about/calendar/users.svg";
import Children from "/src/assets/about/calendar/children2.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Link } from "react-router-dom";
import UniversalBtn from "../buttons/UniversalBtn";
import { date_formatter } from "../helpers/date_formatter";
import { useDispatch, useSelector } from "react-redux";
import { getBasket, setCartDate } from "../redux/slice/cart_slice";
import { useTranslation } from "react-i18next";

function HotelBookingCalendar2({ link }) {
  const [activeStart, setActiveStart] = useState(false);
  const [activeEnd, setActiveEnd] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const dispatch = useDispatch();
  const cart = useSelector(getBasket);
  console.log(cart.date);

  const handleStartDateChange = (date) => {
    if (endDate && date > endDate) {
      setEndDate(null);
      return;
    }
    const formattedDate = date_formatter(date);
    setStartDate(formattedDate);
    dispatch(
      setCartDate({
        start: formattedDate,
        end: endDate,
      })
    );
  };

  const handleEndDateChange = (date) => {
    const formattedDate = date_formatter(date);
    setEndDate(formattedDate);
    dispatch(
      setCartDate({
        start: startDate,
        end: formattedDate,
      })
    );
  };

  const openedStart = () => {
    setActiveStart(true);
  };

  const closedStart = () => {
    if (startDate) {
      setActiveStart(true);
    } else {
      setActiveStart(false);
    }
  };

  const openedEnd = () => {
    setActiveEnd(true);
  };

  const closedEnd = () => {
    if (endDate) {
      setActiveEnd(true);
    } else {
      setActiveEnd(false);
    }
  };

  const [activeAdults, setActiveAdults] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const addAdult = () => {
    if (adults < 10) {
      setAdults((adults) => adults + 1);
    }
  };

  const decrementAdult = () => {
    if (adults == 1) {
    } else {
      setAdults((adults) => adults - 1);
    }
  };

  const incrementChild = () => {
    if (children < 10) {
      setChildren((children) => children + 1);
    }
  };

  const decrementChild = () => {
    if (children == 0) {
    } else {
      setChildren((children) => children - 1);
    }
  };

  const { t } = useTranslation();

  return (
    <Menu>
      <div className=" border-border  border-solid border pt-4 md:py-2 font-mono md:rounded-[6px] rounded-[4px]  md:w-auto inline-block mx-auto    shadow-sm   container">
        <div className="relative flex flex-col justify-between md:flex-row lg:items-center ">
          <div className="relative bg-white border-b md:border-b-0 pb-[10px] lg:py-[0px]  md:border-r   border-grayLight px-[20px] lg:px-[45px]   ">
            <label
              onClick={openedStart}
              htmlFor="startDate"
              className={`  z-[101] ${
                activeStart
                  ? " translate-y-[-15px] lg:translate-y-[-25px] text-[14px] lg:text-[14px] left-[10px] "
                  : ""
              } transition-all z-10 top-[5px]`}
            >
              {t("qoldiqlar.checkin")}
            </label>
            <div
              className={`flex  relative md:z-[100] justify-between lg:justify-start  items-center `}
            >
              <DatePicker
                className="block w-full h-full pt-2 outline-none"
                onCalendarOpen={() => openedStart()}
                onCalendarClose={() => closedStart()}
                id="startDate"
                selected={startDate || cart?.date?.start}
                onChange={handleStartDateChange}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                placeholderText={t("qoldiqlar.selectDate")}
              />
              <label className="cursor-pointer " htmlFor="startDate">
                <img src={CalendarImg} alt="" />
              </label>
            </div>
          </div>
          <div className=" bg-white py-[10px]  lg:py-[0] border-b md:border-b-0  md:border-r   border-grayLight px-[20px] lg:px-[45px]  ">
            <label
              onClick={() => {
                openedEnd();
              }}
              htmlFor="endDate"
              className={` translate-y-[5px] z-[101] ${
                activeEnd
                  ? " translate-y-[-0px] lg:translate-y-[-25px] text-[14px] lg:text-[14px] translate-x-[-0px] lg:translate-x-[-14px] left-0   "
                  : ""
              } transition-all lg:top-[5px] ${
                activeStart ? " z-0 lg:!z-[101]" : " opacity-1"
              } `}
            >
              {t("qoldiqlar.checkout")}
            </label>
            <div
              className={`flex  relative z-[10] justify-between lg:justify-start  items-center ${
                activeStart ? " z-0 lg:!z-[100]" : " "
              }`}
            >
              <DatePicker
                className="block w-full h-full py-2 pb-0 outline-none !static"
                id="endDate"
                onCalendarOpen={() => openedEnd()}
                onCalendarClose={() => closedEnd()}
                selected={endDate || cart?.date?.end}
                onChange={handleEndDateChange}
                minDate={startDate ? startDate : new Date()}
                dateFormat="MM/dd/yyyy"
                placeholderText={t("qoldiqlar.selectDate")}
              />
              <label className="cursor-pointer " htmlFor="endDate">
                <img src={CalendarImg} alt="" />
              </label>
            </div>
          </div>
          <div className="relative   bg-white border-b md:border-b-0  md:border-r   border-grayLight px-[0px] lg:px-[45px] ">
            <MenuButton>
              <div
                onClick={() => {
                  // setActiveAdults(!activeAdults);
                }}
                className={`${
                  activeAdults ? "border-main" : " border-white"
                } flex my-[10px]  bg-white w-full   items-center  rounded-[4px]  max-h-[32px]  gap-4  lg:hover:border-main transition-all lg:px-[20px] mx-[20px]  lg:mx-0  border`}
              >
                <div className="flex gap-4 ">
                  <img src={User} alt="" />
                  <div className="flex font-mono text-[15px]  items-center gap-2 ">
                    <p className="flex gap-[4px]   items-center">
                    {t("qoldiqlar.adults")}  <span>{adults} </span> 
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <img
                    src={Children}
                    className=" w-[48px] object-contain font-thin   "
                    alt=""
                  />

                  <p className="flex items-center  font-mono text-[15px] gap-[4px]   ">
                  {t("qoldiqlar.children")}  <span>{children} </span> 
                  </p>
                </div>
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom end"
              transition
              className="bg-white transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:-translate-y-2 data-[closed]:opacity-0 mt-1.5 shadow-md text-[16px] bg-blue-700 hover:bg-blue-800  cursor-pointer font-mono rounded-lg !overflow-hidden dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 divide-y divide-black/10"
            >
              <MenuItem key={"123"}>
                <div className="flex adults-children items-center justify-between px-[20px] py-[8px] gap-[50px]">
                  <label htmlFor="adults" className="font-proppins text-[15px]">
                  {t("qoldiqlar.adults")}
                  </label>
                  <div className="text-[18px] flex border justify-between rounded-md gap-4 border-grayLight">
                    <button
                      onClick={(event) => {
                        event.stopPropagation(); // Останавливаем распространение клика
                        decrementAdult();
                      }}
                      className={`${
                        adults == 1
                          ? "text-grayLight cursor-default hover:text-grayLight"
                          : "text-blue hover:text-main"
                      } py-[8px] px-[12px]`}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="py-[8px] mx-[4px]">{adults}</div>
                    <button
                      onClick={(event) => {
                        event.stopPropagation(); // Останавливаем распространение клика
                        addAdult();
                      }}
                      className={`${
                        adults == 10
                          ? "text-grayLight cursor-default hover:text-grayLight"
                          : "text-blue hover:text-main"
                      } py-[8px] px-[12px]`}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </MenuItem>

              <MenuItem>
                <div className="flex border-t  border-grayLight justify-between  w-full px-[20px] py-[10px] items-center gap-[50px]">
                  <label
                    htmlFor="adults "
                    className=" font-proppins text-[15px]"
                  >
                    {t("qoldiqlar.children")}
                  </label>
                  <div className="text-[18px] flex border  justify-between rounded-md gap-4 border-grayLight ">
                    <button
                      onClick={(event) => {
                        event.stopPropagation(); // Останавливаем распространение клика
                        decrementChild();
                      }}
                      className={`${
                        children == 0
                          ? "text-grayLight cursor-default hover:text-grayLight "
                          : " text-blue hover:text-main"
                      } py-[8px]   px-[12px]`}
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <div className="py-[8px] mx-[4px]">{children}</div>
                    <button
                      onClick={(event) => {
                        event.stopPropagation(); // Останавливаем распространение клика
                        incrementChild();
                      }}
                      className={`${
                        children == 10
                          ? "text-grayLight  cursor-default hover:text-grayLight "
                          : " text-blue hover:text-main"
                      } py-[8px]   px-[12px]`}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </MenuItem>
            </MenuItems>
          </div>
          <Link to={link}>
            <div className="relative   px-[20px] lg:px-[30px] py-[10px] ">
              <UniversalBtn bg={"bg-main"} txt={"main.buttons.find"} />
            </div>
          </Link>
        </div>
      </div>
    </Menu>
  );
}

export default HotelBookingCalendar2;
