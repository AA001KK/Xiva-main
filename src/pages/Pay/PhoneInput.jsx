import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputForm = ({func}) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value);
    console.log(value);
    
  };

  return (
    <PhoneInput
      country={"uz"}
      inputclassName=" input-number "
      inputStyle={{width:"100%", border:"none ", height:"40px" }}
      preferredCountries={["uz", "ru", "us"]}
      inputProps={{
        name: "phone",
        required: true,
      }}
    
      onChange={func}
      
    />
  );
};

export default PhoneInputForm;
