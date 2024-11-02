import React from "react";

function formatDateUzLatin(dateString) {
  const months = [
    "Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
    "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day} ${month} ${year} yil, ${hours}:${minutes}`;
}

const DateDisplay = ({ dateString }) => {
  const formattedDate = formatDateUzLatin(dateString);

  return <span>{formattedDate}</span>;
};

export default DateDisplay;
