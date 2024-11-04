import Mail from "/src/assets/mail.svg";
import SectionDesign from "/src/components/typography/SectionDesign.jsx";
import React, { useState,  useEffect } from "react";
import BgImg2 from "/src/assets/about/auth/register.svg";
import { useDispatch } from "react-redux";
import { userRegistered } from "../../components/redux/slice/hotels_slice";
import publicAxios from "../../api";
import { useTranslation } from "react-i18next";
import { Link, NavLink, useNavigate } from "react-router-dom";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import Language from "../../components/Language/Language";
import { setUser } from "../../components/redux/slice/user_slice";
import Input from "../../components/Form/Input";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import i18n from "i18next";

const LoginPage = () => {
  const { t, i18n } = useTranslation();
  const router = useNavigate();
  const [activeEmail, setActiveEmail] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginInfo, setLoginInfo] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    // Список доступных языков
    const availableLanguages = ["ru", "en", "de", "zh"];
    
    // Получаем язык из localStorage и обрезаем до первых двух символов
    let langValue = localStorage.getItem("i18nextLng");
    langValue = langValue ? langValue.slice(0, 2) : "ru"; // 'ru-RU' → 'ru'
    
    // Проверяем, доступен ли язык в списке
    if (!availableLanguages.includes(langValue)) {
      langValue = "ru"; // Устанавливаем язык по умолчанию, если язык недоступен
    }
  
    // Сохраняем обрезанное значение в localStorage
    localStorage.setItem("i18nextLng", langValue);
  
    // Устанавливаем язык в i18next
    i18n.changeLanguage(langValue);
    
  }, []);
  
  const openEmail = () => {
    setActiveEmail(!activeEmail);
  };

  const changeUserInfo = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const {
        data: { user, token },
      } = await publicAxios.post("/users/login", loginInfo);
      localStorage.setItem("acsess-token", token);
      dispatch(userRegistered());
      dispatch(setUser(user));
      setErrorMsg(false);
      toast.success((t("toasts.login.loginSuccess")));
      console.log(user.role)
      if (user.role === "admin") {
        router("/admin/home");
      } else if (user.role === "hotel_owner") {
        router("/hotel-owner/orders");
      } else {
        router("/");
      }
    } catch (error) {
      if (error.response.data.err === "Bu foydalanuvchi mavjud emas") {
        toast.error(t("toasts.login.accountNotFound"));
      } else if (error.response.data.err === "Parol xato!") {
        toast.error(t("toasts.login.incorrectPassword"));
      } else {
        toast.error(t("toasts.login.loginError"));
      }

      setErrorMsg(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen ">
      <ToastContainer position="top-center" closeButton={false} />
      <div className="container flex items-center justify-center mx-auto ">
        <div className="z-10 flex items-center md:h-auto lg:static md:w-1/2">
          <div className=" 2xl:pt-[60px] relative px-4   md:px-0  login py-12 md:ps-[0px] xl:ps-[40px] flex flex-col justify-center   2xl:ps-[70px]">
            <div className="flex items-center justify-between ">
              <Link to={"/"}>
              <SectionDesign
                classNameList={" text-white   md:text-[#DCA500]  !font-mono"}
                text={"Xiva Gould Tour"}
              />
              </Link>
              <div className="rounded-full shadow-md">
                <Language />
              </div>
            </div>
            <div className=" lg:pt-12 xl:ps-[70px] mt-[23px] lg:mt-103px]">
              <h1 className=" text-[20px] md:text-[30px] text-white md:text-main font-bold text-center">
                {t(`main.forms.labels.loginTitle`)}
              </h1>
              <div
                className={`${
                  errorMsg
                    ? " block opacity-1 z-[19]"
                    : " opacity-0  translate-y-[-100px] hidden "
                } relative wrong text-[12px]  md:text-[14px] p-[10px] mt-[20px] border border-main text-center bg-[#ffebe8] rounded-[6px] `}
              >
                <h1 className="font-bold "> {t("wrongPassword")} </h1>
                <p>{t("invalidPassword")}</p>
              </div>
              <div className="relative  mt-[20px] text-[12px]      ">
                <form
                  onSubmit={handleSubmit}
                  className="flex font-proppins flex-col items-center md:gap-[20px] gap-[15px]"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="email"
                      className="cursor-pointer text-white  md:text-black   text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.email`)}
                    </label>
                    <Input
                      id={"email"}
                      type={"email"}
                      txt={"main.forms.inputs.email"}
                      func={changeUserInfo}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="password"
                      className="cursor-pointer text-white  md:text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.password`)}
                    </label>
                    <div className="focus-within:shadow-shadowInput  transition-all w-full flex mt-1 items-center rounded-[4px] px-[15px] bg-white border-dashed border border-main   ">
                      <label
                        htmlFor="password"
                        className="text-white mr-[15px] cursor-pointer  md:text-black "
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.1668 8.33333V6.66667C14.1668 4.36548 12.3013 2.5 10.0002 2.5C7.69898 2.5 5.8335 4.36548 5.8335 6.66667V8.33333M10.0002 12.0833V13.75M7.3335 17.5H12.6668C14.067 17.5 14.767 17.5 15.3018 17.2275C15.7722 16.9878 16.1547 16.6054 16.3943 16.135C16.6668 15.6002 16.6668 14.9001 16.6668 13.5V12.3333C16.6668 10.9332 16.6668 10.2331 16.3943 9.69836C16.1547 9.22795 15.7722 8.8455 15.3018 8.60582C14.767 8.33333 14.067 8.33333 12.6668 8.33333H7.3335C5.93336 8.33333 5.2333 8.33333 4.69852 8.60582C4.22811 8.8455 3.84566 9.22795 3.60598 9.69836C3.3335 10.2331 3.3335 10.9332 3.3335 12.3333V13.5C3.3335 14.9001 3.3335 15.6002 3.60598 16.135C3.84566 16.6054 4.22811 16.9878 4.69852 17.2275C5.2333 17.5 5.93336 17.5 7.3335 17.5Z"
                            stroke="black"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                      <input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        onChange={changeUserInfo}
                        className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
                        placeholder={t("main.forms.inputs.password")}
                      />
                      <span
                        className="flex w-[40px]  items-center justify-center password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? (
                          <i className="fas text-[14px] text-gray md:text-[18px] fa-eye-slash"></i>
                        ) : (
                          <i className="fas text-[14px] text-blue md:text-[18px] fa-eye "></i>
                        )}
                      </span>
                    </div>
                  </div>
                  <DefaultBtn
                    classNameList="px-[40px] bg-white lg:bg-main lg:text-white"
                    loading={loading}
                    more={{ type: "submit" }}
                    txt={`main.forms.labels.loginTitle`}
                  />
                </form>
                <div
                  to="/login"
                  className={
                    "text-center flex gap-2 justify-center text-[#1A1A40] md:text-black  font-proppins  text-[14px] md:text-[18px] mt-[20px] w-full"
                  }
                >
                  <span >{t(`main.forms.labels.loginQuestion`)}</span>
                  <NavLink to={"/register"} className="text-white md:text-main">
                    {t(`main.forms.labels.registerTitle`)}
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 flex items-center justify-center w-full lg:h-auto lg:static lg:w-1/2 bg-main">
          <img
            src={BgImg2}
            alt=""
            className=" max-h-[500px] 2xl:max-h-[700px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
