import React from "react";
import { getCartTotal, getQtyTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router-dom";

import "./Cart.css";
import CartProduct from "./CartProduct";
import Subtotal from "./Subtotal";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

function Cart() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  const checkoutBtn = (
    <button className="btn" onClick={(e) => history.push("/checkout")}>
      Continue to checkout
    </button>
  );

  return (
    <div className="cart">
      <div className="cart-container">
        {!cart.length > 0 ? (
          <h1 className="cart-title">Your bag is empty</h1>
        ) : (
          <>
            <h1 className="cart-title">Shopping cart</h1>
            {checkoutBtn}
            <div className="cart-product-list">
              {cart.map((item) => (
                <CartProduct
                  pid={item.pid}
                  title={item.title}
                  description={item.description}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                  key={item.pid}
                />
              ))}
            </div>

            <div className="cart-summary">
              <h4 className="cart-summary-title">Order summary</h4>
              <span className="cart-summary-subtotal-title">
                Subtotal ({getQtyTotal(cart)} items):
              </span>
              <div className="cart-summary-subtotal">
                <Subtotal getTotal={getCartTotal} cart={cart} />
              </div>
            </div>
            {checkoutBtn}
          </>
        )}
        <div className="cart-footer">
          <div>
            <FavoriteBorderOutlinedIcon fontSize="small" />
            <span>365 days to change your mind</span>
          </div>
          <div>
            <LockOutlinedIcon fontSize="small" />
            <span>Secure shopping with SSL data encryption</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
