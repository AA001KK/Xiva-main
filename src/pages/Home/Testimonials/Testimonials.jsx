import SectionDesign from "../../../components/typography/SectionDesign";
import Title from "../../../components/typography/Title";
import Subtitle from "../../../components/typography/Subtitle";
  import Swiper from "./Swiper";
const Testimonials = () => {

  return (
    <div className="testimonials backdrop-brightness-100">
      <div className="testimonials__inner">
        <div className="  md:py-[50px] py-[30px]  container mx-auto flex  flex-col items-center">
          <SectionDesign text={"Testimonials"} />
          <Title
            classNameList={
              "text-white text-[25px] md:text-[30px] xl:text-[40px] text-center  font-playfair"
            }
            txt={`sectionsData.testimonialsSection.title`}
          />
          <Subtitle
            classNameList={
              "max-w-[780px]  font-thin text-[15px] md:text-[17px] xl:text-[19px]  mt-[10px]  text-white  text-center"
            }
            txt={`sectionsData.testimonialsSection.subtitle`}
          />
          <Swiper />
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
