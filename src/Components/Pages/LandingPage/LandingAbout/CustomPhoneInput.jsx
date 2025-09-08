import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./Multi.css";

const CustomPhoneInput = ({ setPhone, setCountry,phone }) => {
  const handleChange = (value, countryData) => {
    setPhone(value);
    setCountry(countryData.name);
  };


  return (
    <div className="phone-input-wrapper">
      <label className="landing-title">Phone Number</label>
      <PhoneInput
        country={"in"}
        value={phone}
        onChange={handleChange}
        inputClass="phone-input"
        buttonClass="phone-dropdown"
      />
    </div>
  );
};

export default CustomPhoneInput;
