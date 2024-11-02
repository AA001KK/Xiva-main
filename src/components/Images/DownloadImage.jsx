import React from "react";
import download from "/src/assets/about/download.svg";
import { useTranslation } from "react-i18next";

const DownloadImage = ({
  setImg,
  setImgPreview,
  imgPreview,
  classList,
  title,
  txt,
}) => {
  // Download Image
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImg(file);
      setImgPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = (index) => {
    setImgPreview(null);
    setImg(null);
  };
  const { t } = useTranslation();
  return (
    <div
      className={`text-[16px] flex flex-col font-mono  items-center font-normal py-[10px] ${classList}`}
    >
      <h1 className="">{title || t(txt)} </h1>

      <label
        htmlFor="image"
        className=" relative  w-full h-full  rounded-[6px] gap-4  border-border border  bg-[#FFF1EA] flex-col flex  justify-center items-center "
      >
        <input
          onChange={handleImageUpload}
          className={`${
            imgPreview ? " hidden" : " block"
          } opacity-0 absolute  `}
          id="image"
          accept="image/*"
        />
        {imgPreview && (
          <div
            className="absolute cursor-pointer top-0 right-0 bg-green text-white rounded-br-none rounded-bl-[12px] rounded-tl-none w-[35px] h-[35px] flex justify-center items-center"
            onClick={handleRemoveImage}
          >
            <a
              href="https://firebasestorage.googleapis.com/v0/b/old-khiva-8a56e.appspot.com/o/Passports%2F2024-08-28T11%3A25%3A00.299Z.jpeg?alt=media&token=c1e4fc4e-cc25-483c-ae4f-9000835009f0"
              download="passport-image.jpeg"
            >
              <i className="fa-solid fa-download"></i>
            </a>
          </div>
        )}
        {/* Отображаем загруженное изображение или показываем дизайн */}
        {imgPreview ? (
          <img
            className="object-cover w-full h-full bg-center bg-no-repeat rounded-md"
            style={{
              backgroundImage: `url(${imgPreview})`,
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : (
          <div className="flex flex-col flex-wrap justify-center text-center ">
            <img src={download} alt="" />

            <h1 className="mt-[20px] text-[15px]  ">Faylni tanlang</h1>
          </div>
        )}
      </label>
    </div>
  );
};

export default DownloadImage;
