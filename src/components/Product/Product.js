import React from "react";
import "./Product.css";
import { FaCartPlus } from "react-icons/fa";

const Product = (props) => {
  //console.log(props.product);
  const { name, img, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-details">
        <h4 className="product-name">{name}</h4>
        <p>
          <small>by -{seller}</small>
        </p>
        <p>
          <small>{stock} left in stock- order soon</small>
        </p>
        <p>
          <strong>${price}</strong>
        </p>
        <button
          className="add-to-cart-btn"
          onClick={() => props.handleAddProduct(props.product)}
        >
          <FaCartPlus />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
