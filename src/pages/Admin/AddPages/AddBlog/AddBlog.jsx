import React, { useEffect, useRef, useState } from "react";
import DateInput from "./Date";
import { Icons } from "../../../../assets/icons";
import { LANGUAGES } from "../../../../constants";
import JoditMore from "./JoditMore";
import TitlePage from "../../components/TitlePage";
import PageDesign from "../../components/PageDesign";
import download from "/src/assets/about/download.svg";

const AddBlog = () => {
  const [object, setObject] = useState({});
  const [img, setImg] = useState();
  const [imgPreview, setImgPreview] = useState(null);
  const [isFormComplete, setIsFormComplete] = useState(false);
  const formRef = useRef(null);

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

  const checkFormValidity = () => {
    if (formRef.current) {
      setIsFormComplete(formRef.current.checkValidity());
    }
  };

  useEffect(() => {
    checkFormValidity();
  }, [object]);

  return (
    <PageDesign>
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        ref={formRef}
        className=" mb-[20px]"
      >
        <TitlePage
          link={"blogs/blog"}
          navigaPage={"/admin/blogs"}
          save
          title={"Blog Qo'shish"}
          formFull={isFormComplete}
          data={object}
          images={img}
        />
        <div className=" mt-[10px] flex  justify-between text-[16px] font-normal  px-[30px] py-[10px]">
          <div>
            <h1>Blog Nomi*</h1>

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
                      changeHandler(item.lang, `title`, e.target.value)
                    }
                    placeholder="Xiva shahri haqida qiziqarli ma'lumotlar "
                    className=" w-[700px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full mx-8 mt-4">
          <div className=" flex-1   text-[16px] flex flex-col items-center font-normal   ">
              <h1 className="">Rasm Yuklash*</h1>

              <label
                htmlFor="image"
                className=" relative cursor-pointer h-[250px] w-[400px] rounded-[6px] gap-4  border-border border  bg-[#FFF1EA] flex-col flex  justify-center items-center "
              >
                <input
                  type="file"
                  onChange={handleImageUpload} // Изменили обработчик события
                  name="image"
                  required
                  className={`${
                    imgPreview ? " hidden" : " block"
                  } opacity-0 absolute  `}
                  id="image"
                />
                {imgPreview && (
                  <div
                    className="absolute cursor-pointer top-0 right-0 bg-[#FF0000] rounded-br-none rounded-bl-[12px] rounded-tl-none w-[35px] h-[35px] flex justify-center items-center"
                    onClick={handleRemoveImage}
                  >
                    <i className="fa-solid fa-trash text-[#FFFFFF]" />
                  </div>
                )}
                {/* Отображаем загруженное изображение или показываем дизайн */}
                {imgPreview ? (
                  <img
                    className="object-cover w-full h-full bg-center bg-no-repeat rounded-md"
                    style={{
                      backgroundImage: `url(${imgPreview})`,
                      width: "250px",
                      height: "300px",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ) : (
                  <div className="flex flex-col flex-wrap justify-center text-center ">
                    <img src={download} alt="" />

                    <h1 className="mt-[20px] text-mainOrange font-medium ">
                      Faylni tanlang
                    </h1>
                  </div>
                )}
              </label>
            </div>
            <div className="flex  gap-[20px]  flex-col">
              <div className="flex flex-col items-start">
                <h1>Blog sanasi*</h1>
                <DateInput changeHandlerDate={changeHandlerDate} />
              </div>
              <div className="flex flex-col items-start">
                <h1>Temperatura*</h1>
                <label
                  htmlFor="temperature"
                  className=" flex  w-[150px] items-center gap-[20px] justify-between   :border-main outline-none relative px-[20px]   py-[12px] border border-dashed border-grayLight rounded-[10px] ps-[20px]"
                >
                  <input
                    onChange={changeHandlerSelf}
                    name="temperature"
                    id="temperature"
                    className="w-full outline-none "
                    type="number"
                    placeholder="℃"
                    required
                  />
                  <label htmlFor="temperature">
                    <Icons.tempIcon />
                  </label>
                </label>
              </div>
            </div>
           
          </div>
        </div>
        <div className=" flex  flex-col justify-between text-[15px] font-normal px-[30px] py-[10px]">
          <h1>Blog haqida tafsilotlar</h1>
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
                  placeholder="Xiva shahri haqida qiziqarli ma'lumotlar "
                  className="focus:border-main outline-none w-full h-[120px]   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                />
              </div>
            </div>
          ))}
        </div>

        <div className=" mt-[10px]  text-[16px] font-normal  px-[30px] py-[10px]">
          <div>
            <h1>Blog haqida ma'lumotlar*</h1>

            {LANGUAGES.map((item, idx) => (
              <div
                key={idx}
                className="flex   mt-[30px]  justify-between items-baseline w-full gap-4"
              >
                <img
                  src={item.image}
                  className="w-[40px] object-cover h-[25px] rounded-sm"
                  alt=""
                />
                <div className="w-full ">
                  <JoditMore item={item} changeHandler={changeHandler} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </form>
    </PageDesign>
  );
};

export default AddBlog;
