import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarImg from "/src/assets/about/calendar/calendar.svg";

const DateInput = ({ changeHandlerDate, defaultDate }) => {
  const [selectedDate, setSelectedDate] = useState(defaultDate);

  const handleChange = (date) => {
    setSelectedDate(date);
    changeHandlerDate("date", date.toJSON());
  };

  return (
    <div className="focus:border-main outline-none relative px-[20px]   py-[10px] border border-dashed border-grayLight rounded-[10px] ps-[20px] flex items-center justify-between">
      <DatePicker
        required
        name="date"
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        id="date"
        defaultDate={defaultDate}
        placeholderText="Sanani kiriting"
        className=" outline-none  "
      />
      <label className=" cursor-pointer" htmlFor="date">
        <img src={CalendarImg} alt="" />
      </label>
    </div>
  );
};

export default DateInput;
