import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./HomeTestimonial.css";
import client from "../../../Common/Client/Client";




const NextArrow = ({ onClick }) => (
  <div className="carousel-arrow arrow-btn next" onClick={onClick}>
   <IoIosArrowForward />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div  className="carousel-arrow arrow-btn prev" onClick={onClick}>
   <IoIosArrowBack />
  </div>
);

const HomeTestimonial = () => {
  const settings = {
   dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
      nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      },
      {
         breakpoint: 600,
        settings: { slidesToShow: 1 }
      }
    ]
  };


  const [reviews, setReviews] = useState([]);
    useEffect(() => {
      getReviews();
    }, []);


  const getReviews = async () => {
    try {
      const response = await client.get("/review/getreview", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setReviews(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className="testimonials-section ">
        <div className="container con">
            <div style={{
                marginBottom:"50px",
                textAlign:"center"
            }}>
  <h2 className="testimonial-title">Client Testimonials</h2>
  <div className="heading-divider"></div>
            </div>


 {reviews.length > 0 ? (
        <Slider {...settings} className="test">
          {reviews.map((item, index) => (
            <div className="testimonial-card"  key={index}>
              <FaQuoteLeft className="quote-icon" />
              <p className="testimonial-text">{item.review}</p>
              <div className="testimonial-footer">
                <img src={item.image} alt={item.name} className="testimonial-img" />
                <div>
                  <h4 className="testimonial-name">{item.name}</h4>
                  <span className="testimonial-role">Customer</span>
                </div>
                <div className="testimonial-stars">
                  {Array(item.rating)
                    .fill()
                    .map((_, i) => (
                      <FaStar key={i} color="#FFA500" />
                    ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p style={{ textAlign: "center" }}>Loading reviews...</p>
      )}
        </div>
    
    </div>
  );
};

export default HomeTestimonial;
