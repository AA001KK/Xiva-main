import Title from "../../../components/typography/Title";
import Subtitle from "../../../components/typography/Subtitle";
import CenteredModal from "../../../components/Modals/BottomModal";
// import Photo from ""
const Video = () => {
  return (
    <div className=" video-section relative  h-[400px] xl:h-[700px] py-100px">
      <div className="flex flex-col items-center justify-center h-full px-2 font-mono">
        <Title
          classNameList={
            "text-white text-[24px] text-center xl:text-[40px] font-playfair "
          }
          txt={`sectionsData.videoSection.title`}
        />
        <Subtitle
          classNameList={
            "text-white max-w-[656px] text-[13px] sm:text-[14px] font-thin font-playfair xl:text-[16px]  xl:text-[17px] text-center"
          }
          txt={`sectionsData.videoSection.subtitle`}

        />
        {/* <div className="w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px] cursor-pointer relative play-icon z-[100] mt-[50px]  rounded-[50%] bg-white flex justify-center items-center border-[3px] border-[#EC6416]">
          <div className="playIcon"></div>
          <span className="ms-1 ">
            <img
              src={Video2}
              className="w-[15px] md:w-[17px] xl:w-[19px] 2xl:w-[20px]"
              alt=""
            />
          </span>
        </div> */}
        <CenteredModal/>
      </div>
    </div>
  );
};

export default Video;
