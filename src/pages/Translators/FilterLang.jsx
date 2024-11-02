import { useTranslation } from "react-i18next";
const FilterLang = ({ id, langData, activeQuery, setActiveQuery }) => {
  const { t, i18n } = useTranslation();
  const active = activeQuery?.findIndex(item => item == id) > -1 

  return (
    <div
      onClick={() => setActiveQuery(id)}
      className={`flex   flex-col  min-h-full md:h-[230px] xl:h-full  flex-1 justify-center md:py-[15px] py-[5px] lg:px-[20px] lg:py-[20px] items-center shadow-shadowUlButton w-full cursor-pointer border-border hover:shadow-md transition-all ${
        active ? "border-main border border-dashed text-main" : ""
      } border lg:gap-2 text-center md:rounded-[10px]   rounded-[6px] md:pt-[10px]`}
    >
      <h1 className="  line-clamp-1  font-medium tracking-wider font-mono  text-[11px] md:text-[13px] lg:text-[15px]">
      {t(`${langData.title}`)}
      </h1>
      <div className="w-full h-full p-[10px] px-2 md:p-0 md:max-h-[215px] xl:h-full mt-[5px] md:mt-[10px]">
        <img
          src={langData.img}
          className="rounded-[6px]  h-full xl:max-h-[200px] md:max-h-[200px] lg:rounded-[10px] md:h-full  xl:min-h-[119px] peer-checked:border-main w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default FilterLang;
