import React from "react";
import PageDesign from "../../components/PageDesign";
import TitlePage from "../../components/TitlePage";
import Car from "./Car";
import useFetch from "../../../../hooks/useFetch";

const CarsAdmin = () => {
  const { data, loading } = useFetch("cars");
  const cars = data.items;

  return (
    !loading && (
      <PageDesign>
        <TitlePage add title={"Moshinalar"} link={"add"} />
        <div className=" grid grid-cols-1 lg:grid-cols-4 gap-[15px] lg:gap-[22px]  p-[20px]">
          {cars?.map((item) => (
            <Car carData={item} key={item._id} />
          ))}
        </div>
      </PageDesign>
    )
  );
};

export default CarsAdmin;
