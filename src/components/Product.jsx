import React, { useState } from "react";
import "./Product.css";
import productData from "../productData";
import { useStateValue } from "../StateProvider";
import StarRatings from "react-star-ratings";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Modal from "./_Modal";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function Product({ match }) {
  const pid = match.params.id;
  const product = productData.find((p) => p.pid == pid);

  // shoot data to data layer
  const [{ cart }, dispatch] = useStateValue();
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        pid: product.pid,
        title: product.title,
        description: product.description,
        price: product.price,
        image: product.image,
        rating: product.rating,
      },
    });
  };

  const handleClick = () => {
    addToCart();
    setIsOpen(true);
  };

  return (
    <div className="product-container">
      <Link to="/">
        <span className="product-goBack">
          <ArrowBackIcon /> Go Back
        </span>
      </Link>
      <img className="product-image" src={product.image} alt={product.image} />
      <div className="product-details">
        <h3 className="product-title">{product.title}</h3>
        <span className="product-price">${product.price}</span>
        <div className="product-description">{product.description}</div>
        <div className="product-rating">
          <StarRatings
            rating={product.rating}
            starRatedColor="orange"
            starDimension="20px"
            starSpacing="0"
          />
        </div>
        <button className="btn" onClick={handleClick}>
          Add to cart
        </button>
      </div>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <h2>{product.title} was added to your shopping cart!</h2>
        <Link to="/cart">
          <button className="btn">
            Continue to cart <ArrowForwardIosIcon />
          </button>
        </Link>
      </Modal>
    </div>
  );
}

export default Product;
