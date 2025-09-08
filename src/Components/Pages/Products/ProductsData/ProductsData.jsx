import React, { useContext, useEffect, useState } from "react";
import client from "../../../Common/Client/Client";
import "./ProductsData.css";
import ProductCard from "./ProductCard";
import { AppContext } from "../../../Hooks/Context/AppContext";

const ProductsData = () => {
  const [products, setProducts] = useState([]);

    const { userContact } = useContext(AppContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await client.get("/products/get-products", {
        withCredentials: true,
      });
      if (response.status === 200) {
        setProducts(response.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleWhatsAppOrder = (productName) => {
    const message = `Hi! I liked your product "${productName}". I would like to know more about it and place an order.`;
    const whatsappUrl = `https://wa.me/+91${userContact[0]?.phoneIndia}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="container con">
      <div className="products-container">
        <div className="products-header">
          <h2>Our Premium Collection</h2>
          <p>
            Handcrafted with love using time-honored recipes and the finest
            natural ingredients
          </p>
        </div>

        <div className="container con products-single-grid">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onWhatsAppOrder={() => handleWhatsAppOrder(product.name)}
            />
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default ProductsData;
