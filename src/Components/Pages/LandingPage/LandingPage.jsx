import React from "react";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import LandingCarsoual from "./LandingCarsoual/LandingCarsoual";
import LandingChoose from "./LandingChoose/LandingChoose";
import HomeTestimonial from "../Home/HomeTestimonial/HomeTestimonial";
import WhyChooseUs from "../About/WhyChooseUs/WhyChooseUs";
import LandingProducts from "./LandingProducts/LandingProducts";
import LandingAbout from "./LandingAbout/LandingAbout";
import CustomPhoneInput from "./LandingAbout/CustomPhoneInput";
import SEO from "../../SEO";

const LandingPage = () => {
  return (
    <div>
        <SEO
        title="Bulk Orders - Guru Uruthi"
        description="Order Guru Uruthi products in bulk at wholesale prices."
        keywords="guru uruthi bulk orders, wholesale snacks, business orders"
        url="/bulk-orders"
      />
      <Header />
      <LandingCarsoual />
      <LandingAbout />
      <LandingChoose />
      <LandingProducts />
      <HomeTestimonial />
      <Footer />
    </div>
  );
};

export default LandingPage;
