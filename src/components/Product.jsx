import React from "react";
import "./Product.css";
import productData from "../productData";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import { useStateValue } from "../StateProvider";
import StarRatings from "react-star-ratings";

function Product({ match }) {
  const pid = match.params.id;
  const product = productData.find((p) => p.pid == pid);

  // shoot data to data layer
  const [{ cart }, dispatch] = useStateValue();
  console.log("this is the cart >>>", cart);

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

  return (
    <div className="product-container">
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
        <button className="btn-add-to-cart" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
