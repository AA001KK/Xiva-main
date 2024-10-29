import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ListItem = ({ text }) => {
  const { t, i18n } = useTranslation();

  return (
    <li className="py-[8PX] border-t border-blueLight text-main  text-[17px] w-full px-[25px] font-proppins  ">
      <Link>{t(text)}</Link>
    </li>
  );
};

export default ListItem;
