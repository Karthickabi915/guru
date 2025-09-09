import React from "react";
import Carousel from "react-bootstrap/Carousel"
import ExampleCarouselImage from "../../../../assets/Images/header-image-1.png";
import ExampleCarouselImage1 from "../../../../assets/Images/header-image-2.png";
import ExampleCarouselImage2 from "../../../../assets/Images/header-image-3.png";
import moringa from "../../../../assets/Images/moringa.png";
import powder from "../../../../assets/Images/powder.jpg";
import step1 from "../../../../assets/Images/step1.webp";
import step2 from "../../../../assets/Images/cho.jpg";
import packing from "../../../../assets/Images/packing.jpg";
import "./HomeCarsoual.css";
import { Link, useNavigate } from "react-router-dom";
import  {FaArrowRightLong}  from "react-icons/fa6";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaSpa } from "react-icons/fa";

const HomeCarsoual = () => {
  const navigate = useNavigate();
  return (
    <section
      className="home-main-wrapper"
      style={{
        overflow: "hidden",
      }}
    >
      <motion.div className="carousel-left">
        <motion.h3
          className="category-title"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Top Categories
        </motion.h3>
        <ul className="category-list">
          <motion.li
            className="category-item"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="icon">
              <img src={step1} alt="" />
            </div>
            <div className="text">
              <h4>Sourcing Ingredients</h4>
              <p>Fresh, Natural & Carefully Selected</p>
            </div>
          </motion.li>

          <motion.li
            className="category-item"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="icon">
              <img src={powder} alt="" />
            </div>
            <div className="text">
              <h4>Traditional Preparation</h4>
              <p>Roasted & Blended the Authentic Way</p>
            </div>
          </motion.li>
          <motion.li
            className="category-item"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="icon">
              <img src={step2} alt="" />
            </div>
            <div className="text">
              <h4>Handmade Mittai</h4>
              <p>Crafted with Care, Packed with Nutrition</p>
            </div>
          </motion.li>
          <motion.li
            className="category-item"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="icon">
              <img src={packing} alt="" />
            </div>
            <div className="text">
              <h4>Quality & Packing</h4>
              <p>Sealed Freshness, Delivered with Love</p>
            </div>
          </motion.li>
        </ul>

        <motion.div
          className="moringa"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img src={moringa} alt="" />
        </motion.div>
      </motion.div>

      <div className="home-container-carousel">
        <Carousel fade>
          <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage}
                className="d-block w-100"
                alt="Moringa Mittai"
              />
              <div className="gradient-overlay"></div>
            </div>

            <Carousel.Caption>
            <div
                
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Wholesome Crunch
                  <span style={{ marginLeft: "10px" }}>
                    <FaLeaf />
                  </span>
                </span>
              </div>

              <h1
               
                className="hero-carousel-title"
              >
                Moringa <span style={{ color: "#ffffff" }}>Mittai</span>
              </h1>

              <h5
               
                className="mt-3"
              >
                Made with Moringa, Jaggery, and Elaichi. A healthy twist to
                traditional sweetness. 🌿
              </h5>

              <button
               
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/products")}
               
              >
               
                  Shop Now
              
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </button>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage1}
                className="d-block w-100"
                alt="Karuppu Kavuni Mittai"
              />
              <div className="gradient-overlay"></div>
            </div>
            <Carousel.Caption>
              <div
               
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Heritage Sweetness
                  <span style={{ marginLeft: "10px" }}>
                    <FaSeedling />
                  </span>
                </span>
              </div>

              <h1
               
                className="hero-carousel-title"
              >
                Karuppu Kavuni <span style={{ color: "#ffffff" }}>Mittai</span>
              </h1>

              <h5
              
                className="mt-3"
              >
                Traditional Black Rice meets natural Jaggery. A bite full of
                taste & nutrition. 🌾
              </h5>

              <button
               
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/products")}
              >
            
                  Order Now
           
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </button>
            </Carousel.Caption>
          </Carousel.Item>

          {/* <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage2}
                className="d-block w-100"
                alt="Guru Uruthi Snacks"
              />
              <div className="gradient-overlay"></div>
            </div>
            <Carousel.Caption>
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ display: "flex", marginBottom: "20px" }}
              >
                <span className="hero-carousel-highlight">
                  Authentic Taste, Natural Goodness
                  <span style={{ marginLeft: "10px" }}>
                    <FaSpa />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Guru <span style={{ color: "#ffffff" }}>Uruthi</span> Snacks
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                We bring you premium quality snacks with a healthy twist —
                blending tradition with wellness.
              </motion.h5>

              <motion.button
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/about")}
                style={{ zIndex: 20 }}
              >

                  Learn More
            
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </motion.button>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    </section>
  );
};

export default HomeCarsoual;
