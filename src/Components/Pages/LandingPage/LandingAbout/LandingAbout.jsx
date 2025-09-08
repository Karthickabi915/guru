import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoTimeSharp, IoPaperPlaneOutline } from "react-icons/io5";
import './Multi.css'
import MultiSelectDropdown from "./MultiSelectDropdown";
import CustomPhoneInput from "./CustomPhoneInput";
import toast from "react-hot-toast";
import client from "../../../Common/Client/Client";

const LandingAbout = () => {
  const [loading, setLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  console.log(phone, country, selectedServices);

  const hanldeBlur = (e) => {
    const { name, value } = e.target;
    const errCaptial = name.charAt(0).toUpperCase() + name.slice(1);
    if (!value) {
      setError({
        ...error,
        [name]: `${errCaptial} is required`,
      });
    }
  };

  const handleDown = (e) => {
    if (e.key === " " && e.target.selectionStart === 0) {
      e.preventDefault();
    }
  };

  const errorMessage = (fieldName, fieldValue) => {
    let message;
    if (fieldName) {
      if (fieldValue === "") {
        message = "";
      }
    }

    const alphabetRegex = /^[A-Za-z\s]+$/;

    if (fieldName === "name") {
      if (fieldValue.length < 3) {
        message = `${fieldName} is Invalid`;
      } else if (!alphabetRegex.test(fieldValue)) {
        message = "Name must only contain alphabets";
      } else {
        message = "";
      }
    }

    if (fieldName === "email") {
      const emailRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{2,}@[a-zA-Z-]+\.[a-zA-Z-]{2,}$/;
      if (!emailRegex.test(fieldValue)) {
        message = `${fieldName} is Invalid`;
      } else {
        message = "";
      }
    }

    if (fieldName === "message") {
      if (fieldValue.length < 10) {
        message = `${fieldName} is too short`;
      } else {
        message = "";
      }
    }

    return { message: message };
  };

  const hanldeChange = (e) => {
    const { name, value } = e.target;
    const err = errorMessage(name, value).message;

    const errCaptial = err.charAt(0).toUpperCase() + err.slice(1);

    setError((prevError) => ({
      ...prevError,
      [name]: errCaptial,
    }));

    setContact({ ...contact, [name]: value });
  };

  const hanldeClick = (e) => {
    e.preventDefault();
    toast.dismiss();
    if (contact.name === "") {
      toast.error("Name is Reqiured");
    } else if (contact.email === "") {
      toast.error("Email is Reqiured");
    } else if (contact.message === "") {
      toast.error("Message is Reqiured");
    } else if (phone === "") {
      toast.error("Phone Number is required");
    } else if (selectedServices.length === 0) {
      toast.error("Products is required");
    } else if (error.email !== "") {
      toast.error(error.email);
    } else if (error.message !== "") {
      toast.error(error.message);
    } else if (error.name !== "") {
      toast.error(error.name);
    } else {
      sendData();
    }
  };

  const sendData = async () => {
    setLoading(true);
    try {
      const response = await client.post("/bulk-order/add-bulk-order", {
        name: contact.name,
        email: contact.email,
        message: contact.message,
        phone,
        country,
        products: selectedServices,
      });
      if (response.status === 200) {
        toast.success("Your Message has been sent.");
        setLoading(false);
        setContact((pre) => ({
          ...pre,
          name: "",
          email: "",
          message: "",
        }));
        setError((pre) => ({
          ...pre,
          name: "",
          email: "",
          message: "",
        }));
      }
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <div
      className="container con contact-wrapper"
      style={{
        boxShadow: "none",
      }}
    >
      <div className="row">
        <div
          className="col-lg-6 align-self-center"
          initial={{ y: 200, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
              <section
        className="landing-about"
        aria-labelledby="landing-about-title"
      >
        <div className="landing-about-hero">
          <div className="landing-about-hero-content">
            <h1 id="landing-about-title" className="landing-about-title">
              Crafting Premium, Healthy Snacks
            </h1>
   <p className="landing-about-subtitle">
  At <strong>Guru Uruthi</strong>, we honor age-old wisdom while
  embracing modern wellness. Our signature <strong>Moringa Mittai</strong> 
  and <strong>Karuppu Kavuni Mittai</strong> are more than snacks—they are
  a bridge between heritage and healthy living. Crafted from clean, natural
  ingredients, they deliver authentic taste and lasting nourishment,
  perfectly suited for today’s conscious lifestyle.
</p>
<p className="landing-about-subtitle">
  Nature is at the heart of everything we make at 
  <strong> Guru Uruthi</strong>. Each batch of <strong>Moringa Mittai</strong> 
  and <strong>Karuppu Kavuni Mittai</strong> is prepared with pure, 
  wholesome ingredients that retain their natural goodness. Free from
  artificial additives, our snacks celebrate the richness of tradition
  while offering a clean, guilt-free indulgence for every generation.
</p>
<p className="landing-about-subtitle">
  At <strong>Guru Uruthi</strong>, we believe snacks should fuel both body
  and spirit. Our <strong>Moringa Mittai</strong> and 
  <strong> Karuppu Kavuni Mittai</strong> are thoughtfully crafted to 
  provide natural energy, essential nutrients, and a touch of sweetness 
  that uplifts your day. Each bite is a reminder that healthy choices can 
  be just as flavorful, satisfying, and joyful.
</p>
            <div
              className="landing-about-badges"
              role="list"
              aria-label="Brand highlights"
            >
              <span className="landing-about-badge" role="listitem">
                Natural
              </span>
              <span className="landing-about-badge" role="listitem">
                Healthy
              </span>
              <span className="landing-about-badge" role="listitem">
                Traditional
              </span>
            </div>
          </div>
          {/* <div className="landing-about-hero-art" aria-hidden="true">
            <div className="landing-about-blob blob-1"></div>
            <div className="landing-about-blob blob-2"></div>
            <div className="landing-about-ring"></div>
          </div> */}
        </div>
      </section>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="contact-form">
            <div className="contact-form-header">
              <h2
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                Get In Touch
              </h2>
              <p
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
            </div>

            <div className="row">
              <div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  overflow: "hidden",
                }}
                className="col-md-6"
              >
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    value={contact.name}
                    maxLength={20}
                    onBlur={hanldeBlur}
                    onChange={hanldeChange}
                    onKeyDown={(e) => {
                      handleDown(e);
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Delete",
                        "Tab",
                        " ",
                      ];
                      const allowedCharPattern = /^[A-Za-z._-]$/;

                      // Check if the pressed key is not allowed
                      if (
                        !allowedKeys.includes(e.key) &&
                        !allowedCharPattern.test(e.key)
                      ) {
                        e.preventDefault(); // Prevent the default action of the disallowed key
                      }
                    }}
                  />
                  {error.name && <p className="error-message">{error.name}</p>}
                </div>
              </div>
              <div
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                style={{
                  overflow: "hidden",
                }}
                className="col-md-6"
              >
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    value={contact.email}
                    maxLength={30}
                    onBlur={hanldeBlur}
                    onChange={hanldeChange}
                    onKeyDown={(e) => {
                      const allowedKeys = [
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Delete",
                        "Tab",
                      ];
                      const allowedCharPattern = /^[0-9a-z._@-]$/;

                      // Check if the pressed key is not allowed
                      if (
                        !allowedKeys.includes(e.key) &&
                        !allowedCharPattern.test(e.key)
                      ) {
                        e.preventDefault(); // Prevent the default action of the disallowed key
                      }
                    }}
                  />

                  {error.email && (
                    <p className="error-message">{error.email}</p>
                  )}
                </div>
              </div>
            </div>

            <div className="flex">
              <div>
                <CustomPhoneInput
                  setPhone={setPhone}
                  setCountry={setCountry}
                  phone={phone}
                />
              </div>
              <div>
                <MultiSelectDropdown
                  setSelectedServices={setSelectedServices}
                  selectedServices={selectedServices}
                />
              </div>
            </div>

            <div
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              style={{
                overflow: "hidden",
              }}
              className="form-group"
            >
              <textarea
                className="form-control"
                placeholder="Message"
                rows="5"
                name="message"
                value={contact.message}
                onBlur={hanldeBlur}
                onChange={hanldeChange}
                maxLength={250}
                onKeyDown={(e) => {
                  handleDown(e);
                  const allowedKeys = [
                    "Backspace",
                    "ArrowLeft",
                    "ArrowRight",
                    "Delete",
                    "Tab",
                    " ",
                  ];
                  const allowedCharPattern = /^[A-Za-z._-]$/;

                  // Check if the pressed key is not allowed
                  if (
                    !allowedKeys.includes(e.key) &&
                    !allowedCharPattern.test(e.key)
                  ) {
                    e.preventDefault(); // Prevent the default action of the disallowed key
                  }
                }}
              />

              {error.message && (
                <p className="error-message">{error.message}</p>
              )}
            </div>

            <button
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              type="submit"
              className="contact-submit-btn"
              disabled={loading}
              onClick={hanldeClick}
            >
              {loading ? "Sending..." : "Send Message"}
              <IoPaperPlaneOutline className="ms-2 fs-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingAbout;
