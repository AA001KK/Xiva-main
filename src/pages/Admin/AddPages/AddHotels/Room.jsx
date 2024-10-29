import React from "react";
import bed from "/src/assets/hotels/bed.png";
import square from "/src/assets/hotels/square.png";
import showDeleteSwal from "../../../../components/buttons/DeleteSwal";
import { useTranslation } from "react-i18next";
import Logo from "/src/assets/header/user.svg";
import { useParams } from "react-router-dom";

const AdminRoom = ({ roomData, setRoomData, id, deletedRoom, setRoomId }) => {
  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();

  const handleDeleteClick = () => {
    showDeleteSwal(`hotels/hotel/${id}/room/${roomData._id}`, null, null, true);
  };

  const handleEditClick = () => {
    setRoomData(roomData);
  };

  return (
    <div className="  flex group  flex-col  border-border border border-solid  rounded-[15px] p-[15px] h-full shadow-md hover:shadow-lg transition-shadow">
      <div className="relative ">
        <div
          className={`rounded-[10px] absolute top-0 group-hover:bg-[#2222225c] opacity-1 left-0 right-0 bottom-0 ease-all duration-[.3s] flex justify-center items-center`}
        >
          <div
            className={` z-[1000]  gap-[10px] text-white absolute  text-[18px] flex justify-center items-center  ease-all duration-[.5s] opacity-0 translate-y-[20px] group-hover:translate-y-[0px] group-hover:opacity-100`}
          >
            <button
              onClick={handleDeleteClick}
              className="rounded-[6px] font-normal text-white bg-[#F72B50] flex "
            >
              <div className="p-[7px] px-[15px]">
                <i className="fa-solid fa-trash"></i>
              </div>
            </button>
            <button
              onClick={() => handleEditClick()}
              className="rounded-[6px] font-normal text-white bg-[#FFA755] flex "
            >
              <div className="p-[7px] px-[15px]">
                <i className="fa-solid fa-pencil"></i>
              </div>
            </button>
          </div>
        </div>
        <img
          src={roomData.images[0]}
          className="aspect-[4/3] w-full h-full object-cover  rounded-[10px]"
          alt=""
        />
      </div>

      <div className="flex flex-col pt-[20px] pb-[10px]">
        <h1 className=" text-[18px] ">{roomData[lang].room_name} </h1>
        <div className="flex mt-[15px] flex-wrap items-center justify-between">
          <div className="flex text-grayLight   items-center flex-wrap gap-[10px]">
            <img src={bed} alt="" />
            <h1 className="font-mono text-grayLight">
              {t("roomBeds.bed" + roomData.bed.type + roomData.bed.count)}
            </h1>
          </div>
          <div className="flex gap-[10px]  flex-wrap   text-grayLight ">
            <img src={square} className=" w-[18px] h-[18px]" alt="" />
            <span>
              {roomData.area} m<sup>2</sup>
            </span>
          </div>
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex items-center">
              <img src={Logo} alt="" />
              <h1 className="font-mono text-grayLight ps-[10px]">
                Maksimal odam soni: {roomData.max_people}
              </h1>
            </div>
            <h1 className=" font-mono text-[24px] text-main">
              {roomData.price} $
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRoom;
