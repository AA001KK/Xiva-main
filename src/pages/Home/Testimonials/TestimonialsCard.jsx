import { useTranslation } from "react-i18next";


const TestimonialsCard = ({ data }) => {
  const {t} = useTranslation()
  return (
    <div className="p-[20px] xl:p-[30px] pt-0 h-full    flex flex-col items-center  w-full bg-white">
      <div className="flex justify-between w-full">
        <span className="text-[80px] md:text-[85px] lg:text-[80px]  leading-[50px] xl:leading-[70px] 2xl:leading-[70px] pt-[20px]  2xl:text-[100px] font-playfair text-[#55555540]">
          “
        </span>
        <span className="text-[45px] md:text-[40px] lg:text-[50px] xl:text-[60px]  2xl:text-[90px] font-bold leading-[50px] xl:leading-[50px] font-playfair text-[#55555540]">
          0{data}
        </span>
      </div>
      <p className="text-center text-gray text-[14px] md:text-[16px] xl:text-[17px] max-w-[350px] xl:max-w-[360px]">
        {t(`sectionsData.testimonialsSection.test${data}.review`)}
      </p>
      <div className="flex mt-[10px]  xl:mt-[15px] 2xl:mt-[20px] w-full justify-between items-center">
        <div>
          <h1 className="text-[16px] xl:text-[18px] font-proppins  font-semibold">
          {t(`sectionsData.testimonialsSection.test${data}.fullName`)}

          </h1>
          <p className="text-grayLight text-[15px] xl:text-[17px]">
          {t(`sectionsData.testimonialsSection.test${data}.country`)}

          </p>
        </div>

        <div className="flex text-yellow text-[14px] md:text-[16px] xl:text-[18px] gap-1">
          {" "}
          {[1,2,3,4,5].map((item, idx) => (
            <i key={idx} className="fa-solid fa-star"></i>
          ))}
        </div>
      </div>
      <div className="absolute z-10  w-[80px] h-[80px] xl:w-[120px] xl:h-[120px] top-[-40px] xl:top-[-60px] object-cover   overflow-hidden    rounded-[50%] ">
        <img src={`../home/team1.jpg`} className="object-cover w-full h-full" alt="aaa" />
      </div>
    </div>
  );
};

export default TestimonialsCard;
