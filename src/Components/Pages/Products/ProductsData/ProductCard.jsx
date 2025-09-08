import React, { useContext } from "react";
import benefitsIcon from "../../../../assets/Images/benefits.svg";
import { AppContext } from "../../../Hooks/Context/AppContext";


const ProductCard = ({ product, onWhatsAppOrder }) => {

     const { userContact } = useContext(AppContext);
  return (
    <div className='prd'>

      <div className="product-single-card">
      <div className="product-image-container">
        <img 
          src={product.image} 
          alt={product.name}
          className="product-image"
        />
      
      </div>

      <div className="product-content">
        <div className="product-header">
          <h3 className="product-name">{product.name}</h3>
         
        </div>

        <p className="product-description">
          {product.description
          }
        </p>

          <div className="action-buttons">
          <button
            onClick={onWhatsAppOrder}
            className="btn btn-whatsapp"
          >
            <span className="btn-icon">💬</span>
            <span>Order via WhatsApp</span>
          </button>
          
          <button className="btn btn-call" onClick={() => window.location.href = `tel:+91${userContact[0]?.phoneIndia}`}>
            <span className="btn-icon">📞</span>
            <span>Call to Order</span>
          </button>
        </div>

     
       

      
      </div>
    </div>

       <div className="benefits-section">
          <h4 className="benefits-title">
           
            Key Health Benefits
          </h4>
          <div className="benefits-grid">
            {product.benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                 <img src={benefitsIcon} alt="benefit icon" />
                <span className="benefit-text">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
         
        </div>


      <div className="product-info">
          <span className="info-item">
            <span className="info-dot green"></span>
            <span>100% Natural</span>
          </span>
          <span className="info-item">
            <span className="info-dot orange"></span>
            <span>Fresh Made Daily</span>
          </span>
          <span className="info-item">
            <span className="info-dot purple"></span>
            <span>Free Delivery</span>
          </span>
        </div>
</div>
  
  );
};

export default ProductCard;