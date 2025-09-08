import React, { useEffect, useState } from "react";
import "./TestimonialData.css";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import client from "../../../Common/Client/Client";

const TestimonialData = () => {
  const [reviews, setReviews] = useState([]);
 
     useEffect(() => {
       getReviews();
     }, []);
 
 
   const getReviews = async () => {
     try {
       const response = await client.get("/review/getreview", {
         withCredentials: true,
       });
       if (response.status === 200) {
         setReviews(response.data);
       }
     } catch (err) {
       console.log(err);
     }
   };

  return (
    <div className=" container con testimonialss-section">
        <div style={{
            textAlign:"center"
        }}>
   <h2 className="testimonial-title">What Our Customers Say</h2>
        <div className="heading-divider"></div>
        </div>
   
      <div className="testimonial-wrapper">
        {reviews.map((t, index) => (
          <div className="testimonials-card" key={index}>
           <FaQuoteLeft className="quote-icon" />
            <p className="testimonial-text">{t.review}</p>
            <div className="testimonial-footer">
              <img src={t.image} alt={t.name} className="testimonial-img" />
              <div>
                <p className="testimonial-name">{t.name}</p>
                <p className="testimonial-role">Customer</p>
              </div>
               <div className="testimonial-stars">
                              {Array(t.rating)
                                .fill()
                                .map((_, i) => (
                                  <FaStar key={i} color="#FFA500" />
                                ))}
                            </div>
                                        </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialData;
