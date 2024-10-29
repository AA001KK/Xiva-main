import React, { useState } from "react";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import showEditSwal from "../../components/buttons/EditSwal";
import { useTranslation } from "react-i18next";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errMsg, setErrMsg] = useState(false);
  const { t } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setErrMsg(true);
    } else {
      try {
        // await publicAxios.put('users/user/password', { password, new_password: newPassword })
        showEditSwal("users/user/password", null, null, {
          password,
          new_password: newPassword,
        });
      } finally {
        setErrMsg(false);
      }
    }
  };
  return (
    <div className="relative w-full mt-[23px]  border-border border border-solid   px-[10px] md:px-12 py-4  rounded-xl text-[12px] shadow-md ">
      <h1 className="text-center  text-[25px] md:text-[35px]">{t("main.forms.changePassword")}</h1>
      <form
        onSubmit={handleSubmit}
        action="#"
        className="flex font-proppins flex-col items-center md:gap-[20px] gap-[15px]"
      >
        <div className="flex flex-col items-start justify-start w-full">
          <label
            htmlFor="oldPassword"
            className="cursor-pointer   md:text-black text-[13px] md:text-[16px] "
          >
            {t(`main.forms.labels.oldPassword`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
            <input
              id="oldPassword"
              type={showPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
              placeholder={t(`main.forms.inputs.oldPassword`)}
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
            htmlFor="newPassword"
            className="cursor-pointer   md:text-black text-[13px] md:text-[16px] "
          >
            {t(`main.forms.labels.newPassword`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
            <input
              id="newPassword"
              type={showNewPassword ? "text" : "password"}
              onChange={(e) => setNewPassword(e.target.value)}
              className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
              placeholder={t(`main.forms.inputs.newPassword`)}
            />
            <span
              className="flex w-[40px]  items-center justify-center password-toggle"
              onClick={() => setShowNewPassword(!showNewPassword)}
            >
              {showNewPassword ? (
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
            className="cursor-pointer   md:text-black text-[13px] md:text-[16px] "
          >
            {t(`main.forms.labels.confirmPassword`)}
          </label>
          <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
            <input
              id="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="py-[8px]  w-full  px-[15px] ps-0 text-[13px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
              placeholder={t(`main.forms.inputs.confirmNewPassword`)}
            />
            <span
              className="flex w-[40px]  items-center justify-center password-toggle"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <i className="fas text-[14px] text-gray md:text-[18px] fa-eye-slash"></i>
              ) : (
                <i className="fas text-[14px] text-blue md:text-[18px] fa-eye "></i>
              )}
            </span>
          </div>
          <h1 className=" text-[16px] my-1  text-red">
            {errMsg ? "Пароли должны совпадать друг к другу" : ""}
          </h1>
        </div>

        <div className="flex justify-end w-full ">
          <DefaultBtn txt="main.buttons.changePassword" />
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
