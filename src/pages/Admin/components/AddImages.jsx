import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import plus from "/src/assets/hotels/plus.png";
import "./styles.css";
import download from "/src/assets/about/download.svg";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { addImagesHotel } from "../../../components/redux/slice/hotels_slice";
import { useDispatch, useSelector } from "react-redux";

const AddImages = ({ defaultImages }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [images, setImages] = useState([]);
  const [rasmlar, setRasmlar] = useState([]);

  const dispatch = useDispatch();
  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages([...images, ...newImages]);
    setRasmlar([...rasmlar, e.target.files[0]]);
    dispatch(addImagesHotel(e.target.files[0]));
  };

  const handleRemoveImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 !mt-0 !p-0"
      >
        <SwiperSlide>
          <div className="text-[16px] min-w-[400px] h-full font-normal ">
            <label
              htmlFor="image"
              className="rounded-[6px] gap-4 border-border border h-full bg-[#FFF1EA] flex-col flex py-[40px] justify-center items-center "
            >
              <input
                type="file"
                multiple
                onChange={(e) => {
                  handleImageUpload(e);
                }}
                name="image"
                className="hidden"
                id="image"
              />
              <div className="text-center">
                <img src={download} alt="" />
              </div>
              <h1>Rasm yuklang</h1>
            </label>
          </div>
        </SwiperSlide>
        {images.map((img, index) => (
          <SwiperSlide key={index} className="relative">
            <img src={img} alt={`Slide ${index}`} />
            <div
              className="absolute cursor-pointer top-0 right-0 bg-[#FF0000] rounded-br-none rounded-bl-[12px] rounded-tl-none w-[35px] h-[35px] flex justify-center items-center"
              onClick={() => handleRemoveImage(index)}
            >
              <i className="fa-solid fa-trash text-[#FFFFFF]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper3 !mt-0"
      >
        <SwiperSlide className="cursor-pointer">
          <div className="flex cursor-pointer relative !opacity-1 bg-[#FFF1EA] w-full h-full justify-center items-center">
            <img
              src={plus}
              className="mb-[5px] absolute max-w-[35px] max-h-[35px] object-cover"
              alt=""
            />
            <input
              type="file"
              onChange={handleImageUpload}
              name="image"
              className="w-full h-full opacity-0 "
              id="image"
            />
          </div>
        </SwiperSlide>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`Thumbnail ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default AddImages;
