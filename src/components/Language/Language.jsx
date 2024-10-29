import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { langs } from "../../constants";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
const Language = () => {
  const { t, i18n } = useTranslation();
  const lang = localStorage.getItem("i18nextLng");

  const [activeLang, setActiveLang] = useState(lang || "");

  const changeLanguage = (lang) => {
    // location.reload();
    i18n.changeLanguage(lang);
    setActiveLang(lang);

  };

  return (
    <Menu>
      <MenuButton>
        <div className="flex gap-2 px-4 py-2 bg-white rounded-full cursor-pointer text-blue">
          <img
            src={`/Main/langs/${activeLang}.png`}
            className=" w-[20px] rounded-[50%] object-cover h-[20px]"
            alt=""
          />
          <button
            onClick={() => changeLanguage(`${activeLang}`)}
            className="uppercase "
          >
            {activeLang}
          </button>
        </div>
      </MenuButton>
      <MenuItems
        anchor="bottom"
        transition
        className="transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:-translate-y-2 data-[closed]:opacity-0 z-20 flex flex-col gap-2 px-4 py-2 mt-2 font-normal bg-white rounded shadow-lg text-blue"
      >
        {langs.map((lang, idx) => {
          const item = lang;
          if (item !== activeLang) {
            return (
              <MenuItem key={idx}>
                <div
                  onClick={() => {
                    changeLanguage(item);
                  }}
                  className="flex gap-2 cursor-pointer"
                >
                  <img
                    src={`/Main/langs/${item}.png`}
                    className=" w-[20px] rounded-[50%] object-cover h-[20px]"
                    alt=""
                  />
                  <button className="uppercase ">{item}</button>
                </div>
              </MenuItem>
            );
          }
        })}
      </MenuItems>
    </Menu>
  );
};

export default Language;