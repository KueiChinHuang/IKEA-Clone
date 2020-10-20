import React from "react";
import { getQty } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./CartProduct.css";

function CartProduct({ pid, title, description, price, image, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      pid: pid,
    });
  };

  const addQty = () => {
    dispatch({
      type: "ADD_QTY",
      pid: pid,
    });
  };

  const minusQty = () => {
    dispatch({
      type: "MINUS_QTY",
      pid: pid,
    });
  };

  return (
    <div className="cart-product">
      <div className="cart-product-container">
        <img src={image} alt={image} className="cart-product-image" />
        <h4 className="cart-product-title">{title}</h4>
        <span className="cart-prodcut-price">{price}</span>
        <span className="cart-product-description">{description}</span>
        <div className="cart-product-action">
          <span className="cart-product-action-quantity">
            {getQty(cart, pid)}
          </span>
          <button onClick={minusQty}>-</button>
          <button onClick={addQty}>+</button>
          <button
            className="cart-product-action-remove"
            onClick={removeFromCart}
          >
            remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
