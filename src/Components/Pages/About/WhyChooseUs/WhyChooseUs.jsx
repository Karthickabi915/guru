import React from "react";
import natural from "../../../../assets/Images/natural.jpg";
import moringa from "../../../../assets/Images/karuppu.png";
import first from "../../../../assets/Images/first.jpg";
import second from "../../../../assets/Images/second.jpg";
import third from "../../../../assets/Images/third.jpg";
import four from "../../../../assets/Images/four.jpg";
import five from "../../../../assets/Images/five.jpg";
import six from "../../../../assets/Images/six.jpg";

import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const cards = [
    {
      image: first,
      name:"100% Natural",
      text: "No artificial colors, flavors, or preservatives. Only pure, natural ingredients sourced from trusted local farmers in Tamil Nadu.",
    },
    {
      image: second,
       name:"Traditional Methods",
      text: "Time-tested preparation techniques passed down through generations, ensuring authentic taste and maximum nutritional retention.",
    },
    {
      image: third,
       name:"Health Focused",
      text: "Every product is carefully crafted to provide maximum health benefits while maintaining the delicious traditional taste.",
    },
    {
      image: four,
       name:"Quality Tested",
      text: "Each batch undergoes rigorous quality checks for purity, freshness, and nutritional value before reaching your doorstep.",
    },
    {
      image: five,
       name:"Fresh Delivery",
      text: "Made in small batches and delivered fresh to maintain optimal taste and nutritional benefits. No long storage periods.",
    },
    {
      image: six,
       name:"Eco-Friendly",
      text: "Sustainable packaging and environmentally conscious production methods that care for both your health and the planet.",
    },
  ];

  return (
    <section className="container con process-wrapper">
      <div className="processs">
        <div className="natural-images">
          <img src={natural} alt="natural" />
        </div>
        <div className="process-header">
          <h2 className="main-title">Why Choose Guru Uruthi?</h2>
          <div className="heading-divider"></div>
          <p className="sub-text">
            Experience the perfect fusion of tradition and health with every
            bite.At Guru Uruthi, we craft sweets that nourish your body and
            delight your taste buds.
          </p>
        </div>
        <div className="natural-images">
          <img src={moringa} alt="natural" />
        </div>
      </div>

      <div className="cards-flex">
        {cards.map((card, index) => (
          <div className="card-box process-card" key={index}>
            <img src={card.image} alt="card" className="card-img" />
            <h3>{card.name}</h3>
            <p style={{
                textAlign:"center"
            }} >{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
