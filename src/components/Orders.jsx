import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Orders.css";
import Order from "./Order";
import moment from "moment";
import Modal from "./_Modal";
import Subtotal from "./Subtotal";
import { getCartTotal, getQtyTotal } from "../reducer";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [oCart, setOCart] = useState([]);
  const [oTime, setOTime] = useState("");
  const [{ cart, user }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user, oCart, isOpen]);

  const showOrder = async (e) => {
    let oid = e.target.value;
    let c = await orders.find((e) => e.id === oid).data.cart;
    setOCart(c);
    let t = await orders.find((e) => e.id === oid).data.created;
    setOTime(t);

    setIsOpen(true);
  };

  return (
    <div className="orders">
      <h1>My Orders</h1>
      <div className="orders-order">
        <table className="orders-table">
          <tr>
            <th>Date</th>
            <th>Items</th>
            <th>Order ID</th>
            <th>Total</th>
            <th></th>
          </tr>
          {orders?.map((order) => (
            <tr>
              <td>
                {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
              </td>
              <td>{getQtyTotal(order.data.cart)}</td>
              <td>{order.id}</td>
              <td>
                <Subtotal getTotal={getCartTotal} cart={order.data.cart} />
              </td>
              <td>
                <button onClick={showOrder} value={order.id} className="btn">
                  Show
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h1>Order Details</h1>
        <span className="orders-details-time">
          {moment.unix(oTime).format("MMMM Do YYYY, h:mma")}
        </span>
        {<Order cart={oCart} />}
      </Modal>
    </div>
  );
}

export default Orders;
