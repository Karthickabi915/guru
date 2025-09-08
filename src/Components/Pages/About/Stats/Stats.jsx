import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import natural from "../../../../assets/Images/natural.svg";
import customer from "../../../../assets/Images/customer.svg";
import year from "../../../../assets/Images/year.svg";
import packages from "../../../../assets/Images/package.svg";
import "./Stats.css";

const Stats = () => {
  const statsData = [
    { image: natural, end: 100, suffix: "%", label: "Natural Ingredients" },
    { image: customer, end: 10000, suffix: "+", label: "Happy Customers" },
    { image: year, end: 5, suffix: "+", label: "Years of Tradition" },
    { image: packages, end: "zero", suffix: "", label: "Artificial Preservatives" },
  ];

  return (
    <section style={{
      margin:"10px"
    }}>
  <div className="container con stats-container">
      {statsData.map((stat, index) => (
        <motion.div
          className="stat-box"
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
        >
          <motion.div
            className="stat-icon"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: index * 0.2 }}
          >
            <img src={stat.image} alt={stat.label} />
          </motion.div>

          <div>
            <div className="stat-number">
              <CountUp end={stat.end} duration={3} suffix={stat.suffix} />
            </div>
            <p className="stat-label">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </div>
    </section>
  
  );
};

export default Stats;
