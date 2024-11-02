import React, { useEffect, useState } from "react";
import { filterCars } from "../../constants";
import useFetch from "../../hooks/useFetch";
import Car from "./Car";
import FilterCheckbox from "../../components/Header/FilterCheckbox";
import Pagination from "../../components/Pagination";
import { Link, useSearchParams } from "react-router-dom";
import HotelBookingCalendar2 from "../../components/Hotel/Hotel";
import UniversalBtn from "../../components/buttons/UniversalBtn";

const Cars = () => {
  const [searchParams, setParams] = useSearchParams();
  const { data, loading, refresh } = useFetch(
    `cars?${searchParams.toString()}`
  );
  const { items: cars } = data;

  const [query, setQuery] = useState(
    searchParams.get("level")?.split("-") || []
  );

  const changeQuerys = (id) => {
    const result =
      query.findIndex((item) => item == id) > -1
        ? query.filter((i) => i != id)
        : [...query, id];
    setQuery(result);
    searchParams.set("level", result.join("-"));
    searchParams.set("page", 1);
    setParams(searchParams);
    refresh(`cars?${searchParams.toString()}`);
  };

  return (
    !loading && (
      <div className=" container px-[10px] lg:px-0  mb-[0px]  mx-auto">
        {/* <div className="mt-[20px]">
          <HotelBookingCalendar2 link={"/translators"} />
        </div> */}
        <FilterCheckbox
          setQuery={changeQuerys}
          query={query}
          filterItems={filterCars}
          classNameList={" lg:!gap-[50px] xl:!gap-[60px]"}
        />
        {!loading &&
          cars?.map((car, idx) => {
            return <Car key={idx} car={car} />;
          })}
        <Pagination data={data} refresh={(query) => refresh(`cars?${query}`)} />
        <div className="flex justify-end">
          <Link to={"/translators"}>
            <UniversalBtn bg={"bg-main"} txt={"main.buttons.next"} />
          </Link>
        </div>
      </div>
    )
  );
};

export default Cars;
