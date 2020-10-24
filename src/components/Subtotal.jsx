import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";

function Subtotal({ getTotal, cart, pid }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => <strong>{value}</strong>}
        decimalScale={2}
        fixedDecimalScale={true}
        value={getTotal(cart, pid)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Subtotal;
