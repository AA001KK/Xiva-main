import React, { useState } from "react";
import { Link } from "react-router-dom";
import StarsHotel from "../../../../components/Hotel/StarsHotel";
import { lang } from "../../../../constants";
import MapComponent from "../../components/Map";
import HotelMap from "../../components/HotelMap";
import SaveBtn from "../../../../components/buttons/SaveBtn";
import showEditSwal from "../../../../components/buttons/EditSwal";
import ConfirmBtn from "../../../../components/buttons/ConfirmBtn";
const HotelAdmin = ({ hotel }) => {
  const [hover, setHover] = useState(false);
  const [status, setStatus] = useState(hotel.status);
  const handleAddClick = async () => {
    const { data } = await showEditSwal(
      `/hotels/hotel/confirm/${hotel._id}?status=${!status}`, null, null, null, true
    );
    
    setStatus(!status);
  };

  return (
    <div className=" relative shadow-md  rounded-[10px] p-[15px] flex flex-col">
      <Link to={`/admin/hotels/${hotel?._id}`}>
        <div className="relative z-1 group rounded-[16px] overflow-hidden">
          <img
            src={hotel.images[0]}
            className=" w-full  aspect-[4/3] object-cover object-center"
            alt=""
          />
          <div
            className={` ${
              hover ? " " : ""
            } absolute top-0  left-0 right-0 cursor-pointer  group-hover:opacity-1 group-hover:bg-[#2222225c] bottom-0  ease all duration-[.2s]`}
          ></div>
        </div>
      </Link>
      <div className="flex mt-[25px] flex-col flex-1 gap-[10px]">
        <Link to={`${hotel._id}`}>
          <h1 className="text-main text-[22px] leading-6 ">
            {hotel[lang]?.hotel_name}
          </h1>
        </Link>
        <div className="flex items-center gap-2">
          <StarsHotel numStars={hotel.stars} />
          <h1 className=" text-[15px]  text-grayLight font-mono font-normal"></h1>
        </div>
        <div className="flex justify-between gap-4 2xl:gap-0 2xl:flex-row">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-door-open text-main text-[20px]"></i>
            <h1 className=" text-[15px]  text-grayLight font-mono font-normal">
              Xonalar soni: {hotel.rooms.length}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <HotelMap locationHotel={hotel.location} />
          </div>
        </div>
        <div className="flex flex-row items-center justify-between mt-auto">
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-hand-holding-dollar text-main text-[20px]"></i>
            <Link>
              <h1 className=" hover:text-main text-[18px] text-grayLight font-mono font-normal">
                Narxi: {hotel.price}$
              </h1>
            </Link>
          </div>
          {status ? (
            <div className="flex  text-white gap-2">
              <ConfirmBtn text={"Tasdiqlandi"} />

              <button
                onClick={handleAddClick}
                className="md:p-[8px]  rounded-[6px] bg-[#F72B50]  p-[5px] px-[15px] md:px-[15px]"
              >
                <i className="fa-regular fa-trash-can"></i>
              </button>
            </div>
          ) : (
            <div onClick={handleAddClick} className="flex ">
              <SaveBtn text={"Tasdiqlash"} />{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelAdmin;
