import "./styles.css";
import { closeImgModal } from "../redux/slice/hotels_slice";
const VideoModal = () => {
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalBackActive")) {
      dispatch(cloVideo());
    }
  });

  return (
    <div
      className={`fixed ${
        isImgOpen ? "modalBackActive" : "modalBackNone"
      } flex justify-center    items-center  w-full`}
    >
      <div
        className={`${
          isImgOpen ? "modalProductActive" : "modalProductNone"
        } relative flex flex-col border-4  border-main border-solid top-[50px] mx-[10px]  overflow-hidden  flex-wrap lg:h-[80%] h-[60%] justify-center transition-all w-full  sm:w-[60%] md:w-[80%] lg:w-[90%] max-w-[1000px]  rounded-[12px] gap-[25px] bg-[#FFF1EA] shadow-md contact-form items-center md:flex-row`}
      >
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/z7iskTipAZ4?si=kooWJVfl80Ox9wHX"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div
          onClick={() => dispatch(closeImgModal())}
          className="rounded-[2px] absolute top-0 right-0 object-cover p-2 px-4 text-white cursor-pointer bg-main"
        >
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;
