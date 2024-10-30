
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import check from "/src/assets/check.png";
import UniversalBtn from "../../components/buttons/UniversalBtn";
import { useNavigate } from "react-router-dom";
import TranslatorLangs from "../Translators/Languages";
import UserModal from "../../components/Modals/UserModal";
import ProductApproval from "../../components/buttons/StatusOrders/StatusBtn";
import { useSelector } from "react-redux";
import { getUser } from "../../components/redux/slice/user_slice";
import DateDisplay from "../../components/helpers/formatDateUz";

const Client = ({ order }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector(getUser);
  
  const navigate = useNavigate();
  const boxRef = useRef(null);

  const toggleDropdown = (e) => {
    setIsOpen(!isOpen);
    setTimeout(() => {
      boxRef.current.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 100);
  };

  const handleUpdateStatus = (productType, newStatus) => {
    console.log(`Статус продукта ${productType} обновлен на: ${newStatus}`);
  };

  const { t, i18n } = useTranslation();

  const goToMessage = () => {
    navigate("/admin/message", {
      state: { email: order?.user?.email, id: order?._id},
    });
  };
  console.log(order._id)

  return (
    <div
      ref={boxRef}
      className=" border-b  lg:pb-0 pb-[20px] border-dashed border-grayLight lg:px-[30px] px-[10px] relative inline-block w-full text-left"
    >
      <div className="items-center justify-between lg:flex">
        <div className="items-center gap-2 md:flex">
          <div className="flex items-center gap-2 ">
          <img
            className=" lg:w-[70px] lg:h-[70px] w-[40px] h-[40px]"
            src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small_2x/user-profile-icon-free-vector.jpg"
            alt=""
          />
          <div className="my-2 div md:my-0">
            <h1>
              {order.user?.first_name} {order.user?.last_name}
            </h1>
            <div className="p-1 py-0 md:text-[14px]  text-[12px]  text-white rounded-sm bg-green">
              <h1>{order.user?.email}</h1>
            </div>
          </div>
          </div>
          <div className="div">
            <h1  className="font-normal text-grayLight">
              Zakaz qilingan sana:
            </h1>
            <div className="rounded-sm ">
            <DateDisplay
             dateString={order.createdAt} />
            </div>
          </div>
        

        </div>
        <div className="flex flex-row flex-wrap gap-2 mt-2 lg:mt-0 lg:gap-4">
          <UserModal userInfo={order.user} />
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between rounded-md text-md font-semibold text-white bg-[#17a2b8] hover:bg-[#138496] transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <div className="flex items-center p-2.5  lg:px-6 lg:border-r border-white">
              Batafsil
            </div>
            <div className="flex items-center p-2.5  lg:px-4">
              <i
                className={` ${
                  isOpen ? " rotate-[-180deg]" : ""
                } transition-all fa-solid fa-angle-down`}
              ></i>
            </div>
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <div className="relative mb-[30px] text-[16px] right-0 flex flex-col w-full gap-4 mt-2 font-normal transition-all border shadow-md rounded-xl border-border ">
            {order.items?.map((item, idx) => {
              switch (item.type) {
                case "hotel":
                  return (
                    <div
                      key={idx}
                      className="items-center w-full gap-6 p-4 border shadow-md lg:flex border-border"
                    >
                      <img
                        src={item.item.images[1]}
                        alt=""
                        className="lg:rounded-[10px] rounded-[6px] bg-[#FFF1EA]   aspect-[3/2] w-full  lg:w-[200px] object-cover"
                      />
                      <div className="w-full mt-4 lg:mt-0">
                        <div className="flex items-center gap-4">
                          <h1 className=" font-medium text-[18px]">
                            {item.item?.[i18n.language]?.hotel_name}
                          </h1>
                        </div>

                        <div className="flex  lg:text-[16px] text-[13px] flex-col lg:items-end justify-between w-full gap-y-2 lg:flex-row">
                          <div className="flex flex-col gap-1 lg:gap-2">
                            <div className="flex items-center gap-3 mt-1 ">
                              <i class="fa-solid fa-calendar-days text-main  text-[23px] "></i>
                              <h1 className="font-mono text-grayLight">
                                Bron vaqti:{" "}
                                <span className=" md:ms-3">
                                  {item.date.start.slice(0, 10)} -{" "}
                                  {item.date.end.slice(0, 10)}
                                </span>
                              </h1>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 mt-1 ">
                                <i class="fa-solid fa-hotel   text-[20px] text-main"></i>
                                <h1 className="font-mono text-grayLight">
                                  {/* {t("roomBeds.bed" + roomData.bed.type + roomData.bed.count)} */}
                                  Xona nomi:{" "}
                                  <span className="font-mono font-medium text-black">
                                    {item.item[i18n.language]?.room_name}
                                  </span>
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <i className="fa-solid fa-door-open text-main text-[19px]"></i>
                              <h1 className=" text-[15px]  text-grayLight font-mono font-normal">
                                {/* Xonalar soni: {hotel.rooms.length} */}
                                Xonalar soni: 2
                              </h1>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-end gap-3 font-mono text-grayLight text-[16px] 2xl:text-[18px]">
                              <h1>{t("hotels.price")}:</h1>
                              <span>{item.item.price} $</span>
                            </div>
                            <div className="flex flex-wrap items-end gap-3 text-[15px] 2xl:text-[18px]">
                              <h1 className="flex gap-2 font-mono font-normal text-grayLight">
                                {t("hotels.totalPrice")}:
                              </h1>

                              <span className="font-medium md:text-lg text-main">
                                <span>{item.day_quantity}</span>{" "}
                                {t("hotels.day")}* {item.item?.price}$ ={" "}
                                {item.day_quantity * item.item?.price}$
                              </span>
                            </div>
                          </div>
                   
                          <ProductApproval
                            product={item}
                            orderId={order._id}
                            onUpdateStatus={handleUpdateStatus}
                          />
                        </div>
                      </div>
                    </div>
                  );
                  break;
                case "car":
                  return (
                    <div
                      key={idx}
                      className="items-center w-full gap-6 p-4 border shadow-md lg:flex border-border"
                    >
                      <img
                        src={item.item.images[0]}
                        alt=""
                        className="lg:rounded-[10px] rounded-[6px] bg-[#FFF1EA]   aspect-[3/2] w-full  lg:w-[200px] object-cover"
                      />
                      <div className="w-full mt-4 lg:mt-0">
                        <h1 className=" font-medium text-[18px] lg:text-[20px]">
                          {item.item[i18n.language]?.car_name}
                        </h1>
                        <div className="flex lg:mt-4 flex-col lg:flex-row gap-y-2 text-[16px] justify-between w-full  ">
                          <div className="flex flex-col gap-2 ">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3 mt-1 ">
                                <i class="fa-solid fa-calendar-days text-main  text-[23px] "></i>

                                <h1 className="font-mono text-grayLight">
                                  Sayohat vaqti: {item.date.start.slice(0, 10)}{" "}
                                  - {item.date.end.slice(0, 10)}
                                </h1>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <img src={check} className="w-5 " alt="" />
                              <h1 className="font-mono font-normal text-grayLight">
                                O'rindiqlar soni: {item.item?.car_doors}
                              </h1>
                            </div>
                          </div>
                          <div>
                            <div className="flex gap-3 font-mono text-grayLight text-[16px] 2xl:text-[18px]">
                              <h1>{t("hotels.price")}:</h1>
                              <span>{item.item.price} $</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 ">
                              <h1 className=" flex items-center leading-3  gap-2 text-[15px] 2xl:text-[18px] text-grayLight font-mono font-normal">
                                {t("hotels.totalPrice")}:
                              </h1>

                              <span className="font-medium md:text-lg text-main">
                                <span>{item.day_quantity}</span>{" "}
                                {t("hotels.day")}* {item?.item?.price}$ ={" "}
                                {item.day_quantity * item?.item?.price}$
                              </span>
                            </div>
                          </div>
                          <ProductApproval
                            product={item}
                            orderId={order._id}
                            onUpdateStatus={handleUpdateStatus}
                          />
                        </div>
                      </div>
                    </div>
                  );
                  break;
                case "translator":
                  return (
                    <div
                      key={idx}
                      className="items-center w-full gap-6 p-4 border shadow-md lg:flex border-border "
                    >
                      <img
                        src={item?.item?.image}
                        alt=""
                        className="lg:rounded-[10px] rounded-[6px] bg-[#FFF1EA]   aspect-[3/2] w-full  lg:w-[200px] object-cover"
                      />
                      <div className="w-full mt-4 lg:mt-0 ">
                        <h1 className=" font-medium text-[18px]">
                          {" "}
                          {item.item[i18n.language]?.translator_name}
                        </h1>
                        <div className=" flex  flex-col lg:flex-row gap-y-2 text-[16px] items-end justify-between w-full  ">
                          <div className="flex flex-col gap-2">
                            {" "}
                            <div className="flex justify-between ">
                              <div className="flex items-end gap-3 mt-1 ">
                                <i class="fa-solid fa-calendar-days text-main  text-[23px] "></i>

                                <h1 className="font-mono text-grayLight">
                                  Sayohat vaqti: {item.date.start.slice(0, 10)}{" "}
                                  - {item.date.end.slice(0, 10)}
                                </h1>
                              </div>
                            </div>
                            <div className="text-grayLight">
                              <div className="flex items-center gap-3 mb-2 lg:mb-0">
                                <i class="fa-solid fa-language  text-main text-[20px]"></i>
                                <h1 className="font-mono font-normal ">
                                  Biladigan Tillari:{" "}
                                </h1>
                              </div>
                              <TranslatorLangs
                                translatorsLanguages={item.item?.languages}
                              />
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <div className="flex items-end gap-3 font-mono text-grayLight text-[16px] 2xl:text-[18px]">
                              <h1>{t("hotels.price")}:</h1>
                              <span>{item.item.price} $</span>
                            </div>
                            <div className="flex flex-wrap items-end gap-3 text-[15px] 2xl:text-[18px]">
                              <h1 className="flex gap-2 font-mono font-normal text-grayLight">
                                {t("hotels.totalPrice")}:
                              </h1>

                              <span className="font-medium md:text-lg text-main">
                                <span>{item.day_quantity}</span>{" "}
                                {t("hotels.day")}* {item.item?.price}$ ={" "}
                                {item.day_quantity * item.item?.price}$
                              </span>
                            </div>
                          </div>
                          <ProductApproval
                            product={item}
                            orderId={order._id}
                            onUpdateStatus={handleUpdateStatus}
                          />
                        </div>
                      </div>
                    </div>
                  );
                  break;
                default:
                  break;
              }
            })}
            {user?.role !== "hotel_owner"?<div className="flex justify-end gap-4 px-5 mb-4">
              <div onClick={goToMessage}>
                <UniversalBtn text={"Tasdiqlash"} bg={"bg-green"} />
              </div>
            </div>:""}
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Client;
