import React, { useState } from "react";
import Video2 from "/src/assets/about/play.svg";

const CenteredModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Функция для переключения состояния модального окна
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ">
      {/* Кнопка для открытия модального окна */}
      <div
        onClick={toggleModal}
        className="w-[60px] h-[60px] 2xl:w-[80px] 2xl:h-[80px] cursor-pointer relative play-icon z-[100] mt-[50px]  rounded-[50%] bg-white flex justify-center items-center border-[3px] border-[#EC6416]"
      >
        <div className="playIcon"></div>
        <span className="ms-1 ">
          <img
            src={Video2}
            className="w-[15px] md:w-[17px] xl:w-[19px] 2xl:w-[20px]"
            alt=""
          />
        </span>
      </div>

      {/* Модальное окно */}
      {isOpen && (
        <>
          {/* Фон затемнения */}
          <div
            className="fixed inset-0 z-[1000] bg-black bg-opacity-50"
            onClick={toggleModal}
          ></div>

          {/* Модальное окно по центру */}
          <div
            className="w-[95%] h-[40%] md:w-[80%] md:h-[60%] fixed max-w-[1000px]  lg:w-[80%] lg:h-[80%] z-[2000] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white md:p-6 p-2 rounded-lg shadow-lg"
            style={{ transitionDuration: "300ms" }}
          >
            <div className="flex items-center justify-between">
              {/* Кнопка закрытия */}
              <div
                onClick={toggleModal}
                className="rounded-[2px] absolute top-0 right-0 object-cover p-1 px-3 text-white cursor-pointer bg-main"
              >
                <i class="fa-solid fa-x"></i>
              </div>
            </div>
            <div className=" max-w-[1000px]  w-[100%] h-[100%]">
              <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src="https://www.youtube.com/embed/z7iskTipAZ4?si=kooWJVfl80Ox9wHX"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CenteredModal;
