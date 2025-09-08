import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../../../../assets/Images/header-image-1.png";
import ExampleCarouselImage1 from "../../../../assets/Images/header-image-2.png";
import ExampleCarouselImage2 from "../../../../assets/Images/header-image-3.png";
import { motion } from "framer-motion";
import { FaLeaf, FaSeedling, FaAppleAlt, FaSpa } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const LandingCarsoual = () => {
  return (
    <section
      className="home-main-wrapper"
      style={{
        overflow: "hidden",
      }}
    >

         <div className="home-container-carousel" style={{
            width:"100%",
            height:"40vh"
         }}>
        <Carousel fade>
          <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage}
                className="d-block w-100"
                alt="Moringa Mittai"
                style={{
            width:"100%",
            height:"40vh"
         }}
              />
              <div className="gradient-overlay"></div>
            </div>

            <Carousel.Caption>
              <motion.div style={{ display: "flex", marginBottom: "20px" }}>
                <span className="hero-carousel-highlight">
                  Wholesome Crunch
                  <span style={{ marginLeft: "10px" }}>
                    <FaLeaf />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Moringa <span style={{ color: "#ffffff" }}>Mittai</span>
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                Made with Moringa, Jaggery, and Elaichi. A healthy twist to
                traditional sweetness. 🌿
              </motion.h5>
{/* 
              <motion.button
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/products")}
                style={{ zIndex: 20 }}
              >
                <Link to="/products" className="text-light">
                  Shop Now
                </Link>
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </motion.button> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage1}
                className="d-block w-100"
                alt="Karuppu Kavuni Mittai"
                style={{
            width:"100%",
            height:"40vh"
         }}
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
                  Heritage Sweetness
                  <span style={{ marginLeft: "10px" }}>
                    <FaSeedling />
                  </span>
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-carousel-title"
              >
                Karuppu Kavuni <span style={{ color: "#ffffff" }}>Mittai</span>
              </motion.h1>

              <motion.h5
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-3"
              >
                Traditional Black Rice meets natural Jaggery. A bite full of
                taste & nutrition. 🌾
              </motion.h5>

              {/* <motion.button
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/products")}
              >
                <Link to="/products" className="text-light">
                  Order Now
                </Link>
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </motion.button> */}
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="image-container">
              <img
                src={ExampleCarouselImage2}
                className="d-block w-100"
                alt="Guru Uruthi Snacks"
                style={{
            width:"100%",
            height:"40vh"
         }}
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
{/* 
              <motion.button
                initial={{ opacity: 0, x: 200 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="btn btn-dark text-light mt-4"
                onClick={() => navigate("/about")}
                style={{ zIndex: 20 }}
              >
                <Link to="/about" className="text-light">
                  Learn More
                </Link>
                <span style={{ marginLeft: "10px" }}>
                  <FaArrowRightLong />
                </span>
              </motion.button> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  )
}

export default LandingCarsoual