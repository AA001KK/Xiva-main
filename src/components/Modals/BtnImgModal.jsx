import { useDispatch } from "react-redux";
import { openImgModal } from "../redux/slice/hotels_slice";

const BtnImgModal = ({ img }) => {
  const dispatch = useDispatch();
  const ImgClicked = (img) => {
    dispatch(openImgModal(img));
  };
  return (
    <div
      className="
    absolute top-0 left-0 right-0 bottom-0   w-full h-full bg-[#2222225c] opacity-0 group-hover:opacity-100
    flex justify-center  items-center transition-opacity duration-300
  "
    >
      <div
        onClick={() => ImgClicked(img)}
        className="
      bg-[#2222225c] cursor-pointer hover:bg-main text-white absolute rounded-[10px] text-[20px]
      flex justify-center items-center transition-all h-[50px] w-[50px] border border-[#ffffff26] z-50
duration-500
      group-hover:translate-y-0 group-hover:opacity-100
      opacity-0 translate-y-5
    "
      >
        <i className="fa-solid fa-magnifying-glass-plus"></i>
      </div>
    </div>
  );
};

export default BtnImgModal;
