import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "../axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getCartTotal, getQty, getQtyTotal } from "../reducer";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { db } from "../firebase";
import Order from "./Order";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const res = await axios({
        method: "post",
        url: `/payments/create?total=${getCartTotal(cart) * 100}`,
      });
      setClientSecret(res.data.clientSecret);
    };

    getClientSecret();
  }, [cart]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            cart: cart,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_CART",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
          <Order cart={cart} />
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
          <div className="checkout-payment-detail">
            <form onSubmit={handleSubmit}>
              <div className="checkout-payment-priceContainer">
                Order Total:
                <Subtotal getTotal={getCartTotal} cart={cart} />
              </div>
              <CardElement onChange={handleChange} />
              <button
                disabled={processing || disabled || succeeded}
                className="btn"
              >
                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
              </button>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
