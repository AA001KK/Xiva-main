import React, { useState, useEffect, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarImg from "/src/assets/about/calendar/calendar.svg";
import User from "/src/assets/about/calendar/users.svg";
import Children from "/src/assets/about/calendar/children2.svg";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

import { Link } from "react-router-dom";
import UniversalBtn from "../buttons/UniversalBtn";
import { useDispatch, useSelector } from "react-redux";
import { changeItemDate, getBasket } from "../redux/slice/cart_slice";
import { date_formatter } from "../helpers/date_formatter";
import { findDaysBetween } from "../helpers/findDaysBetween";

function CalendarCart({ link, defaultValue, id }) {
  const [activeStart, setActiveStart] = useState(false);
  const [activeEnd, setActiveEnd] = useState(false);
  const [startDate, setStartDate] = useState(defaultValue?.start);
  const [endDate, setEndDate] = useState(defaultValue?.end);

  const dispatch = useDispatch();
  const cart = useSelector(getBasket);

  const handleStartDateChange = (date) => {
    if (endDate && date > endDate) {
      setEndDate(null);
      return;
    }
    const formattedDate = date_formatter(date);
    setStartDate(formattedDate);
    dispatch(
      changeItemDate({
        date: { start: formattedDate, end: endDate },
        _id: id,
      })
    );
  };
  
  const handleEndDateChange = (date) => {
    const formattedDate = date_formatter(date);
    setEndDate(formattedDate);
    dispatch(
      changeItemDate({
        date: { start: startDate, end: formattedDate },
        _id: id,
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

  // const [room, setChildren] = useState(0)
  let room = 1;
  return (
    <Menu>
      <div className="mx-auto border-border border-solid border pt-4 md:py-4 font-mono rounded-[6px] w-auto   shadow-sm   container">
        <div className="relative flex flex-col justify-between md:flex-row lg:items-center ">
          <div className=" bg-white pb-[10px]  lg:py-[0] border-b md:border-b-0  md:border-r   border-grayLight px-[20px] lg:px-[30px]  ">
            <label
              onClick={openedStart}
              htmlFor={`start${id}`}
              className={`  z-[101] ${
                activeStart
                  ? " translate-y-[-15px] lg:translate-y-[-25px] text-[14px] left-[10px] "
                  : ""
              } transition-all z-10 top-[5px]`}
            >
              Kelish Vaqti:
            </label>
            <div
              className={`flex  relative   justify-between lg:justify-start  items-center `}
            >
              <DatePicker
                className="block w-full h-full pt-2 outline-none"
                onCalendarOpen={() => openedStart()}
                onCalendarClose={() => closedStart()}
                id={`start${id}`}
                selected={startDate}
                onChange={handleStartDateChange}
                minDate={new Date()}
                dateFormat="MM/dd/yyyy"
                placeholderText="Sanani tanlang"
              />
              <label className="cursor-pointer " htmlFor={`start${id}`}>
                <img src={CalendarImg} alt="" />
              </label>
            </div>
          </div>
          <div className=" bg-white py-4  lg:py-[0] border-b md:border-b-0  md:border-r   border-grayLight px-[20px] lg:px-[30px]  ">
            <label
              onClick={() => {
                openedEnd();
              }}
              htmlFor={`end${id}`}
              className={` translate-y-[5px] z-[101] ${
                activeEnd
                  ? " translate-y-[-0px] lg:translate-y-[-25px] text-[14px]  translate-x-[-0px] lg:translate-x-[-14px] left-0   "
                  : ""
              } transition-all lg:top-[5px] ${
                activeStart ? " z-0 lg:!z-[101]" : " opacity-1"
              } `}
            >
              Ketish Vaqti:
            </label>
            <div
              className={`flex  relative  justify-between lg:justify-start  items-center`}
            >
              <DatePicker
                className="block w-full h-full py-2 pb-0 outline-none !static"
                id={`end${id}`}
                onCalendarOpen={() => openedEnd()}
                onCalendarClose={() => closedEnd()}
                selected={endDate}
                onChange={handleEndDateChange}
                minDate={startDate ? startDate : new Date()}
                dateFormat="MM/dd/yyyy"
                placeholderText="Sanani tanlang"
              />
              <label className="cursor-pointer " htmlFor={`end${id}`}>
                <img src={CalendarImg} alt="" />
              </label>
            </div>
          </div>
          <div className="w-full bg-white md:w-auto md:border-b-0 border-grayLight">
            <MenuButton>
              <div
                onClick={() => {
                  // setActiveAdults(!activeAdults);
                }}
                className={`${
                  activeAdults ? "border-border" : " border-white"
                } flex md:py-[25px] py-[35px]  bg-white w-full items-center  rounded-[4px] px-[0px] lg:px-[30px] max-h-[32px]  gap-4  lg:hover:border-border lg:hover:border-b lg:hover:shadow-sm transition-all  ml-[20px] lg:mx-0  lg:border-b `}
              >
                <div className="flex gap-4 ">
                  <img src={User} alt="" />
                  <div className="flex font-mono text-[15px]  items-center gap-2 ">
                    <p className="flex gap-[2px]   items-center">
                      <span>{adults} </span> Adults{" "}
                    </p>
                  </div>
                </div>
                <div className="flex ms-4 md:ms-0">
                  <img
                    src={Children}
                    className=" w-[48px] object-contain font-thin   "
                    alt=""
                  />

                  <p className="flex items-center font-mono text-[15px] gap-[4px]   ">
                    <span>{children} </span> Children{" "}
                  </p>
                </div>
              </div>
            </MenuButton>
            <MenuItems
              anchor="bottom start"
              transition
              className="bg-white z-10 transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:-translate-y-2 data-[closed]:opacity-0 mt-1.5 shadow-md text-[16px] bg-blue-700 hover:bg-blue-800  cursor-pointer font-mono rounded-lg !overflow-hidden dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 divide-y divide-black/10"
            >
              <MenuItem key={"123"}>
                <div className="flex adults-children items-center justify-between px-[20px] py-[8px] gap-[50px]">
                  <label htmlFor="adults" className="font-proppins text-[15px]">
                    Adults
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
                    Children
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
        </div>
      </div>
    </Menu>
  );
}

export default CalendarCart;
