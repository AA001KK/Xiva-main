import React from "react";
import { useTranslation } from "react-i18next";

const SelectComponent = ({
  value,
  name,
  changeHandlerInput,
  classNameList,
  defaultItem,
}) => {
  const { t, i18n } = useTranslation();

  return (
    <select
      required
      defaultValue={defaultItem}
      name=""
      onChange={(e) => {
        changeHandlerInput(name, e.target.value);
      }}
      className={`px-[20px] text-[18px]      w-[250px]  border-grayLight  border border-dashed     focus:border-main  outline-none  rounded-[10px] py-[10px] ${classNameList} `}
      id=""
    >
      {value.map((item, idx) => (
        <option key={idx} value={item} className="  py-2 h-[30px] ">
          {item}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;
