import React from "react";
import "./ContactMap.css";

const ContactMap = () => {
  return (
    <section className="contact-map-container">
      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.6599036799653!2d78.75195339999999!3d10.0448976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b005dcf827d3c2f%3A0xf512809c2e900536!2sGURU%20VALUE%20PRODUCTS!5e0!3m2!1sen!2sin!4v1755866498774!5m2!1sen!2sin" 
          width="600"
          height="450"
          style={{ border: "none" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
