import React, { useEffect, useRef, useState } from "react";
import { beds, LANGUAGES } from "../../../../constants";
import TitlePage from "../../components/TitlePage";
import PageDesign from "../../components/PageDesign";
import StarFilter from "./StarFilter";
import square from "/src/assets/hotels/square.png";
import plus from "/src/assets/hotels/plus.png";
import TitleSection from "../../components/TitleSection";
import AddImages from "../../components/AddImages";
import { useSelector } from "react-redux";
// Add Images
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../components/styles.css";
import download from "/src/assets/about/download.svg";
// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import MapModal from "../../components/MapModal2";

const AddHotel = () => {
  const [object, setObject] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const formRef = useRef(null);
  
  const changeHandler = (lang, objectName, value) => {
    setObject((prev) => {
      prev[lang] = {
        ...prev[lang],
        [objectName]: value,
      };
      const res = prev;
      return res;
    });

    checkFormValidity();
  };

  const changeHandlerSelf = (e) => {
    const { name, value } = e.target;
    setObject((prev) => {
      prev = {
        ...prev,
        [name]: value,
      };
      const res = prev;
      return res;
    });
    checkFormValidity();
  };

  const changeHandlerDate = (name, value) => {
    setObject((prev) => {
      prev = {
        ...prev,
        [name]: value,
      };
      const res = prev;
      return res;
    });
    checkFormValidity();
  };

  const changeHandlerInput = (name, value) => {
    setObject((prev) => {
      prev = {
        ...prev,
        [name]: value,
      };
      const res = prev;
      return res;
    });
    checkFormValidity();
  };

  const checkFormValidity = () => {
    if (formRef.current) {
      setIsFormComplete(formRef.current.checkValidity());
    }
  };

  // Rasm Add Images
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imagesPrev, setImagesPrev] = useState([]);
  const [rasmlar, setRasmlar] = useState([]);
  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagesPrev([...imagesPrev, ...newImages]);
    setRasmlar([...rasmlar, e.target.files[0]]);
  };

  const handleRemoveImage = (index) => {
    setImagesPrev(imagesPrev.filter((_, i) => i !== index));
    setRasmlar(rasmlar.filter((_, i) => i !== index));
  };

  useEffect(() => {
    checkFormValidity();
  }, [object]);

  return (
    <PageDesign>
      <form
        noValidate
        action=""
        onSubmit={(e) => e.preventDefault()}
        ref={formRef}
        className=" mb-[20px]"
      
      >
        <TitlePage
          link={"hotels/hotel"}
          navigaPage={"/admin/hotels"}
          save
          title={"Mehmonxona Qo'shish"}
          formFull={true}
          data={object}
          images={rasmlar}
        />
        <div className=" mt-[10px] flex  justify-between text-[16px] font-normal  px-[30px] py-[10px]">
          <div>
            <h1>Mehmonhona Nomi*</h1>

            {LANGUAGES.map((item, idx) => (
              <div key={idx} className="flex flex-col mt-[10px]  items-start">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    className="w-[40px] object-cover h-[25px] rounded-sm"
                    alt=""
                  />
                  <input
                    required
                    type="text"
                    onChange={(e) =>
                      changeHandler(item.lang, `hotel_name`, e.target.value)
                    }
                    placeholder="Mehmonhona nomini kiriting "
                    className=" w-[700px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                  />
                </div>
              </div>
            ))}
            <div className="flex flex-col mt-[20px]   items-start">
              <h1>Mehmonhona manzili:*</h1>

              <MapModal changeHandlerInput={changeHandlerInput} />
            </div>
          </div>
          <div className="flex w-full mt-[10px]  justify-around">
            <div className="flex flex-col gap-4">
              <div className="flex gap-[20px]  items-stretch"></div>

              <div className="flex  flex-col gap-[20px]  items-stretch">
                <div className="flex flex-col items-start">
                  <h1>Mehmonhona reytingi*</h1>
                  <label className=" flex  w-[200px] items-center gap-[20px] justify-between outline-none relative px-[20px]   py-[12px] border border-dashed border-grayLight rounded-[10px] ps-[20px]">
                    <StarFilter handleStars={changeHandlerDate} />
                  </label>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[17px] ">Boshlanish narxi*</h1>
                  <label
                    htmlFor="price"
                    className="flex  w-[150px] pr-[20px] items-center text-[18px] gap-[20px] justify-between outline-none relative  border border-dashed border-grayLight rounded-[10px] "
                  >
                    <div className="flex items-center justify-between ">
                      <input
                        id="price"
                        name="price"
                        required
                        onChange={changeHandlerSelf}
                        type="number"
                        className=" focus:border-main px-[20px]  outline-none  rounded-[10px] py-[6px] w-full"
                      />
                      <span className="  text-[20px] text-main ">$</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <div className=" rounded-[14px] max-w-[400px] h-[300px] min-w-[400px]  overflow-hidden">
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
                  {imagesPrev.map((img, index) => (
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
                  {imagesPrev.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img src={img} alt={`Thumbnail ${index}`} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        <div className=" flex  flex-col justify-between text-[15px] font-normal px-[30px] py-[10px]">
          <TitleSection text={"Mehmonhona haqida tafsilotlar"} />

          {LANGUAGES.map((item, idx) => (
            <div key={idx} className="flex flex-col mt-[10px]">
              <div className="flex items-center w-full gap-4">
                <img
                  src={item.image}
                  className="w-[40px] object-cover h-[25px] rounded-sm"
                  alt=""
                />
                <textarea
                  type="text"
                  required
                  onChange={(e) =>
                    changeHandler(item.lang, `description`, e.target.value)
                  }
                  placeholder="Mehmonhona tafsilotini kiriting "
                  className="focus:border-main outline-none w-full h-[120px]   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                />
              </div>
            </div>
          ))}
        </div>
      </form>
    </PageDesign>
  );
};
export default AddHotel;
