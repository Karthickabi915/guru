import React from "react";
import "./PageTop.css";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const PageTop = ({ title }) => {
  return (
    <div className="page-title-area overlay-bg style-1 top-image">
      <div className="container">
        <div className="row justify-content-center">
          <motion.div
            className="col-sm-12 text-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <h3 className="title">{title}</h3>
          </motion.div>
          <motion.div
            className="col-sm-12 text-center"
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <ul className="breadcrumb">
              <li className="breadcrumb-list">
                <Link to="/" title="Home " className="a">
                  Home
                </Link>
                <span className="arrow-icons">
                  <FaArrowRight />
                </span>
              </li>
              <li className="breadcrumb-list">
                <Link to="#" className="a">
                  {title}
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PageTop;
