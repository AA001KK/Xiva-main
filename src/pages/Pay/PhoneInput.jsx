import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputForm = ({func, phone, setPhone}) => {

  const handlePhoneChange = (value) => {
    setPhone(value);
  };

  const isRequired = phone.length > 5;

  return (
    <PhoneInput
      country={"uz"}
      inputclassName=" input-number "
      inputStyle={{width:"100%", border:"none ", height:"40px" }}
      preferredCountries={["uz", "ru", "us"]}
      inputProps={{
        name: "phone",
        required:true,
        pattern: ".{12,}",
        title: "Введите номер правильно",
      }}
      onChange={handlePhoneChange}
      
    />
  );
};

export default PhoneInputForm;
