import React, { useEffect, useState } from "react";
import PageDesign from "../components/PageDesign";
import TitlePage from "../components/TitlePage";
import OutlineBtn from "../../../components/buttons/OutlineBtn";
import UniversalBtn from "../../../components/buttons/UniversalBtn";
import {
  Link,
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import addMessageSwal from "../../../components/buttons/messages/AddMessage";

const Message = () => {
  const { state } = useLocation();
  const [object, setObject] = useState({});
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

  const navigate = useNavigate();
  console.log(state);

  const handleAccept = (e) => {
    e.preventDefault();
    addMessageSwal(
      `orders/order/${state?.id}/accept`,
      "/admin/home",
      navigate,
      object
    );
  };

  // useEffect(() => {
  //   setObject(
  //     (prev) =>
  //       (prev = {
  //         email: state?.email,
  //       })
  //   );
  // }, []);

  return (
    <div className=" ">
      <PageDesign>
        <TitlePage title={"Mijozni elektron pochtasiga xabar yuborish"} />
        <div className="flex pb-[50px] justify-center">
          <form
            onSubmit={(e) => handleAccept(e)}
            className="w-[600px] mx-auto space-y-4"
          >
            <label className="flex flex-col gap-y-2">
              <span>Email</span>
              <input
                value={state.email}
                id="email"
                name="email"
                onChange={changeHandlerSelf}
                className="py-[8px] px-[15px] text-[16px] border border-main border-dashed  font-mono outline-none font-normal rounded-[6px]"
              />
            </label>

            <label className="flex flex-col gap-y-2">
              <span>Xabar Yozish</span>
              <textarea
                id="message"
                name="message"
                onChange={changeHandlerSelf}
                required
                className="py-[8px] h-[200px] px-[15px] text-[16px] border border-main border-dashed  font-mono outline-none font-normal rounded-[6px]"
              />
            </label>
            <div className="flex justify-end gap-4">
              <Link to={"/admin/home"}>
                <OutlineBtn text={"Yuborish"} />
              </Link>
              <div className="mt-2">
                <UniversalBtn
                  click={"submit "}
                  text={"Yuborish"}
                  bg={"bg-green"}
                />
              </div>
            </div>
          </form>
        </div>
      </PageDesign>
    </div>
  );
};

export default Message;
