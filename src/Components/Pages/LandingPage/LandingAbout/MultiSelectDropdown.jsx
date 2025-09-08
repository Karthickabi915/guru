import React, { useState } from "react";
import './Multi.css'
import { useEffect } from "react";
import client from "../../../Common/Client/Client";

const LandingMultiSelect = ({setSelectedServices,selectedServices}) => {

 const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await client.get("/products/get-products", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  const [isOpen, setIsOpen] = useState(false);

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="landing-container">
    

      <p className="landing-title mb-2">Select Products</p>

      <div className="landing-dropdown-wrapper">
        <button onClick={toggleDropdown} className="landing-dropdown-button">
          <span
            className={`landing-dropdown-text ${
              selectedServices.length === 0
                ? "landing-dropdown-placeholder"
                : ""
            }`}
          >
            {selectedServices.length === 0
              ? "Select Products..."
              : `${selectedServices.length} Product
              ${
                  selectedServices.length > 1 ? "s" : ""
                } selected`}
          </span>
          <svg
            className={`landing-dropdown-arrow ${isOpen ? "landing-open" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

      {isOpen && (
  <div className="landing-dropdown-menu" style={{
    zIndex:"99"
  }}>
    {products.length === 0 ? (
      <div className="landing-option-item">
        <span className="landing-option-text">Products are fetching...</span>
      </div>
    ) : (
      products.map((product) => (
        <label key={product._id} className="landing-option-item">
          <input
            type="checkbox"
            checked={selectedServices.includes(product.name)}
            onChange={() => handleCheckboxChange(product.name)}
            className="landing-checkbox"
          />
          <span className="landing-option-text">{product.name}</span>
        </label>
      ))
    )}
  </div>
)}

      </div>

    </div>
  );
};

export default LandingMultiSelect;
