import React, { useState } from "react";
import MapComponent from "./Map";
import HotelMapComponent from "./HotelMapComponent";
// import { UserContext } from "./context/basketContext";
const HotelMap = ({ locationHotel }) => {
  console.log(locationHotel);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const closeBoxCard = () => {
    window.addEventListener("click", (e) => {
      if (e.target.classNameList.contains("modalBackMap")) {
        setModalIsOpen(false);
      }
    });
  };

  return (
    <div>
      <div
        onClick={openModal}
        className={`rounded-[6px] gap-2 text-grayLight text-[16px] items-center   font-normal flex
  transition-colors`}
      >
        <i className="fa-solid fa-location-dot text-main text-[20px]"></i>
        <div className="underline cursor-pointer">Xaritada ko'rish</div>
      </div>
      <div
        onClick={() => closeBoxCard()}
        className={`fixed ${
          modalIsOpen == true ? "active" : ""
        }   flex  modalBackMap font-mono flex-wrap  backdrop-filter justify-center top-0 bg-backgroundModal  z-[-2] left-0  bottom-0 w-full`}
      >
        <div
          className={` ${
            modalIsOpen == true
              ? " opacity-1 translate-x-0 all duration-[.3s]"
              : " opacity-0 all duration-[.2s] translate-y-[200px]"
          } z-[1000] absolute bottom-0 sm:bottom-auto  sm:w-[80%] lg:w-[90%] h-[80vh] max-h-[650px]  max-w-[1050px] rounded-br-none rounded-bl-none rounded-[16px] sm:rounded-bl-[22px] sm:rounded-[16px] md:rounded-[16px] gap-[25px]  sm:fixed  bg-[white]  sm:p-[15px] lg:p-[20px]`}
        >
          <h2 className="mb-4 text-xl font-bold">Mehmonhona manzili:</h2>

          <iframe
            src={`${locationHotel}`}
            className="w-full  rounded-[10px] h-[80%]  "
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            title="Map"
          ></iframe>
          <div className="flex py-[20px] gap-4 text-[17px] justify-end">
            <button
              onClick={closeModal}
              className={`rounded-[6px] font-normal text-white flex
    bg-[#6c757d] hover:bg-[#5a6268]
    transition-colors`}
            >
              <div className="p-[10px] px-[40px] border-r border-white">
                Orqaga
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelMap;
