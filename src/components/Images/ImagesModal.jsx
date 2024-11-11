import React, { useState } from "react";

const ImagesModal = ({ hotelData }) => {
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

  const allImages = [];

  // Добавляем изображения отеля
  allImages.push(...hotelData.images);

  // Добавляем изображения комнат
  hotelData.rooms.forEach((room) => {
    allImages.push(...room.images);
  });

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
        }   flex  h-screen  font-mono z-[10000]  items-center  flex-wrap  modal-images  backdrop-filter justify-center top-0 bg-backgroundModal   left-0  bottom-0 w-full`}
      >
        <div
          className={` ${
            modalIsOpen == true
              ? " opacity-1 translate-x-0 all duration-[.3s]"
              : " opacity-0 all duration-[.2s] translate-y-[200px]"
          } z-[1000] absolute bottom-0 h-[90%] w-[80%] sm:bottom-auto rounded-br-none rounded-bl-none rounded-[16px] overflow-y-scroll sm:rounded-bl-[22px] bg-white sm:rounded-[16px] md:rounded-[16px] gap-[25px]     sm:p-[15px] lg:p-[20px]`}
        >
          <div className="container grid py-[20px] grid-cols-4 gap-2 mx-auto bg-white">
            {allImages.map((item, idx) => (
              <img key={idx} src={item} className="object-cover w-full h-full" alt="" />
            ))}
          </div>
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

export default ImagesModal;
