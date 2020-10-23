import React from "react";
import { Link } from "react-router-dom";
import { getCartTotal, getQty, getQtyTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();

  const productHTML = cart.map((item) => (
    <div className="checkout-items-container">
      <img className="checkout-item-img" src={item.image} alt={item.image} />
      <div className="checkout-item-title">
        <span>{getQty(cart, item.pid)}</span> x <span>{item.title}</span>
      </div>
      <div className="checkout-item-description">{item.description}</div>
    </div>
  ));

  return (
    <div className="checkout">
      <div className="checkout-container">
        <div className="checkout-section">
          <div className="checkout-title">
            <h2>Your order</h2>
            <Link to="/cart">
              <span className="checkout-edit">Edit</span>
            </Link>
          </div>
          {productHTML}
          <div className="checkout-subtotal">
            <span>Subtotal ({getQtyTotal(cart)} items)</span>
            <span>
              <Subtotal getTotal={getCartTotal} />
            </span>
          </div>
        </div>

        <div className="checkout-section">
          <h2 className="checkout-title">Delivery information</h2>
          <div className="checkout-address">
            <p>{user?.providerData[0].uid}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>
        </div>

        <div className="checkout-section">
          <h2 className="checkout-title">Payment</h2>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
