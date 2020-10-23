import React from "react";
import { getProductTotal, getQty } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./CartProduct.css";
import Subtotal from "./Subtotal";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";

function CartProduct({ pid, title, description, price, image, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      pid: pid,
    });
  };

  const qtyMinus = () => {
    dispatch({
      type: "QTY_MINUS",
      pid: pid,
    });
  };

  const qtyAdd = () => {
    dispatch({
      type: "QTY_ADD",
      pid: pid,
    });
  };

  const qtyUpdate = (qty) => {
    dispatch({
      type: "QTY_UPDATE",
      pid: pid,
      qty: qty,
    });
  };

  const handleInputChange = async (event) => {
    event.persist();

    const { name, value } = event.target;
    qtyUpdate(parseInt(value));
  };

  return (
    <div className="cart-product">
      <div className="cart-product-container">
        <img src={image} alt={image} className="cart-product-image" />
        <h4 className="cart-product-title">{title}</h4>
        <span className="cart-prodcut-price">
          <Subtotal getTotal={getProductTotal} cart={cart} pid={pid} />
        </span>
        <span className="cart-product-description">{description}</span>

        <div className="cart-product-action">
          <div className="cart-product-action-qty">
            <ArrowDropDownIcon onClick={qtyMinus} />
            <input
              name="qty"
              className="cart-product-action-qty-input"
              type="text"
              value={getQty(cart, pid)}
              onChange={handleInputChange}
              pattern="[0-9]*"
            />
            <ArrowDropUpIcon onClick={qtyAdd} />
          </div>

          <div className="cart-product-action-remove" onClick={removeFromCart}>
            Remove
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
