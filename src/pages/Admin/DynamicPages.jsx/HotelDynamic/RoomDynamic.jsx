import React, { useEffect, useRef, useState } from "react";
import { beds, LANGUAGES } from "../../../../constants";
import TitlePage from "../../components/TitlePage";
import square from "/src/assets/hotels/square.png";
import plus from "/src/assets/hotels/plus.png";
import Logo from "/src/assets/header/user.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "../../components/styles.css";
import download from "/src/assets/about/download.svg";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
const RoomDynamic = ({ roomData, id }) => {
  const [object, setObject] = useState({});
  const [isFormComplete, setIsFormComplete] = useState(false);
  const formRef = useRef(null);
  const lang = localStorage.getItem("i18nextLng");
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
    console.log(name);
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

  // Rasm Hotel Add Images
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  // Hotel Images
  const [imagesPrev, setImagesPrev] = useState([]);
  const [rasmlar, setRasmlar] = useState([]);
  const [newImages, setNewImages] = useState([]);

  // Hotel Images

  const handleImageUpload = (e) => {
    const newImagesPreview = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    if (imagesPrev?.length || newImages?.length) {
      setImagesPrev([...imagesPrev, ...newImagesPreview]);
      setNewImages([...newImages, e.target.files[0]]);
    } else {
      setImagesPrev([...newImagesPreview]);
      setNewImages([e.target.files[0]]);
    }
  };

  const handleRemoveImage = (index) => {
    setImagesPrev(imagesPrev.filter((_, i) => i !== index));
    setRasmlar(rasmlar.filter((_, i) => i !== index));
    setNewImages(newImages.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setRasmlar(roomData?.images);
    setImagesPrev(roomData?.images);
  }, [roomData]);

  const checkFormValidity = () => {
    if (formRef.current) {
      setIsFormComplete(formRef.current.checkValidity());
    }
  };
  useEffect(() => {
    checkFormValidity();
  }, [object]);


  return (
    <div className=" my-[50px]  flex justify-between px-[30px]">
      <div>
        <h1 className=" text-[18px]">Xona Nomi*</h1>

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
                  changeHandler(item.lang, `room_name`, e.target.value)
                }
                defaultValue={roomData?.[lang]?.room_name}
                placeholder="Xona nomini kiriting "
                className=" w-[450px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
              />
            </div>
          </div>
        ))}
      </div>
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
          {imagesPrev?.map((img, index) => (
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
          {imagesPrev?.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Thumbnail ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex flex-col justify-between gap-4 ">
        <div className="flex flex-col gap-[20px]">
          <div className="flex justify-between gap-[20px]">
            <div className="flex flex-col items-start">
              <h1 className="text-[17px] ">Kunlik narxi*</h1>
              <label
                htmlFor="price"
                className="flex  w-[150px] pr-[20px] items-center text-[18px] gap-[20px] justify-between outline-none relative  border border-dashed border-grayLight rounded-[10px] "
              >
                <div className="flex items-center justify-between ">
                  <input
                    id="price"
                    name="price"
                    required
                    defaultValue={roomData?.price}
                    onChange={changeHandlerSelf}
                    type="number"
                    className=" focus:border-main px-[20px]  outline-none  rounded-[10px] py-[6px] w-full"
                  />
                  <span className="text-[20px] text-main ">$</span>
                </div>
              </label>
            </div>
            <div className="flex flex-col items-start">
              <h1 className="text-[17px] ">Kengligi*</h1>
              <label
                htmlFor="area"
                className=" flex  w-[130px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
              >
                <div className=" pr-[10px] flex items-center justify-between">
                  <input
                    id="area"
                    name="area"
                    required
                    defaultValue={roomData?.area}
                    onChange={changeHandlerSelf}
                    type="number"
                    className=" focus:border-main px-[20px] pr-0  outline-none  rounded-[10px] py-[6px] w-full"
                  />
                  <div className="flex items-center gap-2">
                    <div>
                      <span>m</span>
                      <sup>2</sup>
                    </div>
                    <img src={square} alt="" />
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-[17px] ">Maksimal odam soni*</h1>
          <label
            htmlFor="max_people"
            className=" flex  w-[150px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
          >
            <div className="flex items-center justify-between ">
              <input
                id="max_people"
                name="max_people"
                required
                defaultValue={roomData?.max_people}
                onChange={changeHandlerSelf}
                type="number"
                className=" focus:border-main px-[20px] pr-0  outline-none  rounded-[10px] py-[6px] w-full"
              />
              <div className="flex items-center gap-2">
                <div></div>
                <img src={Logo} alt="" />
              </div>
            </div>
          </label>
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-[16px] ">Bed*</h1>

          <select
            required
            name="bed"
            onChange={(e) => {
              changeHandlerInput("bed", beds[e.target.value]);
            }}
            className={`px-[20px] text-[18px] w-[270px]  border-grayLight  border border-dashed     focus:border-main  outline-none  rounded-[10px] py-[10px]`}
            id=""
          >
            {beds.map((item, idx) => {
              return (
                <option key={idx} value={idx} className=" py-2 h-[30px] ">
                  {item.count} ta "{item.type == 1 ? "Bir" : "Ikki"}" kishilik
                  yotoq
                </option>
              );
            })}
          </select>
        </div>
        <TitlePage
          link={`hotels/hotel/${id}/room/${roomData?._id}`}
          navigaPage={`/hotel-owner`}
          classNameList={"!border-b-0 !p-0 !items-end"}
          save={!roomData ? true : false}
          edit={roomData ? true : false}
          formFull={true}
          data={object}
          images={newImages}
          oldImages={rasmlar}
          reload={false}
        />
      </div>
    </div>
  );
};

export default RoomDynamic;
