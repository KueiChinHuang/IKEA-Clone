import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function Product({ match }) {
  console.log(match.params.id);

  return (
    <div className="page">
      <div className="product-container">
        <div className="product-image">
          <img src="#" alt="image.jpg" />
        </div>
        <div className="product-details">
          <h3 className="product-title">Title</h3>
          <span className="product-price">$4.99</span>
          <div className="product-description">Description</div>
          <div className="product-rating">
            <StarIcon className="rating-star" fontSize="small" />
          </div>
          <button className="btn-add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
