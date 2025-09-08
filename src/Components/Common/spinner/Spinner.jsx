import React from "react";
import "./Spinner.css";
import logo from "../../../assets/Images/logo.png";

const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner">
        <img
          src={logo}
          alt="Loading"
          className="spinner-image"
          width="100%"
          height="100%"
          loading="lazy"
        />
        <div className="spinner-border"></div>
      </div>
    </div>
  );
};

export default Spinner;
