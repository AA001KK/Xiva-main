import React from "react";
import { useTranslation } from "react-i18next";

const Input = ({ id,  func, title, def, read=false, value,txt, type }) => {
  const {t} = useTranslation()
  return (
    <div className="focus-within:shadow-shadowInput transition-all w-full flex mt-1 items-center rounded-[4px] ps-[15px] bg-white border-dashed border border-main  ">
      <input
        id={id}
        type={type?type:"text"}
        value={value}
        name={id}
        readOnly={read}
        onChange={func}
        className="py-[8px]  w-full  px-[15px] ps-0 text-[14px] md:text-[16px] p  font-proppins outline-none rounded-[6px]  "
        placeholder={title || t(txt)}
        defaultValue={def}
      />
    </div>
  );
};

export default Input;
