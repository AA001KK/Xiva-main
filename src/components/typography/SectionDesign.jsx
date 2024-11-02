import Img from "/src/assets/about/des.png";
const SectionDesign = ({ text, classNameList }) => {
  return (
    <div
      className={` md:text-[18px] xl:text-[20px] font-playfair flex items-center  text-[#DCA500] ${classNameList}`}
    >
      <img src={Img} className="mx-2 w-[24px] object-cover" alt="" />
      <p>{text}</p>
      <img src={Img} className="mx-2 w-[24px] object-cover" alt="" />
    </div>
  );
};
export default SectionDesign;
