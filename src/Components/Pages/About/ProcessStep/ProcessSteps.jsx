import React from "react";
import "./ProcessSteps.css";
import packing from "../../../../assets/Images/packing.svg";
import cooking from "../../../../assets/Images/cooking.svg";
import delivery from "../../../../assets/Images/delivery.svg";
import preparation from "../../../../assets/Images/preparation.svg";
import quality from "../../../../assets/Images/preparation.svg";
import group from "../../../../assets/Images/Group.svg";
import vectorUp from "../../../../assets/Images/vector.png";
import vectorDown from "../../../../assets/Images/vectorDown.png";
import natural from "../../../../assets/Images/natural.jpg";
import moringa from "../../../../assets/Images/moringa.png";

const ProcessSteps = () => {
  return (
    <section className="container con process-wrapper">
      <div className="processs">
        <div className="natural-images">
          <img src={moringa} alt="natural" />
        </div>
        <div className="process-header">
          <h2 className="main-title">Our Traditional Process</h2>
          <div className="heading-divider"></div>
          <p className="sub-text">
            Rooted in heritage, every step reflects time-honored craftsmanship.
            We preserve authentic flavors while ensuring uncompromised quality.
          </p>
        </div>
        <div className="natural-images">
          <img src={natural} alt="natural" />
        </div>
      </div>

      <div className="process-row">
        <div className="process-card">
          <div className="step-circle">
            <span>01</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={group} alt="Sourcing" />
            </div>
            <h3>Sourcing</h3>
            <p>
              Fresh ingredients sourced directly from certified organic farmers
              in Tamil Nadu. Every batch begins with the finest quality raw
              materials.
            </p>
          </div>
          <div className="up-vector">
            <img src={vectorUp} alt="Vector Up" />
          </div>
        </div>

        <div className="process-card">
          <div className="step-circle">
            <span>02</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={preparation} alt="Preparation" />
            </div>
            <h3>Preparation</h3>
            <p>
              Traditional cleaning and preparation methods ensure all
              ingredients retain their natural nutrients and flavors while
              removing impurities.
            </p>
          </div>
          <div className="vector-down">
            <img src={vectorDown} alt="Vector Down" />
          </div>
        </div>

        <div className="process-card">
          <div className="step-circle">
            <span>03</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={cooking} alt="Cooking" />
            </div>
            <h3>Cooking</h3>
            <p>
              Time-honored cooking techniques using traditional methods that
              preserve nutrients while creating the perfect taste and texture.
            </p>
          </div>
        </div>
      </div>

      <div className="process-row">
        <div className="process-card">
          <div className="step-circle">
            <span>04</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={quality} alt="Quality Check" />
            </div>
            <h3>Quality Check</h3>
            <p>
              Each batch undergoes thorough quality inspection for taste,
              texture, nutritional value, and safety before packaging.
            </p>
          </div>
          <div className="up-vector">
            <img src={vectorUp} alt="Vector Up" />
          </div>
        </div>

        <div className="process-card">
          <div className="step-circle">
            <span>05</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={packing} alt="Fresh Packaging" />
            </div>
            <h3>Fresh Packaging</h3>
            <p>
              Hygienic packaging in food-grade materials that preserve freshness
              and extend shelf life naturally without preservatives.
            </p>
          </div>
          <div className="vector-down">
            <img src={vectorDown} alt="Vector Down" />
          </div>
        </div>

        <div className="process-card">
          <div className="step-circle">
            <span>06</span>
          </div>
          <div className="step-content">
            <div className="step-icon">
              <img src={delivery} alt="Delivery" />
            </div>
            <h3>Delivery</h3>
            <p>
              Quick delivery across Tamil Nadu ensures you receive the freshest
              products at your doorstep within days of preparation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
