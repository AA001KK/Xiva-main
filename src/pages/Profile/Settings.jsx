import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import DefaultBtn from "../../components/buttons/DefaultBtn";
import UploadImages from "../../components/Images/UploadImages";
import { carCategory, genderUser } from "../../constants";
import ChangePassword from "./ChangePassword";
import { useDispatch, useSelector } from "react-redux";
import { getUser, setUser } from "../../components/redux/slice/user_slice";
import Input from "../../components/Form/Input";
import publicAxios from "../../api";

const Settings = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { user } = useSelector(getUser);
  const [userInfo, setUserInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const changeUserInfo = (e) => {
    const { name, value } = e.target;
    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const [img, setImg] = useState();
  const [imgPreview, setImgPreview] = useState(user.passport_image);
  useEffect(() => {
    const { first_name, last_name, gender, passport_image } = user;
    setUserInfo({
      first_name,
      last_name,
      gender,
      passport_image,
    });
    setImgPreview(user.passport_image);
  }, [user]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();

      formData.append("data", JSON.stringify(userInfo));
      formData.append("passport", img);
      await publicAxios.put("users/user", formData).then(({ data }) => {
        dispatch(setUser(data.user));
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    user && (
      <section className="container px-[10px] md:px-0 py-3 pb-6 md:pb-12 mx-auto mb-4 ">
        <div className="items-start font-mono text-center md:flex justify-evenly">
          <div className="relative border border-border border-solid md:w-[50%]  lg:mt-[103px] px-[10px] lg:px-12 py-4  rounded-xl text-[12px] shadow-md ">
            <h1 className="text-center   text-[25px] md:text-[35px]">
              {t("main.forms.myProfile")}
            </h1>
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
                {userInfo.first_name ? (
                  <Input
                    id={"first_name"}
                    func={changeUserInfo}
                    title={"First Name"}
                    def={userInfo.first_name}
                    value={userInfo.first_name}
                  />
                ) : (
                  <Input
                    id={"first_name"}
                    func={changeUserInfo}
                    title={"First Name"}
                  />
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label
                  htmlFor="lastName"
                  className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                >
                  {t(`main.forms.labels.lastName`)}
                </label>
                {userInfo.last_name ? (
                  <Input
                    id={"last_name"}
                    func={changeUserInfo}
                    title={"Last Name"}
                    def={userInfo.last_name}
                    value={userInfo.last_name}
                  />
                ) : (
                  <Input
                    id={"last_name"}
                    func={changeUserInfo}
                    title={"Last Name"}
                    def={userInfo.last_name}
                  />
                )}
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label
                  htmlFor="gender"
                  className="cursor-pointer   text-black text-[13px] md:text-[16px] "
                >
                  {t(`main.forms.labels.gender`)}
                </label>
                <div className="focus-within:shadow-shadowInput w-full flex mt-1 items-center rounded-[4px] bg-white border-dashed border border-main  ">
                  <select
                    required
                    name="gender"
                    id="gender"
                    onChange={changeUserInfo}
                    className={` text-[14px] md:text-[16px]   ps-[15px] w-full outline-none  rounded-[10px] py-[10px] `}
                  >
                    <option
                      selected={!user.gender}
                      value={""}
                      defaultValue={true}
                      className="h-[30px]"
                    >
                      {t(`main.forms.labels.select`)}
                    </option>
                    {genderUser.map((item, idx) => (
                      <option
                        key={idx}
                        selected={user.gender == item.title}
                        value={item.title}
                        className="h-[30px]"
                      >
                        {t("genders." + item.title)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <UploadImages
                setImgPreview={setImgPreview}
                imgPreview={imgPreview}
                setImg={setImg}
                txt={"main.forms.labels.imgUpload"}
                classList={"h-[250px] w-[300px]"}
              />
              <div className="flex justify-end w-full ">
                <DefaultBtn
                  txt="main.buttons.change"
                  loading={loading}
                  more={{ type: "submit" }}
                />
              </div>
            </form>
          </div>
          <div className="md:w-[30%]">
            <ChangePassword />
          </div>
        </div>
      </section>
    )
  );
};

export default Settings;
