import React from "react";
import "./Product.css";
import productData from "../productData";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";

function Product({ match }) {
  const pid = match.params.id;
  const product = productData.find((p) => p.pid == pid);
  console.log(product);

  let ratingHTML = [];
  let r = product.rating;
  while (r > 0) {
    ratingHTML.push(
      r >= 1 ? (
        <StarIcon className="rating-star" fontSize="small" key={r} />
      ) : (
        <StarHalfIcon className="rating-star" fontSize="small" key={0} />
      )
    );
    r--;
  }

  return (
    <div className="page">
      <div className="product-container">
        <img
          className="product-image"
          src={product.image}
          alt={product.image}
        />
        <div className="product-details">
          <h3 className="product-title">{product.title}</h3>
          <span className="product-price">${product.price}</span>
          <div className="product-description">{product.description}</div>
          <div className="product-rating">{ratingHTML}</div>
          <button className="btn-add-to-cart">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
