import { grey } from "@material-ui/core/colors";
import { GpsFixed } from "@material-ui/icons";
import React, { useState } from "react";
import ReactDom from "react-dom";

const MODAL_STYLES = {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  background: "#FFF",
  padding: "50px",
  zIndex: 1000,
  width: "400px",
  display: "flex",
  flexDirection: "column",
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: "rgba(0, 0, 0, 0.15)",
  zIndex: 1000,
};

const BTN_STYLES = {
  position: "absolute",
  top: "30px",
  right: "40px",
  width: "20px",
  height: "20px",
  fontSize: "1.5em",
  background: "transparent",
  border: "none",
  cursor: "pointer",
};

function Order_Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <div className="order_model">
      <div
        className="order_model-overlay"
        style={OVERLAY_STYLES}
        onClick={onClose}
      />
      <div className="order_model-details" style={MODAL_STYLES}>
        <h1>Order Details</h1>
        <button onClick={onClose} style={BTN_STYLES}>
          X
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}

export default Order_Modal;
