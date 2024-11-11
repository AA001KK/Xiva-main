import React, { useState } from "react";
import Video2 from "/src/assets/about/play.svg";
import { useTranslation } from "react-i18next";
import Input from "../Form/Input";
import UploadImages from "../Images/UploadImages";
import DownloadImage from "../Images/DownloadImage";

const UserModal = ({ userInfo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState();
  const [imgPreview, setImgPreview] = useState(userInfo?.passport_image);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const { t } = useTranslation();

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="flex items-center justify-between bg-[#4A90E2] text-white rounded-md lg:rounded-lg px-4 py-2 lg:py-3 lg:px-6 transition-all duration-300 ease-in-out hover:bg-[#357ABD] shadow-md w-full lg:w-auto"
      >
        <div className="flex-1 mr-3 ">
          Foydalanuvchi ma'lumotlari
        </div>
        <div className="items-center border-l border-white lg:flex ">
          <i className="ml-3 text-md lg:text-lg fa-solid fa-user"></i>
        </div>
      </button>

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
            className="w-[95%] md:w-[80%]   fixed max-w-[700px]  lg:w-[80%] z-[2000] left-1/2 rounded-xl top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white md:p-6 p-2  shadow-lg"
            style={{ transitionDuration: "300ms" }}
          >
            <div className="items-center justify-between ">
              {/* Кнопка закрытия */}
              <div
                onClick={toggleModal}
                className="rounded-[2px]  absolute top-0 right-0 object-cover p-1 px-3 text-white cursor-pointer bg-main"
              >
                <i className="fa-solid fa-x"></i>
              </div>
            </div>
            <div className="relative  mt-2    rounded-xl text-[12px]">
              <h1 className="text-center   text-[25px] md:text-[35px]">
                Foydalanuvchi ma'lumotlari
              </h1>
              <form className="font-proppins    items-center md:gap-[20px] gap-[15px]">
                <div className="flex  font-proppins flex-col items-center md:gap-[20px] gap-[15px]">
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="firstName"
                      className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.firstName`)}
                    </label>
                    {userInfo.first_name && (
                      <Input
                        read={true}
                        id={"first_name"}
                        title={"First Name"}
                        def={userInfo.first_name}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="lastName"
                      className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.lastName`)}
                    </label>
                    {userInfo.last_name && (
                      <Input
                        read={true}
                        id={"last_name"}
                        title={"Last Name"}
                        def={userInfo.last_name}
                      />
                    )}
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="gender"
                      className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.gender`)}
                    </label>
                    <Input
                      read={true}
                      id={"last_name"}
                      title={"Last Name"}
                      def={t("genders." + userInfo.gender)}
                    />
                  </div>
                </div>
                <div className="flex-1 w-full h-full ">
                  <DownloadImage
                    imgPreview={imgPreview}
                    txt={"main.forms.labels.imgUpload"}
                    classList={"h-[300px]  "}
                  />
                </div>
              </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default UserModal;
