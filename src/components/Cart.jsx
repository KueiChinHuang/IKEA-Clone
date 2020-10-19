import React from "react";
import { useStateValue } from "../StateProvider";
import "./Cart.css";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart-container">
        <h1 className="cart-title">Shopping cart</h1>
        <button className="btn-checkout">Continue to checkout</button>

        <div className="cart-product-list">
          <CartProduct />
        </div>

        <div className="cart-summary">
          <h4>Order summary</h4>
          <span>Subtotal ({cart.length} items):</span>
          <Subtotal />
        </div>
        <button className="btn-checkout">Continue to checkout</button>

        <div className="cart-footer">
          <p>365 days to change your mind</p>
          <p>Secure shopping with SSL data encryption</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
