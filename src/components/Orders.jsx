import React, { useEffect, useState, forwardRef } from "react";
import { db } from "../firebase";
import { useStateValue } from "../StateProvider";
import "./Orders.css";
import Order from "./Order";
import moment from "moment";
import Order_Modal from "./Order_Modal";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [oCart, setOCart] = useState([]);
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
    setIsOpen(true);
  };

  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders-order">
        <table>
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
              <td>{order.data.cart.length}</td>
              <td>{order.id}</td>
              <td>{order.data.amount}</td>
              <td>
                <button onClick={showOrder} value={order.id}>
                  Show
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
      <Order_Modal open={isOpen} onClose={() => setIsOpen(false)}>
        {<Order cart={oCart} />}
      </Order_Modal>
    </div>
  );
}

export default Orders;
