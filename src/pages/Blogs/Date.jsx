import React from "react";
import { useTranslation } from "react-i18next";

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const { t, i18n } = useTranslation();
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();

  return `${t("blogs.months." + month)} ${day}, ${year}`;
};

const DateComponent = ({ date }) => {
  
  return (
    <div>
      <p> {formatDate(date)}</p>
    </div>
  );
};

export default DateComponent;
