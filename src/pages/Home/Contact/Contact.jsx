import React, { useState } from "react";
import PhoneInputForm from "../../Pay/PhoneInput";
import UniversalBtn from "../../../components/buttons/UniversalBtn";
import DefaultBtn from "../../../components/buttons/DefaultBtn";
import showAddSwal from "../../../components/buttons/AddSwal";
import { useTranslation } from "react-i18next";
import { contactData } from "../../../constants";

const Contact = () => {
  const [object, setObject] = useState({});
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);

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
  };

  const changeHandlerNumber = (phone) => {
    setObject((prev) => {
      prev = {
        ...prev,
        phone: phone,
      };
      const res = prev;
      return res;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    changeHandlerNumber(phone);
    setLoading(true);
    try {
      // publicAxios.post("contact", object);
      showAddSwal("contact", null, null, object);
    } finally {
      setLoading(false);
    }
  };
  const { t } = useTranslation();
  return (
    <div className="container py-[50px] px-[10px] md:px-[20px] items-start pb-[50px]  flex-col  sm:flex-row  mx-auto flex justify-center gap-[30px] 2xl:gap-[150px]">
      <div className=" text-white p-[20px] py-[30px] 2xl:p-[40px]  max-w-[403px] 2xl:py-[50px]  bg-main  w-full  md:rounded-[20px] rounded-[8px] mt-[5px]">
        <h1 className="text-[20px] 2xl:text-[26px]">
          {" "}
          {t(`sectionsData.contactSection.title`)}
        </h1>
        <h3 className="font-proppins text-[14px]  2xl:text-[18px]">
          {t(`sectionsData.contactSection.subtitle`)}
        </h3>
        <div className="mt-[30px] 2xl:mt-[40px] ">
          <div className="flex items-center gap-4 y">
            <div className="border font-serif max-w-[35px] max-h-[35px] md:max-w-[42px] md:max-h-[42px]  border-white rounded-[50%] p-2  flex justify-center items-center">
              <a href={`tel:${contactData.tel}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.38028 8.85335C9.07627 10.303 10.0251 11.6616 11.2266 12.8632C12.4282 14.0648 13.7869 15.0136 15.2365 15.7096C15.3612 15.7694 15.4235 15.7994 15.5024 15.8224C15.7828 15.9041 16.127 15.8454 16.3644 15.6754C16.4313 15.6275 16.4884 15.5704 16.6027 15.4561C16.9523 15.1064 17.1271 14.9316 17.3029 14.8174C17.9658 14.3864 18.8204 14.3864 19.4833 14.8174C19.6591 14.9316 19.8339 15.1064 20.1835 15.4561L20.3783 15.6509C20.9098 16.1824 21.1755 16.4481 21.3198 16.7335C21.6069 17.301 21.6069 17.9713 21.3198 18.5389C21.1755 18.8242 20.9098 19.09 20.3783 19.6214L20.2207 19.779C19.6911 20.3087 19.4263 20.5735 19.0662 20.7757C18.6667 21.0001 18.0462 21.1615 17.588 21.1601C17.1751 21.1589 16.8928 21.0788 16.3284 20.9186C13.295 20.0576 10.4326 18.4332 8.04466 16.0452C5.65668 13.6572 4.03221 10.7948 3.17124 7.76144C3.01103 7.19699 2.93092 6.91477 2.9297 6.50182C2.92833 6.0436 3.08969 5.42311 3.31411 5.0236C3.51636 4.66357 3.78117 4.39876 4.3108 3.86913L4.46843 3.7115C4.99987 3.18006 5.2656 2.91433 5.55098 2.76999C6.11854 2.48292 6.7888 2.48292 7.35636 2.76999C7.64174 2.91433 7.90747 3.18006 8.43891 3.7115L8.63378 3.90637C8.98338 4.25597 9.15819 4.43078 9.27247 4.60655C9.70347 5.26945 9.70347 6.12403 9.27247 6.78692C9.15819 6.96269 8.98338 7.1375 8.63378 7.4871C8.51947 7.60142 8.46231 7.65857 8.41447 7.72538C8.24446 7.96281 8.18576 8.30707 8.26748 8.58743C8.29048 8.66632 8.32041 8.72866 8.38028 8.85335Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <p className="text-[16px]  2xl:text-[18px] font-thin">
              <a href={`tel:${contactData.tel}`}>+998 00 00 00 00 </a>
            </p>
          </div>
          <div className="flex gap-4 mt-[20px]  items-center">
            <div className="border  max-w-[35px] max-h-[35px] md:max-w-[42px] md:max-h-[42px] border-white rounded-[50%] p-2 flex justify-center items-center">
              <a href={`mailto:${contactData.mailto}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 7L10.1649 12.7154C10.8261 13.1783 11.1567 13.4097 11.5163 13.4993C11.8339 13.5785 12.1661 13.5785 12.4837 13.4993C12.8433 13.4097 13.1739 13.1783 13.8351 12.7154L22 7M6.8 20H17.2C18.8802 20 19.7202 20 20.362 19.673C20.9265 19.3854 21.3854 18.9265 21.673 18.362C22 17.7202 22 16.8802 22 15.2V8.8C22 7.11984 22 6.27976 21.673 5.63803C21.3854 5.07354 20.9265 4.6146 20.362 4.32698C19.7202 4 18.8802 4 17.2 4H6.8C5.11984 4 4.27976 4 3.63803 4.32698C3.07354 4.6146 2.6146 5.07354 2.32698 5.63803C2 6.27976 2 7.11984 2 8.8V15.2C2 16.8802 2 17.7202 2.32698 18.362C2.6146 18.9265 3.07354 19.3854 3.63803 19.673C4.27976 20 5.11984 20 6.8 20Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <a href={`mailto:${contactData.mailto}`}>
              <p className="text-[16px]  2xl:text-[18px] font-thin">
                {t(`sectionsData.contactSection.email`)}
              </p>
            </a>
          </div>
          <div className="flex gap-4 mt-[20px] items-center">
            <div className="border  max-w-[35px] max-h-[35px] md:max-w-[42px] md:max-h-[42px] border-white rounded-[50%] p-2 flex justify-center items-center">
              <a href={`map:${contactData.location}`}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
            <a href={`map:${contactData.location}`}>
              <p className="text-[16px]  2xl:text-[18px] font-thin">
                {t(`sectionsData.contactSection.location`)}
              </p>
            </a>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-full 2xl:w-[769px] flex flex-col gap-2 md:gap-4"
      >
        <div>
          <label
            htmlFor="name"
            className="text-[14px] font-mono 2xl:text-[16px]"
          >
            {t(`main.forms.labels.name`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
            <input
              id={"username"}
              name={"username"}
              required
              onChange={changeHandlerSelf}
              className="py-[8px] w-full px-[15px] ps-0 text-[14px] md:text-[16px] font-proppins outline-none rounded-[6px]  "
              placeholder={t(`main.forms.inputs.name`)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-[14x] font-mono 2xl:text-[16px]"
          >
            {t(`main.forms.labels.email`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
            <input
              type="email"
              name={"email"}
              required
              onChange={changeHandlerSelf}
              className="py-[8px]  w-full  px-[15px] ps-0 text-[14px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
              placeholder={t(`main.forms.inputs.email`)}
              id={"email"}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="phone"
            className="text-[14px] font-mono 2xl:text-[16px]"
          >
            {t(`main.forms.labels.phone`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px]  bg-white border-dashed border border-main  ">
            <PhoneInputForm phone={phone} setPhone={setPhone} />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="text-[14px] font-mono 2xl:text-[16px]"
          >
            {t(`main.forms.labels.message`)}
          </label>
          <textarea
            name="message"
            placeholder={t(`main.forms.inputs.message`)}
            className="outline-none bg-sm inp mt-1 text-[13px] focus-within:shadow-shadowInput  transition-all  2xl:text-[16px] w-full py-[8px] px-[15px] border border-main border-dashed  font-mono  rounded-[6px]  h-[120px]"
            id="message"
            onChange={changeHandlerSelf}
            required
          ></textarea>
        </div>
        <div className="flex justify-end">
          <UniversalBtn txt={"main.buttons.contactBtn"} bg={"bg-main"} />
        </div>
      </form>
    </div>
  );
};

export default Contact;
