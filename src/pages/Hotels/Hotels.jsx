import React, { useEffect, useState } from "react";
import HotelCard from "./HotelCard";
import FiltersStars from "./FiltersStars";
import RangeFilter from "./RangeFilter";
import "react-range-slider-input/dist/style.css";
import { RotatingLines } from "react-loader-spinner";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import Pagination from "../../components/Pagination";
import { useSearchParams } from "react-router-dom";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import HotelBookingCalendar2 from "../../components/Hotel/Hotel";
import { useTranslation } from "react-i18next";
import DropdownButton from "./Div";
import { Disclosure } from "@headlessui/react";

const Hotels = () => {
  const [searchParams, setParams] = useSearchParams();
  const defaultApi = "hotels?status=true";
  const { t } = useTranslation();

  const { data, loading, refresh } = useFetch(
    `${defaultApi}${searchParams.toString()}`
  );
  const { items: hotels, length } = data;
  const [filteredPrice, setFilteredPrice] = useState(
    searchParams.get("price") || 700
  );
  const [selectedStar, setSelectedStar] = useState(searchParams.get("stars"));

  const filtering = async () => {
    if (selectedStar) searchParams.set("stars", selectedStar);
    else searchParams.delete("stars");

    if (filteredPrice) searchParams.set("price", filteredPrice);
    else searchParams.delete("price");

    searchParams.set("page", 1);
    setParams(searchParams);
    await refresh(`${defaultApi}${searchParams.toString()}`);
  };

  return (
    !loading && (
      <div className="container px-[10px]  lg:mt-[20px]  mx-auto">
        {/* <HotelBookingCalendar2 link={"/cars"} /> */}
        <div className=" gap-[3%]  mt-[10px]  2xl:justify-between lg:mt-[20px]  lg:flex ">
          <div className="lg:w-min">
            <h1 className="  lg:block  hidden text-[20px]">
              {t("hotels.result")}
              <span className="font-bold text-main ms-2">{length || 0}</span>
            </h1>
            <div className="w-full ">
              {/* Установим defaultOpen={false} чтобы на мобильных устройствах фильтры были закрыты */}
              <Disclosure defaultOpen={false}>
                {({ open }) => (
                  <>
                    <div className="flex flex-wrap items-center justify-between gap-2 mt-2">
                      <h1 className={`text-[20px] lg:hidden `}>
                        {t("hotels.result")}
                        <span className="font-bold text-main ms-2">
                          {length || 0}
                        </span>
                      </h1>
                      {/* Кнопка видна только на мобильных устройствах */}
                      <Disclosure.Button className="flex items-center   gap-2  font-mono text-white bg-main  justify-between py-2 text-sm  bg-blue-500 rounded-md lg:px-4 px-[18px] hover:bg-blue-600 lg:hidden">
                        <span className="lg:text-[18px] text-[14px] ">
                          {open ? "Скрыть фильтры" : "Показать фильтры"}
                        </span>
                        <span
                          className={
                            open
                              ? "transform transition-all rotate-[-180deg]"
                              : "transition-all"
                          }
                        >
                          <i className="fa-solid fa-angle-down"></i>
                        </span>
                      </Disclosure.Button>
                    </div>

                    {/* На мобильных устройствах контент скрыт и доступен только при клике */}
                    {open && (
                      <div
                        className={` transition-all lg:hidden  ${
                          open ? "h-auto opacity-1" : " opacity-0 h-0"
                        }`}
                      >
                        <div className="p-2 bg-gray-100 rounded-md lg:p-4">
                          {/* Компоненты фильтров для мобильных устройств */}
                          <RangeFilter
                            price={filteredPrice}
                            setPrice={setFilteredPrice}
                          />
                          <FiltersStars
                            selectedStar={selectedStar}
                            setSelectedStar={setSelectedStar}
                          />

                          <DefaultBtn
                            txt={"main.buttons.filter"}
                            click={filtering}
                          />
                        </div>
                      </div>
                    )}
                  </>
                )}
              </Disclosure>
            </div>
            <div className="hidden lg:block">
              <RangeFilter price={filteredPrice} setPrice={setFilteredPrice} />
              <FiltersStars
                selectedStar={selectedStar}
                setSelectedStar={setSelectedStar}
              />

              <DefaultBtn txt={"main.buttons.filter"} click={filtering} />
            </div>
          </div>

          <div className="flex-1 ">
            <div className=" grid my-4  lg:my-0 2xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[22px] ">
              {loading ? (
                <div className="flex items-center justify-center col-span-3">
                  <RotatingLines
                    visible={true}
                    height="36"
                    width="36"
                    color="red"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                    wrapperStyle={{}}
                    wrapperclassName=""
                  />
                </div>
              ) : (
                hotels?.map((item, idx) => {
                  return <HotelCard key={idx} hotel={item} />;
                })
              )}
            </div>
            <Pagination
              data={data}
              refresh={(query) => refresh(`${defaultApi}${query}`)}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Hotels;
