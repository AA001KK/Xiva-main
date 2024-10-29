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

{
  /* <div className=" font-normal  mt-[20px]">
<div className="ps-[20px]">
  <TitleSection text={"Xonalarni qo'shish  "} />
</div>
<div className="grid mt-[10px]  px-[10px] grid-cols-4 gap-[35px] pb-[20px] gap-y-[20px]  rounded-[10px] ">
  <div className=" flex group cursor-pointer justify-center items-center flex-col  border-border border border-solid group rounded-[15px] p-[15px] h-full shadow-md hover:shadow-lg transition-shadow">
    <div className="w-[120px] group-hover:border-main h-[120px]  rounded-[50%] text-[70px] text-grayLight border border-grayLight border-dashed flex justify-center items-center  ">
      <img src={plus} alt="" />
    </div>
  </div>
  <AdminRoom />
</div>
<div className=" my-[50px]  flex justify-between px-[30px]">
  <div>
    <h1 className=" text-[18px]">Xona Nomi*</h1>

    {LANGUAGES.map((item, idx) => (
      <div key={idx} className="flex flex-col mt-[10px]  items-start">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            className="w-[40px] object-cover h-[25px] rounded-sm"
            alt=""
          />
          <input
            required
            type="text"
            onChange={(e) =>
              changeHandler(item.lang, `title`, e.target.value)
            }
            placeholder="Xona nomini kiriting "
            className=" w-[450px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
          />
        </div>
      </div>
    ))}
  </div>
  <div className="rounded-[14px] max-w-[400px] h-[300px] min-w-[400px]  overflow-hidden">
    <AddImages />
  </div>

  <div className="flex flex-col justify-between gap-4 ">
    <div className="flex flex-col gap-[20px]">
      <div className="flex justify-between gap-[20px]">
        <div className="flex flex-col items-start">
          <h1 className="text-[17px] ">Kunlik narxi*</h1>
          <label
            htmlFor="price"
            className="flex  w-[150px] pr-[20px] items-center text-[18px] gap-[20px] justify-between outline-none relative  border border-dashed border-grayLight rounded-[10px] "
          >
            <div className="flex items-center justify-between ">
              <input
                id="price"
                name="price"
                required
                onChange={changeHandlerSelf}
                type="number"
                className=" focus:border-main px-[20px]  outline-none  rounded-[10px] py-[6px] w-full"
              />
              <span className="  text-[20px] text-main ">$</span>
            </div>
          </label>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-[17px] ">Kengligi*</h1>
          <label
            htmlFor="price"
            className=" flex  w-[130px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
          >
            <div className=" pr-[10px] flex items-center justify-between">
              <input
                id="price"
                name="price"
                required
                onChange={changeHandlerSelf}
                type="number"
                className=" focus:border-main px-[20px] pr-0  outline-none  rounded-[10px] py-[6px] w-full"
              />
              <div className="flex items-center gap-2">
                <div>
                  <span>m</span>
                  <sup>2</sup>
                </div>
                <img src={square} alt="" />
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-[17px] ">Maksimal odam soni*</h1>
      <label
        htmlFor="price"
        className=" flex  w-[150px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
      >
        <div className=" pr-[10px] flex items-center justify-between">
          <input
            id="price"
            name="price"
            required
            onChange={changeHandlerSelf}
            type="number"
            className=" focus:border-main px-[20px] pr-0  outline-none  rounded-[10px] py-[6px] w-full"
          />
          <div className="flex items-center gap-2">
            <div>
              <span>m</span>
              <sup>2</sup>
            </div>
            <img src={square} alt="" />
          </div>
        </div>
      </label>
    </div>
    <div className="flex flex-col items-start">
      <h1 className="text-[16px] ">Bed*</h1>

      <select
        required
        name="bed"
        onChange={(e) => {
          changeHandlerInput("bed", beds[e.target.value]);
        }}
        className={`px-[20px] text-[18px] w-[270px]  border-grayLight  border border-dashed     focus:border-main  outline-none  rounded-[10px] py-[10px]`}
        id=""
      >
        {beds.map((item, idx) => {
          return (
            <option key={idx} value={idx} className=" py-2 h-[30px] ">
              {item.bedCount} ta "{item.bedType == 1 ? "Bir" : "Ikki"}
              " kishilik yotoq
            </option>
          );
        })}
      </select>
    </div>
    <TitlePage classNameList={"!border-b-0 !p-0 !items-end"} add />
  </div>
</div>
</div> */
}
