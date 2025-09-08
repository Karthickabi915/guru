import React, { useContext, useState } from "react";
import "./ContactRef.css";
import { FaMap } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { IoTimeSharp, IoPaperPlaneOutline } from "react-icons/io5";
import { toast } from "react-hot-toast";
import step1 from "../../../../assets/Images/step1.webp";
import step2 from "../../../../assets/Images/cho.jpg";
import packing from "../../../../assets/Images/packing.jpg";
import powder from "../../../../assets/Images/powder.jpg";
import { motion } from "framer-motion";
import { AppContext } from "../../../Hooks/Context/AppContext";
import client from "../../../Common/Client/Client";

const ContactRef = () => {
  const { userContact } = useContext(AppContext);

 
  const [loading, setLoading] = useState(false);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
    phoneNumber: "",
  });

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

    if (fieldName === "phoneNumber") {
      // Remove non-numeric characters for validation
      const numericValue = fieldValue.replace(/[^0-9]/g, "");

      if (!/^\d+$/.test(fieldValue)) {
        message = "PhoneNUmber must contain only numbers";
      } else if (numericValue.length < 10) {
        message = "Phone number needs 10 characters";
      } else if (numericValue.length > 10) {
        message = "Phone number is too long";
      } else {
        const prefix = parseInt(numericValue.slice(0, 2), 10);
        if (!(prefix >= 63 && prefix <= 99)) {
          message = "Invalid Phone Number";
        } else {
          message = "";
        }
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
    } else if (contact.phoneNumber === "") {
      toast.error("phoneNumber is Reqiured");
    } else if (contact.email === "") {
      toast.error("Email is Reqiured");
    } else if (contact.message === "") {
      toast.error("Message is Reqiured");
    } else if (error.email !== "") {
      toast.error(error.email);
    } else if (error.message !== "") {
      toast.error(error.message);
    } else if (error.name !== "") {
      toast.error(error.name);
    } else if (error.phoneNumber !== "") {
      toast.error(error.phoneNumber);
    } else {
      sendData();
    }
  };

  const sendData = async () => {
    setLoading(true);
    try {
      const response = await client.post(
        "/usercontact/add-user-contact",
        contact
      );
      if (response.status === 200) {
        toast.success("Your Message has been sent");
        setLoading(false);
        setContact((pre) => ({
          ...pre,
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        }));
        setError((pre) => ({
          ...pre,
          name: "",
          email: "",
          phoneNumber: "",
          message: "",
        }));
      }
    } catch (err) {
      setLoading(false);
    }
  };

 

  return (
    <section className="main-contact-ref " style={{ overflow: "hidden" }}>
      <div className="contact-area py-2">
        <div className="container con">
          <div className="contact-content">
            <div className="row">
              <motion.div
                className="col-lg-3 col-md-6 col-12"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <span>
                      <FaMap />
                    </span>
                  </div>
                  <div className="contact-info-content">
                    <h5>Office Address</h5>
                    <p>{userContact[0]?.address}</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-3 col-md-6 col-12"
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <span>
                      <BiSolidPhoneCall />
                    </span>
                  </div>
                  <div className="contact-info-content">
                    <h5>Call Us</h5>
  <p>
  <a 
    href={`tel:${userContact[0]?.phoneIndia}`} 
    style={{ textDecoration: "none", color: "inherit" }}
  >
    {userContact[0]?.phoneIndia}
  </a>
</p>
                
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-3 col-md-6 col-12"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <span>
                      <MdEmail />
                    </span>
                  </div>
                  <div className="contact-info-content">
                    <h5>Email Us</h5>
                   <p style={{
                    cursor:"pointer"
                   }}>
  <a 
    href={`mailto:${userContact[0]?.email}`} 
    style={{ textDecoration: "none", color: "inherit" }}
  >
    {userContact[0]?.email}
  </a>
</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="col-lg-3 col-md-6 col-12"
                initial={{ x: 200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <div className="contact-info">
                  <div className="contact-info-icon">
                    <span>
                      <IoTimeSharp />
                    </span>
                  </div>
                  <div className="contact-info-content">
                    <h5>Open Time</h5>
                    <p> Open 24 Hours</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

      
          <div className="contact-wrapper my-5">
            <div className="row cs">
              <motion.div
                className="col-lg-6 align-self-center"
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <motion.div
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    style={{
                                      overflow: "hidden",
                                    }} className="contact-img">
                  <div className="contact-first">
                     <img
                    src={step1}
                    alt="contact-img"
                    width="100%"
                  />

                  </div>
                  <div className="contact-second">
                      <img
                    src={powder}
                    alt="contact-img"
                    width="100%"
                  />
                    <img
                    src={step2}
                    alt="contact-img"
                    className="ii"
                    width="100%"
                  />
                  </div>
                 <div className="contact-third">
                  <img
                    src={packing}
                    alt="contact-img"
                    width="100%"
                  />
                 </div>
                </motion.div>
              </motion.div>
              <div className="col-lg-6 align-self-center">
                <div className="contact-form">
                  <div className="contact-form-header">
                    <motion.h2
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      Get In Touch
                    </motion.h2>
                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </motion.p>
                  </div>

                  <div className="row">
                    <motion.div
                                        initial={{ x: -200, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        style={{
                                          overflow: "hidden",
                                        }} className="col-md-6">
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
                    {error.name && (
                      <p className="error-message">{error.name}</p>
                    )}
                      </div>
                    </motion.div>
                    <motion.div
                                        initial={{ x: -200, opacity: 0 }}
                                        whileInView={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.5 }}
                                        style={{
                                          overflow: "hidden",
                                        }} className="col-md-6">
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
                    </motion.div>
                  </div>
              <motion.div
                                  initial={{ x: -200, opacity: 0 }}
                                  whileInView={{ x: 0, opacity: 1 }}
                                  transition={{ duration: 0.6, delay: 0.5 }}
                                  style={{
                                    overflow: "hidden",
                                  }} className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone Number"
                        value={contact.phoneNumber}
                        name="phoneNumber"
                        onBlur={hanldeBlur}
                        onChange={hanldeChange}
                        maxLength={10}
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
                          const allowedCharPattern = /^[0-9]$/;

                          // Check if the pressed key is not allowed
                          if (
                            !allowedKeys.includes(e.key) &&
                            !allowedCharPattern.test(e.key)
                          ) {
                            e.preventDefault(); // Prevent the default action of the disallowed key
                          }
                        }}
                      />
                 
                    {error.phoneNumber && (
                      <p className="error-message">{error.phoneNumber}</p>
                    )}
                       </motion.div>
                <motion.div
                                    initial={{ x: -200, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.5 }}
                                    style={{
                                      overflow: "hidden",
                                    }} className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        rows="5"
                        name="message"
                        value={contact.message}
                        onBlur={hanldeBlur}
                        onChange={hanldeChange}
                        maxLength={100}
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
                       </motion.div>

                  <motion.button
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
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactRef;
