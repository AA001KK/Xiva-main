import { useTranslation } from "react-i18next";

const TeamCard = ({ data }) => {
  const { t } = useTranslation();
  return (
    <div className=" w-[300px]  h-[350px]  md:h-auto aspect-[3/4] flex flex-col justify-center items-center md:w-[300px] lg:w-[350px] xl:w-[380px] 2xl:w-[410px] text-gray">
      <div className="relative w-full h-full overflow-hidden group">
        <img
          src={data.img}
          className="object-cover w-full h-full cursor-pointer "
          alt="Not found"
        />
        <div className="absolute z-[100] text-white gap-[15px] xl:gap-[20px] text-[22px] md:text-[22px] lg:text-[24px] xl:text-[25px] links__team translate-y-[100%]  transition-all group-hover:translate-y-0 bottom-0 w-full  flex justify-center b-[#2222222c] py-[15px]">
          <a href={data.facebook}>
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href={data.whatsapp}>
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href={data.email}>
            <i className="fa-regular fa-envelope"></i>
          </a>
        </div>
      </div>
      <h3 className=" mt-[10px] font-poppins text-[17px] md:text-[18px] xl:text-[20px]">
        {t(`sectionsData.teamSection.userName${data.id}`)}
      </h3>
      <p className=" text-[15px] md:text-[16px] xl:text-[18px] ">
        {t(`sectionsData.teamSection.lavozimi${data.id}`)}
      </p>
    </div>
  );
};
export default TeamCard;
