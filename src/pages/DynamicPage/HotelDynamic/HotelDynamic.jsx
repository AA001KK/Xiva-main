import React from "react";
import { Link, useParams } from "react-router-dom";
import Camera from "/src/assets/hotels/camera.svg";
import Order from "/src/assets/hotels/order.svg";
import StarsHotel from "../../../components/Hotel/StarsHotel";
import useFetch from "../../../hooks/useFetch";
import RangeBar from "./RangeBar";
import { useTranslation } from "react-i18next";
import RoomDynamic from "./RoomDynamic";
import ImagesModal from "../../../components/Images/ImagesModal";
import HotelTable from "./HotelTable";
import { useSelector } from "react-redux";
import { getBasket } from "../../../components/redux/slice/cart_slice";
import area from "/src/assets/hotels/area.svg";
import BtnImgModal from "../../../components/Modals/BtnImgModal";
import MuchDescription from "../../../components/typography/MuchDescription";
import SwiperCar from "../../Cars/SwiperCar";
import UniversalBtn from "../../../components/buttons/UniversalBtn";
import DateRangeComponent from "../../../components/helpers/DateRangeComponent";

const HotelDynamic = () => {
  const lang = localStorage.getItem("i18nextLng");
  const { id } = useParams();
  const { data: hotel, loading } = useFetch(`hotels/hotel/${id}`);
  const cart = useSelector(getBasket);
  let rooms_basket = cart?.items?.filter((item) => item.type == "hotel");

  const { t, i18n } = useTranslation();
  console.log(cart);

  return (
    !loading && (
      <div className="container px-[10px] md:mt-[30px] mx-auto">
        <div className=" hidden rounded-[12px] overflow-hidden hotels__images  gap-[15px]">
          {hotel.images?.map((item, idx) => (
            <div
              key={idx}
              className={`${
                idx == 0 ? "  xl:col-span-2 xl:row-span-2 " : " "
              } h-full  w-full relative group`}
            >
              <img
                src={item}
                className="object-cover bg-[#FFF1EA] w-full h-full "
                alt="ss"
              />
              <BtnImgModal img={item} />
              <Link
                className={`${
                  idx == 0 ? "absolute flex items-center gap-[4px]" : " hidden"
                } bg-white py-1 font-mono bottom-[30px] right-[30px] rounded-[15px]  text-blue`}
              >
                <span className=" flex gap-2 px-[15px]">
                  <img src={Camera} alt="" />
                  <p>{t("main.buttons.allPhotos")} </p>
                </span>
              </Link>
            </div>
          ))}
        </div>

        <div className="xl:flex  gap-[20px]">
          <div className=" w-full xl:w-[70%] ">
            <div className="rounded-[5px] md:rounded-[10px]  md:my-[20px] my-[10px] border border-dashed md:px-[20px] px-[10px] md:py-[25px] py-[7px] border-grayLight ">
              <div className="flex items-center justify-between">
                <h1 className="md:text-[24px] text-[18px] text-main font-mono ">
                  {hotel[lang].hotel_name}
                </h1>
                <div className="flex text-yellow text-[14px] md:text-[16px] xl:text-[18px] gap-1">
                  <StarsHotel numStars={hotel.stars} />
                </div>
              </div>
            </div>
            <div className="md:hidden rounded-[5px]  md:rounded-[10px] xl:max-w-[400px] my-4 xl:min-w-[400px] 2xl:max-w-[500px] 2xl:min-w-[400px] h-[280px] md:h-[350px]   overflow-hidden">
              <SwiperCar images={hotel.images} />
            </div>
            <div className="rounded-[5px] md:rounded-[10px] mb-[20px]  text-gray border border-dashed md:px-[20px] px-[10px] md:py-[25px] py-[7px] border-grayLight ">
              <MuchDescription
                classList={" !mt-0 xl:text-[18px]"}
                description={hotel[lang].description}
              />
            </div>
            <div className="hidden md:block">
              <HotelTable />
            </div>
          </div>
          <div className="xl:w-[30%]">
            <div className="rounded-[5px] md:rounded-[10px]  my-[20px] border border-dashed md:p-[15px] p-[8px]  border-grayLight ">
              {/* <MapModal2/> */}
              <iframe
                src={`${hotel.location}`}
                className="w-full  rounded-[5px] md:rounded-[10px] h-[350px]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                title="Map"
              ></iframe>
            </div>
            <div className="rounded-[5px] md:rounded-[10px] flex flex-col  my-[20px] border border-dashed p-[8px] md:p-[15px] border-grayLight ">
              {hotel.rates.map((item, idx) => {
                return (
                  <div key={idx} className="w-full font-mono text-[12px] md:text-[14px] font-medium text-black">
                    <h1>{t("hotels.rates.rate" + idx)}</h1>
                    <div className="flex items-center w-full gap-3 item">
                      <RangeBar rate={item.rate * 10} />
                      <p className="font-semibold  text-[12px] md:text-[14px]">
                        {item.rate}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="md:flex flex-row md:mt-[30px]  justify-between items-center">
          <h1 className="text-[16px] md:text-[22px] font-semibold">
            {t("hotels.select")}
          </h1>
          <div className="flex items-center gap-3">
            <img src={Order} className=" w-[25px] h-[25px] text-main" alt="" />
            <p className="text-[14px] md:text-[20px] text-main">
              {t("hotels.selectSuccess")}
            </p>
          </div>
        </div>
        <div className="md:flex relative   max-h-full items-stretch gap-[10px] md:gap-[20px]">
          <div className="flex flex-col xl:w-[70%] md:w-[60%]  h-full">
            {hotel?.rooms?.map((item, idx) => (
              <RoomDynamic roomData={item} hotel={hotel} key={idx} />
            ))}
          </div>
          <div className="flex-1 min-h-full">
            <div className="font-mono w-full z-10 sticky top-[10px] bg-white">
              <div className="rounded-[5px] md:text-[18px] text-[16px] md:rounded-[10px] font-normal my-[20px] border border-dashed border-grayLight">
                <div className=" text-main py-[10px] border-b border-dashed md:px-[20px] px-[10px] border-grayLight">
                  {t("hotels.yourBooking")}
                </div>
                <div className=" py-[10px] border-b border-dashed md:px-[20px] px-[10px] border-grayLight">
                  {rooms_basket[0]?.days_quantity} {t("hotels.day")}
                </div>
                <div className=" py-[10px] border-b border-dashed md:px-[20px] px-[10px] border-grayLight">
                  {rooms_basket[0]?.date?.start ? (
                    <DateRangeComponent
                      startDate={rooms_basket[0]?.date?.start}
                      endDate={rooms_basket[0]?.date?.end}
                      language={lang}
                    /> 
                  ):""}
                </div>
                <div className="md:text-[17px] text-[14px] py-[10px] border-b border-dashed md:px-[20px] px-[10px] border-grayLight">
                  <h1>{t("hotels.selectedRooms")}</h1>
                  {rooms_basket?.map((item, idx) => (
                    <div key={idx} className="my-1 ">
                      <div className="flex items-center justify-between font-medium ">
                        <h1 className="mt-1 text-main">
                          {item.item[lang]?.room_name}
                        </h1>
                      </div>
                      <div>
                        <div className="flex justify-between">
                          <div className="flex flex-col gap-1 md:gap-2">
                            <div className="flex items-center gap-3 font-normal text-main">
                              <i className="fa-solid fa-door-open text-main text-[20px] ms-[3px]"></i>
                              <div className="flex md:text-[15px] text-[12px] items-center md:gap-2 gap-1 font-mono text-grayLight">
                                <span></span> <span>{item.quantity}</span>
                              </div>
                            </div>
                            <div className="flex md:text-[15px] text-[12px] items-center gap-3 text-main ">
                              <img src={area} className="w-[25px]" alt="" />
                              <h1 className="font-mono text-grayLight">
                                <span>
                                  {item.item.area} {t("hotels.area")}
                                  <sup>2</sup>
                                </span>
                              </h1>
                            </div>
                          </div>
                          <div>
                            <div className="flex   justify-end items-center md:text-[15px] text-[12px] gap-1 font-mono text-grayLight">
                              <span>{t("hotels.price")}</span>{" "}
                              <span>{item.item.price} $</span>
                            </div>
                            <div className="flex items-center gap-2 font-mono text-grayLight">
                              <span>{t("hotels.totalPrice")}:</span>{" "}
                              <span>{item.quantity * item.item.price} $</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between font-mono md:text-[17px] text-[14px] py-[10px] border-dashed md:px-[20px] px-[10px] border-grayLight">
                  <h1>{t("hotels.totalPrice")}:</h1>
                  <span className="text-main lg:text-[20px]  md:text-[17px] text-[14px] font-medium">
                    {cart.total_price}$
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Link to={"/car"}>
            <UniversalBtn bg={"bg-main"} txt={"main.buttons.next"} />
          </Link>
        </div>
        <div className=" md:hidden">
          <HotelTable />
        </div>
      </div>
    )
  );
};

export default HotelDynamic;
