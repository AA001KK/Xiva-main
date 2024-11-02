import "./styles.css";
import { useDispatch, useSelector } from "react-redux";
import { closeImgModal } from "../redux/slice/hotels_slice";

const ImgModal = () => {
  const isImgOpen = useSelector((state)=>state.hotels.isImgOpen);
  const imageData = useSelector((state)=>state.hotels.imageData);
  const dispatch = useDispatch();
  
  if (!isImgOpen) return null;

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("modalBackActive")) {
      dispatch(closeImgModal());
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
        <img
          src={imageData}
          className="object-cover max-w-full max-h-full wf rounded-xl"
          alt=""
        />
        <div
          onClick={()=> dispatch(closeImgModal())}
          className="rounded-[2px] absolute top-0 right-0 object-cover p-2 px-4 text-white cursor-pointer bg-main"
        >
          <i className="fa-solid fa-x"></i>
        </div>
      </div>
    </div>
  );
};

export default ImgModal;
