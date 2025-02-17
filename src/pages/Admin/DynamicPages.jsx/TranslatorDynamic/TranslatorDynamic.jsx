import React, { useEffect, useRef, useState } from "react";
import {
  LANGUAGES,
  level,
  tajriba,
  translatorsLanguages,
} from "../../../../constants";
import SelectComponent from "../../../../components/Select/Select";
import TitlePage from "../../components/TitlePage";
import PageDesign from "../../components/PageDesign";
import TranslatorLanguages from "../../AddPages/AddTranslator/Languages";
import useFetch from "../../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import download from "/src/assets/about/download.svg";

const TranslatorDynamicAdmin = () => {
  const { id } = useParams();
  const { data: translator, loading } = useFetch(
    `translators/translator/${id}`
  );
  const [object, setObject] = useState({});
  const [imagesPrev, setImagesPrev] = useState([]);
  const [rasmlar, setRasmlar] = useState([]);
  const [newImages, setNewImages] = useState([]);

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
    setImagesPrev({});
    setNewImages({});
  };

  useEffect(() => {
    setImagesPrev(translator.image);
    setRasmlar({});
  }, [translator]);

  return (
    !loading && (
      <PageDesign>
        <form
          onSubmit={(e) => e.preventDefault()}
          ref={formRef}
          className=" mb-[20px] "
        >
          <TitlePage
            edit
            del
            link={`translators/translator/${id}`}
            navigaPage={"translators"}
            title={"Tarjimon Qo'shish"}
            data={object}
            images={newImages}
            oldImages={rasmlar}
            single={true}
          />

          <div className="flex">
            <div>
              <div className=" mt-[10px] flex  justify-between text-[16px] font-normal  px-[30px] py-[10px]">
                <div>
                  <h1>Tarjimonning Ism Familiyasi*</h1>

                  {LANGUAGES.map((item, idx) => (
                    <div
                      key={idx}
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
                          required
                          defaultValue={translator[item.lang].translator_name}
                          onChange={(e) =>
                            changeHandler(
                              item.lang,
                              `translator_name`,
                              e.target.value
                            )
                          }
                          placeholder="F.I.O"
                          className=" w-[900px]  focus:border-main outline-none   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" flex  flex-col justify-between  text-[15px] font-normal px-[30px] py-[10px]">
                <h1>Tarjimon haqida ma'lumot kiritish</h1>
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
                        defaultValue={translator[item.lang].bio}
                        type="text"
                        onChange={(e) =>
                          changeHandler(item.lang, `bio`, e.target.value)
                        }
                        placeholder=" "
                        className="focus:border-main outline-none w-[900px] h-[120px]   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] "
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col   pr-[20px]">
              <div className=" mt-[10px] text-[16px] font-normal   py-[10px]">
                <div className="flex flex-col items-center">
                  <h1 className="text-left ">Rasm Yuklash*</h1>
                  <label
                    htmlFor="image"
                    className=" relative cursor-pointer h-[300px] w-[400px] rounded-[6px] gap-4  border-border border  bg-[#FFF1EA] flex-col flex  justify-center items-center "
                  >
                    <input
                      type="file"
                      onChange={handleImageUpload} // Изменили обработчик события
                      name="image"
                      required
                      className={`${
                        imagesPrev ? " hidden" : " block"
                      } opacity-0 absolute  `}
                      id="image"
                    />
                    {imagesPrev && (
                      <div
                        className=" cursor-pointer absolute top-0 right-0 bg-[#FF0000] rounded-br-none rounded-bl-[12px] rounded-tl-none w-[35px] h-[35px] flex justify-center items-center"
                        onClick={() => handleRemoveImage()}
                      >
                        <i className="fa-solid fa-trash text-[#FFFFFF]" />
                      </div>
                    )}
                    {/* Отображаем загруженное изображение или показываем дизайн */}
                    {imagesPrev ? (
                      <img
                        className="object-cover w-full h-full bg-center bg-no-repeat rounded-md"
                        style={{
                          backgroundImage: `url(${imagesPrev})`,
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
              </div>
              <div className="flex mt-[20px] gap-[20px] justify-between">
                <div className="flex flex-col items-start">
                  <h1 className="text-[17px] ">Til bilish darajasi*</h1>
                  <SelectComponent
                    changeHandlerInput={changeHandlerInput}
                    name={"lang_level"}
                    value={tajriba}
                    defaultItem={translator.lang_level}
                  />
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-[17px] ">Tajribasi*</h1>
                  <SelectComponent
                    changeHandlerInput={changeHandlerInput}
                    name={"experience"}
                    value={level}
                    defaultItem={translator.experience}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-[20px]   items-start">
                <h1 className="text-[17px] ">Xizmat narxi*</h1>
                <label
                  htmlFor="temperature"
                  className=" flex  w-[250px] pr-[20px] items-center text-[18px] gap-[20px] justify-between    outline-none relative  border border-dashed border-grayLight rounded-[10px] "
                >
                  <div className="flex items-center justify-between ">
                    <input
                      required
                      name="price"
                      defaultValue={translator.price}
                      onChange={changeHandlerSelf}
                      type="number"
                      className=" focus:border-main px-[20px]  outline-none  rounded-[10px] py-[10px] w-full"
                    />
                    <span className=" font-playfair">$</span>
                  </div>
                </label>
              </div>
              <TranslatorLanguages
                changeHandler={changeHandlerDate}
                translatorsLanguages={translatorsLanguages}
              />
            </div>
          </div>
        </form>
      </PageDesign>
    )
  );
};

export default TranslatorDynamicAdmin;
