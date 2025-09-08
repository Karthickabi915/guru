import React from 'react'
import Slider from "react-slick";
import "./LandingChoose.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import natural from "../../../../assets/Images/naturalremove.png";
import moringa from "../../../../assets/Images/moringa.png";

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
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 1250, settings: { slidesToShow: 2 } },
    { breakpoint: 1024, settings: { slidesToShow: 1 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const LandingChoose = () => {

   const cards = [
  {
    image: "🌿",
    name: "100% Natural",
    text: "No artificial colors, flavors, or preservatives. Only pure, natural ingredients sourced from trusted local farmers in Tamil Nadu.",
  },
  {
    image: "🏺",
    name: "Traditional Methods",
    text: "Time-tested preparation techniques passed down through generations, ensuring authentic taste and maximum nutritional retention.",
  },
  {
    image: "💚",
    name: "Health Focused",
    text: "Every product is carefully crafted to provide maximum health benefits while maintaining the delicious traditional taste.",
  },
  {
    image: "✅",
    name: "Quality Tested",
    text: "Each batch undergoes rigorous quality checks for purity, freshness, and nutritional value before reaching your doorstep.",
  },
  {
    image: "🚚",
    name: "Fresh Delivery",
    text: "Made in small batches and delivered fresh to maintain optimal taste and nutritional benefits. No long storage periods.",
  },
  {
    image: "🌱",
    name: "Eco-Friendly",
    text: "Sustainable packaging and environmentally conscious production methods that care for both your health and the planet.",
  },
];
  return (
    <section className="landing-choose-us">
      <div className="container con" style={{
        marginBottom:"20px"
      }}>
          <div className="processs" style={{
            marginBottom:"40px"
          }}>
             <div className="natural-images">
               <img src={natural} alt="natural" />
             </div>
             <div className="process-header">
               <h2 className="main-title" >Why Choose Guru Uruthi?</h2>
               <div className="heading-divider"></div>
               <p className="sub-text" style={{
                color:"white"
               }}>
                 Experience the perfect blend of tradition and quality with our carefully crafted natural products.
               </p>
             </div>
             <div className="natural-images">
               <img src={moringa} alt="natural" />
             </div>
           </div>
              <Slider {...settings}>
      {cards.map((item, index) => (
  <div className="landing-choose-card" key={index} style={{
    display:"block"
  }}>
    <div className="card-icon-wrapper">
      <div className="card-icon-bg"></div>
      <span className="card-icon">{item.image}</span>
    </div>
    <div className="card-content">
      <h4 className="card-title">{item.name}</h4>
      <p className="card-description">{item.text}</p>
    </div>
    <div className="card-accent-line"></div>
  </div>
))}
      </Slider>
        </div>
        </section>
  )
}

export default LandingChoose