import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { useTranslation } from "react-i18next";
import publicAxios from "../../../api";
import PageDesign from "../components/PageDesign";
import TitlePage from "../components/TitlePage";
import { ROLES } from "../../../constants";
import Input from "../../../components/Form/Input";
import DefaultBtn from "../../../components/buttons/DefaultBtn";
import editToast from "../../../components/buttons/toasters/EditToast";

export default function HotelOwners() {
  const { t } = useTranslation();
  const { data: users } = useFetch("users");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [roleLoading, setRoleLoading] = useState(false);

  const submitSearch = async (mail) => {
    setLoading(true);
    try {
      const { data } = await publicAxios.get("users/user/email", {
        params: { email: mail },
      });
      if (data) {
        setUser(data);
        setRole(data.role);
      }
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const changeUserInfo = (e) => {
    setEmail(e.target.value);
  };

  const changeUserRole = async () => {
    setRoleLoading(true);
    const { data, error } = await editToast(
      `users/user/role`,
      null,
      null,
      {
        email: user.email,
        role,
      },
      true
    );
    if (data.ok) {
      setUser(data.user);
      
    }
    setRoleLoading(false);
    // try {
    //   const { data } = await publicAxios.put("users/user/role", {
    //     email: user.email,
    //     role,
    //   });
    
    // } catch (error) {
    // } finally {
    // }
  };

  return (
    <PageDesign>
      <TitlePage title="Admin va mehmonhonachilar" />
      <div className="flex flex-row items-start 2xl:gap-6 gap-4 py-6 px-4">
        <div className="flex  flex-col p- font-mono border border-solid rounded-md shadow-sm border-border">
          <div className="flex flex-col md:gap-[20px] gap-[15px]">
            <h1 className="text-center  2xl:text-[25px] md:text-[20px] text-[15px]">
              Foydalanuvchini qidirish
            </h1>
            <div className="flex flex-col items-start justify-start w-full">
              <label
                htmlFor="firstName"
                className="cursor-pointer text-white  md:text-black text-[13px] md:text-[16px] "
              >
                Emailni kiriting:
              </label>
              <Input
                id={"email"}
                value={email}
                func={changeUserInfo}
                title={"Email:"}
              />
            </div>

            <div className="flex justify-end w-full ">
              <DefaultBtn
                text="Qidirish"
                click={() => submitSearch(email)}
                loading={loading}
              />
            </div>
          </div>
          {user && Object.keys(user).length > 0 && (
            <div className="flex flex-col md:gap-[20px] gap-[15px]">
              <h1 className="text-center  mt-4 text-[25px]">
                Foydalanuvchi ma'lumotlari
              </h1>
              <div className="flex py-[8px] gap-2 text-white  md:text-black text-[13px] md:text-[16px]     rounded-[4px]  items-center ps-[15px] bg-white border-dashed border border-main  justify-start w-full">
                <label htmlFor="firstName" className="cursor-pointer ">
                  First Name:
                </label>
                <h1
                  className={` ${
                    user?.first_name ? " text-green" : " text-red"
                  }  flex-1 w-full `}
                >
                  {user?.first_name ? user?.first_name : "Kiritilmagan"}
                </h1>
              </div>
              <div className="flex py-[8px] gap-2 text-white  md:text-black text-[13px] md:text-[16px]     rounded-[4px]  items-center ps-[15px] bg-white border-dashed border border-main  justify-start w-full">
                <label htmlFor="firstName" className="cursor-pointer ">
                  Last Name:
                </label>
                <h1
                  className={` ${
                    user?.last_name ? " text-green" : " text-red"
                  }  flex-1 w-full `}
                >
                  {user?.last_name ? user?.last_name : "Kiritilmagan"}
                </h1>
              </div>
              <div className="flex flex-col items-start justify-start w-full">
                <label
                  htmlFor="firstName"
                  className="cursor-pointer text-white  md:text-black text-[13px] md:text-[16px] "
                >
                  Lavozimini o'zgartiring:
                </label>
                <select
                  name=""
                  className="flex outline-none py-[8px] gap-2 text-white  md:text-black text-[13px] md:text-[16px]     rounded-[4px]  items-center ps-[15px] bg-white border-dashed border border-main  justify-start w-full"
                  id=""
                  onChange={(e) => setRole(e.target.value)}
                >
                  {ROLES.map((role) => {
                    return (
                      <option
                        value={role.role}
                        selected={role.role === user.role}
                      >
                        {t(`roles.${role.role}`)}
                      </option>
                    );
                  })}
                </select>
                <div className="flex justify-end w-full mt-4 ">
                  <button
                    onClick={changeUserRole}
                    disabled={role === user.role}
                    className={`rounded-[4px] text-[14px]  lg:text-[17px] font-normal text-white flex ${
                      role === user.role
                        ? "bg-[#B0BEC5] cursor-not-allowed"
                        : "bg-[#007BFF] hover:bg-[#0056b3]"
                    } transition-colors`}
                  >
                    <div className="p-[10px]   px-[40px] border-r border-white">
                      Saqlash
                    </div>
                    <div className="p-[10px] px-[20px]">
                      <i className="fa-solid fa-save"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
          {!user && <h1>Foydalanuvchi topilmadi.</h1>}
        </div>
      
        <div className="flex-1 font-mono border border-solid rounded-md shadow-sm border-border">
          <div className="border font-mono border-dashed border-main border-b-0 md:rounded-md rounded-[5px]">
            <table className="w-full text-[12px] md:text-[16px] 2xl:text-[18px] font-mono ">
              {users.map((u, idx) => {
                return (
                  <tr
                    key={idx}
                    className="border-b border-collapse border-dashed rounded-sm border-main"
                  >
                    <td className=" border-r w-[40%] border-dashed border-main   py-[10px] px-[10px] ">
                      {u.last_name} {u.first_name}
                      {!(u.last_name && u.first_name) && (
                        <span className="text-red">Kiritilmagan</span>
                      )}
                    </td>
                    <td className=" border-r py-[10px] px-[10px]  border-dashed border-main">
                      <a
                        className="hover:text-main"
                        href={`mailto: ${u.email}`}
                      >
                        {u.email}
                      </a>
                    </td>
                    <td className=" py-[10px] px-[10px] ">
                      <p>{t(`roles.${u.role}`)}</p>
                    </td>
                    <td   onClick={() => {
                      setEmail(u.email);
                      submitSearch(u.email);
                    }} className="border-l px-2 border-dashed border-main">
                      <button
                        className="rounded-[6px] font-normal text-white bg-[#FFA755] flex "
                      >
                        <div className=" p-2 px-4 text-[14px]">
                          <i className="fa-solid fa-pencil"></i>
                        </div>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </PageDesign>
  );
}


// Register Page ni login 