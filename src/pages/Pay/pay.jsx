import React, { useState } from "react";
import Cart from "../../components/Cart/cart";
import OutlineBtn from "../../components/buttons/OutlineBtn";
import PhoneInputForm from "./PhoneInput";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { Link } from "react-router-dom";

const payMethods = [
  {
    id: 1,
    title: "Onlayn karta (UzCard, Humo, Visa, MasterCard)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="18"
        viewBox="0 0 24 18"
        fill="none"
      >
        <path
          d="M22.8327 6.83335H1.16602M10.916 11.1667H5.49935M1.16602 4.88335L1.16602 13.1167C1.16602 14.3301 1.16602 14.9369 1.40217 15.4003C1.60989 15.808 1.94135 16.1395 2.34904 16.3472C2.81251 16.5834 3.41924 16.5834 4.63268 16.5834L19.366 16.5834C20.5795 16.5834 21.1862 16.5834 21.6497 16.3472C22.0573 16.1395 22.3888 15.808 22.5965 15.4003C22.8327 14.9369 22.8327 14.3301 22.8327 13.1167V4.88335C22.8327 3.66991 22.8327 3.06318 22.5965 2.59971C22.3888 2.19202 22.0573 1.86057 21.6497 1.65284C21.1862 1.41669 20.5795 1.41669 19.366 1.41669L4.63268 1.41669C3.41924 1.41669 2.81251 1.41669 2.34904 1.65284C1.94135 1.86057 1.60989 2.19202 1.40217 2.59971C1.16602 3.06318 1.16602 3.66991 1.16602 4.88335Z"
          stroke="#3E3E3E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Qabul qilinganda (naqd pul)",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="25"
        viewBox="0 0 26 25"
        fill="none"
      >
        <path
          d="M21.666 9.89585V7.50002C21.666 6.33325 21.666 5.74986 21.4299 5.30421C21.2221 4.9122 20.8907 4.5935 20.483 4.39376C20.0195 4.16669 19.4128 4.16669 18.1993 4.16669H5.63268C4.41924 4.16669 3.81251 4.16669 3.34904 4.39376C2.94135 4.59349 2.60989 4.9122 2.40217 5.30421C2.16602 5.74986 2.16602 6.33324 2.16602 7.50002V17.5C2.16602 18.6668 2.16602 19.2502 2.40217 19.6958C2.60989 20.0878 2.94135 20.4065 3.34904 20.6063C3.81251 20.8334 4.41924 20.8334 5.63268 20.8334L18.1993 20.8334C19.4128 20.8334 20.0195 20.8334 20.483 20.6063C20.8907 20.4065 21.2221 20.0878 21.4299 19.6958C21.666 19.2502 21.666 18.6668 21.666 17.5V15.1042M16.2493 12.5C16.2493 12.016 16.2493 11.774 16.291 11.5727C16.4619 10.7463 17.1338 10.1003 17.9933 9.93589C18.2026 9.89585 18.4543 9.89585 18.9577 9.89585H21.1243C21.6277 9.89585 21.8794 9.89585 22.0887 9.93589C22.9482 10.1003 23.6201 10.7463 23.7911 11.5727C23.8327 11.774 23.8327 12.016 23.8327 12.5C23.8327 12.984 23.8327 13.226 23.7911 13.4273C23.6201 14.2537 22.9482 14.8998 22.0887 15.0642C21.8794 15.1042 21.6277 15.1042 21.1243 15.1042H18.9577C18.4543 15.1042 18.2026 15.1042 17.9933 15.0642C17.1338 14.8998 16.4619 14.2537 16.291 13.4273C16.2493 13.226 16.2493 12.984 16.2493 12.5Z"
          stroke="#3E3E3E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
];

const Pay = () => {
  const [payMethod, setPayMethod] = useState();

  return (
    <div className="container py-6 pb-12 mx-auto font-mono">
      <h1 className="mb-4 text-2xl font-semibold text-center text-main">
        To'lov qilish
      </h1>
      <div className="flex justify-center gap-x-8">
        <div className="bg-[#fff] rounded-xl py-8 px-12 shadow ">
          <div className="max-w-[600px] mx-auto space-y-4">
            <label className="flex flex-col gap-y-2">
              <span>F.I.O</span>
              <input className="py-[8px] px-[15px] text-[16px] border border-main font-proppins outline-none rounded-[6px]" />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>Telefon</span>
              <PhoneInputForm />
            </label>
            <label className="flex flex-col gap-y-2">
              <span>Shahar/Tuman</span>
              <input className="py-[8px] px-[15px] text-[16px] border border-main font-proppins outline-none rounded-[6px]" />
            </label>
            <h2 className="pt-4 text-2xl font-semibold">To’lov usuli</h2>
            {payMethods.map((item) => {
              const active = item.id === payMethod;
              return (
                <div
                  className={`flex items-center gap-3 bg-[#F2F2F7] p-4 px-8 border cursor-pointer rounded-xl my-4 ${
                    active
                      ? "border-opacity-100 border-main bg-white"
                      : "border-[#F2F2F7]"
                  }`}
                  onClick={() => setPayMethod(item.id)}
                >
                  {item.icon}
                  <p className="font-semibold">{item.title}</p>
                </div>
              );
            })}
            <div className="flex justify-between">
              <OutlineBtn text={"Orqaga"} />
              <Link to={"payment"}>
                <UniversalBtn text={"Tasdiqlash"} bg={"bg-main"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pay;
