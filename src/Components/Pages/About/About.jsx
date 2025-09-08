import React from "react";
import Header from "../../Common/Layout/Header/Header";
import Footer from "../../Common/Layout/Footer/Footer";
import PageTop from "../../Common/PageTop/PageTop";
import ProcessSteps from "./ProcessStep/ProcessSteps";
import AboutUs from "./AboutUs/AboutUs";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";
import "./AboutUs/AboutUs.css";
import "./ProcessStep/ProcessSteps.css";
import "./Stats/Stats.css";
import "./WhyChooseUs/WhyChooseUs.css";
import SEO from "../../SEO";

const About = () => {
  return (
    <section>
      <SEO
       title="About Us - Guru Uruthi"
        description="Learn more about Guru Uruthi and our journey."
        keywords="about guru uruthi, company info, history"
        url="/about"
      />
      <Header />
      <PageTop title={"About"} />
      <WhyChooseUs />
      <AboutUs />
      <ProcessSteps />
      <Footer />
    </section>
  );
};

export default About;
