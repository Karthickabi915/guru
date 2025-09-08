import React from "react";
import { motion } from "framer-motion";
import { FaLeaf, FaBoxOpen, FaRecycle } from "react-icons/fa";
import { GiThreeLeaves } from "react-icons/gi";
import upImage from "../../../../assets/Images/dark-cho-up.png";
import downImage from "../../../../assets/Images/dark-cho-down.png";
import about from "../../../../assets/Images/packages-images.png";
import "./AboutUs.css";

const AboutUs = () => {
  const features = [
    {
      icon: <GiThreeLeaves />,
      title: "Natural Organic Product",
      desc: "Made from fresh, chemical-free ingredients for your health.",
    },
    {
      icon: <FaBoxOpen />,
      title: "Packaging Design",
      desc: "Crafted packaging that preserves freshness and eco-values.",
    },
    {
      icon: <FaRecycle />,
      title: "Eco-Friendly",
      desc: "Sustainable materials to protect our environment’s future.",
    },
  ];

  return (
    <div className="about-us-wrapper">
      <div className="up-image">
        <img src={downImage} alt="up divider" />
      </div>

      <div className="content-about">
        <div className="container con">
          <div className="about-us">
            <motion.div
              className="about-us-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h2>
                Our patisserie produces <br />
                <span
                  style={{
                    color: "#ede74d",
                    marginRight: "10px",
                  }}
                >
                  unique sweets
                </span>
                for lovers <br />
                of yummy{" "}
              </h2>
              <p>
                Guru Uruthi specializes in creating premium quality snacks with
                a healthy twist. Our flagship products,{" "}
                <strong>Moringa Mittai</strong> and{" "}
                <strong>Karuppu Kavuni Mittai</strong>, are made from natural
                ingredients to deliver authentic taste while promoting wellness.
              </p>
              <button className="button">Contact us</button>
            </motion.div>

            <motion.div
              className="about-us-images"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img src={about} alt="about" />
            </motion.div>
            <motion.div
              className="about-us-features"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {features.map((f, i) => (
                <motion.div
                  className="feature-box"
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="feature-icon">{f.icon}</span>
                  <div>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="down-images">
        <img src={upImage} alt="down divider" />
      </div>
    </div>
  );
};

export default AboutUs;
