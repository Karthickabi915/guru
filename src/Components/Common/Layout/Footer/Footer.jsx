import React, { useContext, useEffect, useState } from "react";
import "./Footer.css";
import logo from "../../../../assets/Images/logo.png";
import client from "../../Client/Client";
import { AppContext } from "../../../Hooks/Context/AppContext";
import { Link, useNavigate } from "react-router-dom";


const Footer = () => {

   const [products, setProducts] = useState([]);
    const { userContact } = useContext(AppContext);
    const navigate =useNavigate()
    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const response = await client.get("/products/get-products", {
          withCredentials: true,
        });
        if (response.status === 200) {
          setProducts(response.data?.map((value)=> value.name));
        }
      } catch (err) {
        console.log(err);
      }
    };
  return (
    <footer>
      <div className="container con">
        <div className="footerTop">
          <div className="footerCard">
            <div className="aboutLogo">
              <img src={logo} alt width={100} height={100} />
            </div>
            <p>
              Guru Uruthi specializes in crafting premium quality traditional
              snacks with a healthy twist. Our flagship products — Moringa
              Mittai and Karuppu Kavuni Mittai — bring together authentic taste,
              natural ingredients, and the promise of wellness.
            </p>
            <div className="social">
              <a href="https://www.facebook.com/guruvalueproduct" target="_blank">
                <i className="bi bi-facebook" />
              </a>
           
              <a href="https://www.instagram.com/guruvalueproducts/" target="_blank">
                <i className="bi bi-instagram" />
              </a>
           <a href="https://x.com/GuruValuProdct" target="_blank" rel="noreferrer">
<i className="bi bi-twitter-x"></i>
</a>

<a href="https://www.youtube.com/@GURUVALUEPRODUCTS" target="_blank" rel="noreferrer">
  <i className="bi bi-youtube" />
</a>
            </div>
          </div>
          <div className="footerCard">
            <h3 className="footerHead">Useful Links</h3>
            <div className="linksOne">
              <Link to="/about">
                <i className="bi bi-arrow-right-short" />
                About Us
              </Link>
              <Link to="/products">
                <i className="bi bi-arrow-right-short" />
                Products
              </Link>
              <Link to="/healty-benefits">
                <i className="bi bi-arrow-right-short" />
                Health Benefits
              </Link>
              <Link to="/testimonial">
                <i className="bi bi-arrow-right-short" />
                Testimonial
              </Link>
              <Link to="/contact">
                <i className="bi bi-arrow-right-short" />
                Contact
              </Link>
                {/* <a href="/bulk-orders">
                <i className="bi bi-arrow-right-short" />
                Bulk-Order
              </a> */}
            </div>
          </div>
          <div className="footerCard">
            <h3 className="footerHead">Our Products</h3>
            <div className="linksTwo">
              {
                products.slice(0,4).map((value)=>{
                  return <>
                     <Link to="/products">
                <i className="bi bi-arrow-right-short" />
                 {value}
              </Link>
                  </>
                })
              }
           
             
            
            </div>
            <div>
<button className="nbulkorder-btn" onClick={()=>{
navigate("/bulk-orders")
}}>
   Bulk Order 🛒
</button>
            </div>
          </div>
          <div className="footerCard">
            <h3 className="footerHead">Contact Us</h3>
            <div className="linksThree">
              <h4>Address Location</h4>
              <p>
                <i className="bi bi-geo-alt-fill" />
                <a href="https://maps.app.goo.gl/tuuYwRX1WzeNFUez7" target="_blank" className="likes">{userContact[0]?.address}</a>
              </p>
              <h4>Phone Number</h4>
              <p>
                <i className="bi bi-telephone-fill" />
                <span>{userContact[0]?.phoneIndia}</span>
              </p>
              <h4>Email address</h4>
              <p>
                <i className="bi bi-envelope-fill" />
                <span>{userContact[0]?.email}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="footerBottom">
        <div className="container con">
          <div className="copyRights">
            <p>
              Copyright <i className="bi bi-c-circle" /> 2025{" "}
              <a href="/">Guru Uruthi</a>. All Rights Reserved.
            </p>
            <p>
             Designed By : <a href="https://hellowtec.com/" target="_blank" style={{
                color:"#FE1246",
                textDecoration:"underline"
              }}>Hello Technologies.</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
