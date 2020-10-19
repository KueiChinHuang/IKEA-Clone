import React from "react";
import "./CartProduct.css";

function CartProduct() {
  return (
    <div className="cart-product">
      <div className="cart-product-container">
        <img src="#" alt="img" className="cart-product-image" />
        <h4 className="cart-product-title">Title</h4>
        <span className="cart-prodcut-price">Price</span>
        <span className="cart-product-description">Description</span>
        <div className="cart-product-action">
          <span className="cart-product-action-quantity">quantity</span>
          <span className="cart-product-action-remove">remove</span>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
