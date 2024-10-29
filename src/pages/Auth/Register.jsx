import Mail from "/src/assets/mail.svg";
import SectionDesign from "/src/components/typography/SectionDesign.jsx";
import React, { useState } from "react";
import BgImg from "/src/assets/about/auth/register.png";
import BgImg2 from "/src/assets/about/auth/register.svg";
import { useDispatch, useSelector } from "react-redux";
import { userRegistered } from "../../components/redux/slice/hotels_slice";
import publicAxios from "../../api";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Language from "../../components/Language/Language";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Input from "../../components/Form/Input";
const Register = () => {
  const [activeEmail, setActiveEmail] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerInfo, setRegisterInfo] = useState();

  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const { t, i18n } = useTranslation();

  const changeUserInfo = (e) => {
    const { name, value } = e.target;
    setRegisterInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setRegisterInfo((prev) => {
        return {
          ...prev,
          password,
        };
      });
      setLoading(true);
      try {
        const res = await publicAxios.post("/users/register", registerInfo);
        localStorage.setItem("acsess-token", res.data.token);
        dispatch(userRegistered());
        setErrorMsg(false);
        if (res.data.err) {
          toast.error(t("toasts.register.accountExists"));
        } else {
          toast.success(t("toasts.register.verificationLinkSent"));
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        }
      } catch (error) {
        toast.error(t("toasts.register.registrationError"));
      } finally {
        setLoading(false);
      }
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen">
      <ToastContainer position="top-center" closeButton={false} />

      <div className="container flex items-center justify-center mx-auto ">
        <div className="z-10 flex items-center md:h-auto lg:static md:w-1/2">
          <div className=" 2xl:pt-[60px] relative px-4   md:px-0  login py-12 md:ps-[0px] xl:ps-[40px] flex flex-col justify-center   2xl:ps-[70px]">
            <div className="flex items-center justify-between ">
              <SectionDesign
                classNameList={" text-white   md:text-[#DCA500]  !font-mono"}
                text={"Xiva Gould Tour"}
              />
              <div className="rounded-full shadow-md">
                <Language />
              </div>
            </div>
            <div
              action="#"
              className=" lg:pt-12 xl:ps-[70px] mt-[23px] lg:mt-103px]"
            >
              <h1 className=" text-[20px] md:text-[30px] text-white md:text-main font-bold text-center">
                {t(`main.forms.labels.registerTitle`)}
              </h1>
              <div
                className={`${
                  errorMsg
                    ? " block opacity-1 z-[19]"
                    : " opacity-0  translate-y-[-100px] hidden "
                } relative wrong text-[12px]  md:text-[14px] p-[10px] mt-[20px] border border-main text-center bg-[#ffebe8] rounded-[6px] `}
              >
                <h1 className="font-bold "> Parol hato </h1>
                <p>Parol hato</p>
                {/* <h1 className="font-bold "> {t("wrongPassword")} </h1>
                <p>{t("invalidPassword")}</p> */}
              </div>
              <div className="relative  mt-[20px] text-[12px]      ">
                <form
                  onSubmit={handleSubmit}
                  className="flex font-proppins flex-col items-center md:gap-[20px] gap-[15px]"
                >
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="firstName"
                      className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.firstName`)}
                    </label>
                    <Input
                      id={"first_name"}
                      func={changeUserInfo}
                      title={t(`main.forms.inputs.name`)}
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="lastName"
                      className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.lastName`)}
                    </label>
                    <Input
                      id={"last_name"}
                      func={changeUserInfo}
                      title={t(`main.forms.inputs.lastName`)}
                    />
                  </div>
                  <div className="flex w-full flex-col items-start justify-start">
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
                        onChange={(e) => {
                          changeUserInfo(e);
                          setPassword(e.target.value);
                        }}
                        className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
                        placeholder={t(`main.forms.inputs.password`)}
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
                  <div className="flex flex-col items-start justify-start w-full">
                    <label
                      htmlFor="confirmPassword"
                      className="cursor-pointer text-white  md:text-black text-[13px] md:text-[16px] "
                    >
                      {t(`main.forms.labels.confirmPassword`)}
                    </label>
                    <div className="focus-within:shadow-shadowInput  transition-all w-full flex mt-1 items-center rounded-[4px] px-[15px] bg-white border-dashed border border-main   ">
                      <label
                        htmlFor="confirmPassword"
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
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showConfirmPassword ? "text" : "password"}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
                        placeholder={t(`main.forms.inputs.confirmPassword`)}
                      />
                      <span
                        className="flex w-[40px]  items-center justify-center password-toggle"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <i className="fas text-[14px] text-gray md:text-[18px] fa-eye-slash"></i>
                        ) : (
                          <i className="fas text-[14px] text-blue md:text-[18px] fa-eye "></i>
                        )}
                      </span>
                    </div>
                  </div>

                  <DefaultBtn
                    classNameList="px-[40px]"
                    txt={`main.forms.labels.registerTitle`}
                    loading={loading}
                    more={{ type: "submit" }}
                  />
                </form>
                <div
                  to="/login"
                  className={
                    "text-center    text-blue md:text-black  font-proppins  text-[14px] md:text-[18px] mt-[20px] w-full"
                  }
                >
                  {t(`main.forms.labels.registerQuestion`)}
                  <NavLink to={"/login"} className="text-white md:text-main">
                    {t(`main.forms.labels.loginTitle`)}
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

export default Register;
