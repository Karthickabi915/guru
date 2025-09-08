import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import natural from "../../../../assets/Images/naturalremove.png";
import moringa from "../../../../assets/Images/moringa.png";
import client from "../../../Common/Client/Client";
import { useState } from "react";
import { useEffect } from "react";
import "./LandingProducts.css"

const NextArrow = ({ onClick }) => (
  <div className="carousel-arrow arrow-btn next" onClick={onClick}>
    <IoIosArrowForward />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="carousel-arrow  arrow-btn prev" onClick={onClick}>
    <IoIosArrowBack />
  </div>
);

var settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const LandingProducts = () => {
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
  return (
    <section>
      <div
        className="container con"
       
      >
        <div
          className="processs"
          
        >
         
          <div className="process-header">
            <h2 className="main-title">Oru Products</h2>
            <div className="heading-divider"></div>
            <p
              className="sub-text"
              
            >
              Handcrafted with love using time-honored recipes and the finest
            natural ingredients.
            </p>
          </div>
         
        </div>
        <Slider {...settings} className="add">
          {products.map((item, index) => (
            <div
              className="products-landings"
              key={index}
              style={{
                display: "block",
              }}
            >
              <div className="product-image-container" style={{
                height:"250px"
              }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="product-image"
                />
              </div>
              <div className="product-header" style={{
                flexDirection:"column",
                gap:"10px"
              }}>
                <h3 className="product-name">{item.name}</h3>

                <p className="product-description">
                  {item.description.slice(0,300)}...
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default LandingProducts;
