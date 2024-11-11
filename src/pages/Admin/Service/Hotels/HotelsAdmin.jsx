import React from "react";
import PageDesign from "../../components/PageDesign";
import TitlePage from "../../components/TitlePage";
import HotelAdmin from "./HotelAdmin";
import useFetch from "../../../../hooks/useFetch";

const HotelsAdmin = () => {
  const { data, loading } = useFetch("hotels?limit=200");

  const hotels = data.items;
  return (
    !loading && (
      <PageDesign>
        <TitlePage  title={"Mehmonhonalar"} link={"add"} />
        <div className=" py-[20px] px-[20px] grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-[15px] lg:gap-[22px] ">
          {hotels?.map((item, idx) => (
            <HotelAdmin key={idx} hotel={item} />
          ))}
        </div>
      </PageDesign>
    )
  );
};

export default HotelsAdmin;

