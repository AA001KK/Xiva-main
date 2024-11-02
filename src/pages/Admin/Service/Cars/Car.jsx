import React from "react";
import car from "/src/assets/car.png";
import check from "/src/assets/check.png";
import conditsioner from "/src/assets/conditsioner.png";
import { Link } from "react-router-dom";

const Car = ({ carData }) => {
  const lang = localStorage.getItem("i18nextLng");
  let category = "";
  if (carData.level == 1) {
    category = "Moshina";
  } else if (carData.level == 2) {
    category = "Micro Avtobus";
  } else {
    category = "Avtobus";
  }
  return (
    <Link to={carData._id}>
      <div className="  border border-border  shadow-lg  overflow-hidden rounded-[12px] p-[20px]">
        <div className="">
          <img
            className="rounded-[12px] w-full  object-cover  aspect-[4/3]"
            src={carData.images[0]}
            alt=""
          />
          <p className="mt-[10px] text-grayLight">{category}</p>
          <h1 className=" font-mono text-[18px] text-blue  font-medium">
            {carData[lang].car_name}
          </h1>
          <div className="">
            <div className="flex  flex-col text-[13px]  md:text-[15px]   lg:gap-3 gap-1 font-mono  text-blue mt-2 ">
              {/* <div className="flex items-center">
                <img
                  src={conditsioner}
                  className=" w-[15px] md:w-[20px]  object-cover"
                  alt=""
                />
                <h1 className="ml-2">Air Conditioning</h1>
              </div> */}
              <div className="flex items-center">
                <img
                  src={check}
                  className=" w-[15px] md:w-[20px]  object-content"
                  alt=""
                />
                <h1 className="ml-2">Eshiklar soni {carData.car_doors}</h1>
              </div>
              <div className="flex items-center">
                <img
                  src={check}
                  className=" w-[15px] md:w-[20px]  object-content"
                  alt=""
                />
                <h1 className="ml-2">O'rindiqlar soni {carData.car_seats}</h1>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <i className="fa-solid fa-hand-holding-dollar text-main text-[20px]"></i>
            <Link>
              <h1 className=" hover:text-main text-[18px] text-grayLight font-mono font-normal">
                Narxi: {carData.price}$
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Car;
