import React from "react";
import "./Inspiration.css";
import ReactTooltip from "react-tooltip";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";

function Inspiration({ inspiration_data }) {
  let itemsHTML = [];

  if (inspiration_data.items) {
    for (let item of inspiration_data.items) {
      itemsHTML.push(
        <Link
          to={`/product/${item.pid}`}
          className="inspiration-image__area"
          style={{ top: item.position_top, left: item.position_left }}
        >
          <ReactTooltip
            id={item.title}
            className="tooltip"
            place="right"
            effect="solid"
            arrowColor="transparent"
            clickable="true"
          >
            <div className="tooltip-container">
              <h4 className="tooltip-title">{item.title}</h4>
              <span className="tooltip-description">{item.description}</span>
              <div className="tooltip-arrow">
                <ArrowForwardIosIcon fontSize="small" />
              </div>
              <span className="tooltip-price">{item.price}</span>
            </div>
          </ReactTooltip>
          <div
            className="inspiration-image__dot"
            data-tip
            data-for={item.title}
          ></div>
        </Link>
      );
    }
  }

  return (
    <div className="inspiration">
      <div className="inspiration-container">
        <div className="inspiration-image">
          <img
            className="inspiration-image__img"
            src={inspiration_data.image}
            alt={inspiration_data.inspirationId}
          />
          {itemsHTML}
        </div>
      </div>
    </div>
  );
}

export default Inspiration;
