import React, { useEffect, useRef, useState } from "react";
import PageDesign from "../../components/PageDesign";
import TitlePage from "../../components/TitlePage";
import { carCategory, LANGUAGES } from "../../../../constants";
import door from "/src/assets/car-door.png";
import seat from "/src/assets/seat.png";
import plus from "/src/assets/hotels/plus.png";

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
import SelectCar from "../../../../components/Select/SelectCar";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
const CarDynamicAdmin = () => {

  const { id } = useParams();
  const { data: car, loading } = useFetch(`cars/car/${id}`);
  const [object, setObject] = useState({});
  // Rasm Add Images
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [imagesPrev, setImagesPrev] = useState([]);
  const [rasmlar, setRasmlar] = useState([]);
  const [newImages, setNewImages] = useState([]);

  const handleImageUpload = (e) => {
    const newImagesPreview = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setImagesPrev([...imagesPrev, ...newImagesPreview]);
    setNewImages([...newImages, e.target.files[0]]);
  };

  const handleRemoveImage = (index) => {
    setImagesPrev(imagesPrev.filter((_, i) => i !== index));
    setRasmlar(rasmlar.filter((_, i) => i !== index));
    setNewImages(newImages.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setRasmlar(car.images);
    setImagesPrev(car.images);
  }, [car]);

  const changeHandler = (lang, objectName, value) => {
    setObject((prev) => {
      prev[lang] = {
        ...prev[lang],
        [objectName]: value,
      };
      const res = prev;
      return res;
    });
    console.log(object);
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

  const changeHandlerInput = (name, value) => {
    setObject((prev) => {
      prev = {
        ...prev,
        [name]: value,
      };
      const res = prev;
      return res;
    });
  };

  return (
    !loading && (
      <PageDesign>
        <TitlePage
          del={true}
          title={"Moshina qo'shish"}
          edit
          link={`/cars/car/${id}`}
          navigaPage={"cars/"}
          data={object}
          images={newImages}
          oldImages={rasmlar}
        />
        <div className="px-[30px] pt-[20px] ">
          <div className="flex justify-between ">
            <div>
              <h1 className="text-[20px]">Moshinanig Nomi*</h1>

              {LANGUAGES.map((item, idx = 0) => (
                <div
                  key={idx + 1}
                  className="flex flex-col mt-[10px]  items-start"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      className="w-[40px] object-cover h-[25px] rounded-sm"
                      alt=""
                    />
                    <input
                      type="text"
                      defaultValue={car[item.lang]?.car_name}
                      onChange={(e) =>
                        changeHandler(item.lang, `car_name`, e.target.value)
                      }
                      placeholder="JAC M3"
                      className=" w-[900px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
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
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex items-center my-[20px] gap-[20px] justify-between">
              <div className="flex flex-col items-start">
                <h1 className="text-[17px] ">
                  Moshina Kategoriyasini tanlang*
                </h1>
                <SelectCar
                  defaultItem={car.level}
                  changeHandlerInput={changeHandlerInput}
                  name={"level"}
                  value={carCategory}
                />
              </div>
              <div className="flex flex-col items-start">
                <label htmlFor="car_seats" className="text-[17px] ">
                  O'rindiqlar soni*
                </label>
                <label
                  htmlFor="car_seats"
                  className=" flex  w-[120px]  pr-[10px] items-center text-[18px]  justify-between   outline-none relative  border border-dashed border-grayLight rounded-[10px] "
                >
                  <div className="flex items-center justify-between ">
                    <input
                      id="car_seats"
                      name="car_seats"
                      defaultValue={car.car_seats}
                      onChange={changeHandlerSelf}
                      type="number"
                      className=" focus:border-main ps-[20px]  outline-none  rounded-[10px] py-[10px] w-full"
                    />
                    <img src={seat} className=" w-[30px]" alt="" />
                  </div>
                </label>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-[17px] ">Eshiklar soni*</h1>
                <label
                  htmlFor="car_doors"
                  className=" flex  w-[120px] pr-[10px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
                >
                  <div className="flex items-center justify-between ">
                    <input
                      id="car_doors"
                      name="car_doors"
                      defaultValue={car.car_doors}
                      onChange={changeHandlerSelf}
                      type="number"
                      className=" focus:border-main ps-[20px]  outline-none  rounded-[10px] py-[10px] w-full"
                    />
                    <img src={door} className=" w-[30px]" alt="" />
                  </div>
                </label>
              </div>
              <div className="flex flex-col items-start">
                <h1 className="text-[17px] ">Kunlik narxi*</h1>
                <label
                  htmlFor="temperature"
                  className=" flex  w-[250px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
                >
                  <div className="flex items-center justify-between ">
                    <input
                      name="price"
                      defaultValue={car.price}
                      onChange={changeHandlerSelf}
                      type="number"
                      className=" focus:border-main px-[20px]  outline-none  rounded-[10px] py-[10px] w-full"
                    />
                    <span className=" font-playfair">$</span>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="pb-[50px]  w-full text-[16px] font-normal  px-[30px] py-[10px]">
          <div>
            <h1>Moshina haqida qo'shimcha ma'lumotlar*</h1>
            {LANGUAGES.map((item, idx) => (
              <div key={idx} className="flex flex-col mt-[10px]">
                <div className="flex w-full gap-4 items-b">
                  <img
                    src={item.image}
                    className="w-[40px] object-cover h-[25px] rounded-sm"
                    alt=""
                  />
                  <textarea
                    required
                    defaultValue={car[item.lang].description}
                    type="text"
                    onChange={(e) =>
                      changeHandler(item.lang, `bio`, e.target.value)
                    }
                    placeholder=" "
                    className="focus:border-main outline-none  w-full h-[150px]   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageDesign>
    )
  );
};

export default CarDynamicAdmin;