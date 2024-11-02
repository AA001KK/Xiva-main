import { useTranslation } from "react-i18next";
import Star from "/src/assets/hotels/star.svg";
const FiltersStars = ({ selectedStar, setSelectedStar }) => {
  const starsClicked = (star) => {
    setSelectedStar(star);
  };
  const { t } = useTranslation();

  return (
    <div className="w-full md:my-[50px] my-[20px]  filterStars   ">
      <h1 className=" lg:my-[10px] lg:text-[18px] text-[16px] my-2  text-main">{t("main.hotelFilters.stars")}</h1>
      
      <div className="md:p-[20px]  p-[10px] space-y-2 shadow-shadowUlButton rounded-[12px]">
        <label
          htmlFor="all"
          onClick={() => {
            setSelectedStar("");
          }}
          className="flex gap-[8px] lg:gap-[10px] items-center"
        >
          <input
            type="radio"
            className="border border-red bg-red"
            name="star"
            id="all"
            checked={!selectedStar}
          />
          <div
            className=" span rounded-[50%] flex justify-center items-center w-[16px] lg:w-[20px] 
              lg:h-[20px] h-[16px]  border  border-main"  
          >
            <div className=" rounded-[50%] !w-[10px] !h-[10px] bg-main"></div>
          </div>
          <div className="flex items-center lg:text-[20px] text-[18px] leading-3 gap-[3px] ">
            {t("main.hotelFilters.all")}
          </div>
        </label>
        {Array(5)
          .fill("a")
          .map((_, idx) => {
            const id = idx + 1;
            return (
              <label
                htmlFor={`star${id}`}
                onClick={() => {
                  setSelectedStar(id);
                }}
                className="flex gap-[8px] lg:gap-[10px] justify-center
               items-center"
              >
                <input
                  type="radio"
                  className="border border-red bg-red"
                  name="star"
                  id={`star${id}`}
                  checked={selectedStar == id}
                />
                <span
                  className="   span rounded-[50%] flex justify-center items-center w-[16px] lg:w-[20px] 
              lg:h-[20px] h-[16px] border  border-main"
                >
                  <div className=" flex-1  rounded-full lg:max-w-[10px] max-w-[8px] lg:min-h-[10px] min-h-[8px] bg-main"></div>
                </span>
                <span className="flex flex-1 items-center gap-[3px] ">
                  {Array(id)
                    .fill("b")
                    .map((s) => {
                      return <img className="lg:w-[25px] w-[20px]"  src={Star} alt="" />;
                    })}
                </span>
              </label>
            );
          })}
      </div>
    </div>
  );
};
export default FiltersStars;
