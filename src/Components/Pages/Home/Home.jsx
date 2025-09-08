import React from "react";
import Header from "../../Common/Layout/Header/Header";
import Stats from "../About/Stats/Stats";
import AboutUs from "../About/AboutUs/AboutUs";
import ProcessSteps from "../About/ProcessStep/ProcessSteps";
import HomeProducts from "./HomeProducts/HomeProducts";
import HomeCarsoual from "./HomeCarsoual/HomeCarsoual";
import Footer from "../../Common/Layout/Footer/Footer";
import WhyChooseUs from "../About/WhyChooseUs/WhyChooseUs";
import HomeTestimonial from "./HomeTestimonial/HomeTestimonial";
import SEO from "../../SEO";

const Home = () => {
  return (
    <div>
     <SEO
        title="Home-Guru Uruthi"
        description="Welcome to our homepage. Discover amazing products and services."
        keywords="home, products, services, company"
        url="/"
     />

      <Header />
      <HomeCarsoual />
      <Stats />
      <AboutUs />
      <WhyChooseUs />
      <HomeProducts />
      <ProcessSteps />
      <HomeTestimonial/>
      <Footer />
    </div>
  );
};

export default Home;
