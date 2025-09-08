import React, { useEffect, useState, useContext } from "react";
import "./Header.css";
import logo from "../../../../assets/Images/logo.png";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import Above from "../../Above/Above";
import Icons from "../../Icons/Icons";
import { AppContext } from "../../../Hooks/Context/AppContext";
import { NavLink } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import {  FaTwitter, FaYoutube } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userContact } = useContext(AppContext);
  console.log("userContact",userContact)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Above />
      <Icons />
      <header>
        <div className="header">
          <div className="container con">
            <div className="header-top">
              <div className="social-media-icons">
                <a href="https://www.facebook.com/guruvalueproduct" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a
                  href="https://www.instagram.com/guruvalueproducts/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                  <a
        href="https://x.com/GuruValuProdct"
        target="_blank"
        rel="noreferrer"
      >
        <FaXTwitter />
      </a>

      <a
        href="https://www.youtube.com/@GURUVALUEPRODUCTS"
        target="_blank"
        rel="noreferrer"
      >
        <FaYoutube />
      </a>
              </div>

         <div className="contact-media-icons" style={{ cursor: "pointer" }}>
  <FiPhoneCall />
  <a href={`tel:${userContact[0]?.phoneIndia}`} style={{ marginLeft: "5px", textDecoration: "none", color: "inherit" }}>
    (+91) {userContact[0]?.phoneIndia}
  </a>
</div>
            </div>
          </div>

          <div className="header-links">
            <div className="nav-left">
              <nav className="navigate-links right-links">
                <ul>
                  <li>
                    <NavLink to="/" className="link-header">
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/about" className="link-header">
                      About us
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/products" className="link-header">
                      Products
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="nav-right">
              <nav className="navigate-links">
                <ul>
                  <li>
                    <NavLink to="/healty-benefits" className="link-header">
                      Health Benefits
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/testimonial" className="link-header">
                      Testimonial
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact" className="link-header">
                      Contact us
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="logo">
            <img src={logo} alt="guru-uruthi-logo" />
          </div>
        </div>
        <div className="mobile-header">
          <div
            className={`${
              isSticky
                ? "pt-header-sticky animated fadeInDown animate__faster cons"
                : "container con"
            }`}
          >
            <div
              className={`${
                isSticky ? "header-containers" : "header-container"
              }`}
            >
              <div className={`${isSticky ? "mobile-f-headers" : "mobile-f-header"}`}>
                <div className="logos">
                  <img src={logo} alt="Company Logo" />
                </div>
                <div className="mobile-icons">
                  <IoReorderThree onClick={() => setIsMenuOpen(!isMenuOpen)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`mobile-nav-panel ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-header">
          <img src={logo} alt="logo" className="mobile-logo" />
          <IoClose
            className="close-icon"
            onClick={() => setIsMenuOpen(false)}
          />
        </div>
        <ul className="mobile-nav-links">
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/" className="link-header">
              Home
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/about" className="link-header">
              About us
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/products" className="link-header">
              Products
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/healty-benefits" className="link-header">
              Health Benefits
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/testimonial" className="link-header">
              Testimonial
            </NavLink>
          </li>
          <li onClick={() => setIsMenuOpen(false)}>
            <NavLink to="/contact" className="link-header">
              Contact Us
            </NavLink>
          </li>
        </ul>
      </div>

      {isMenuOpen && (
        <div className="overlay" onClick={() => setIsMenuOpen(false)} />
      )}
    </>
  );
};

export default Header;



