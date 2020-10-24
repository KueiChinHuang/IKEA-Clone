import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";

// Import icons from Material-UI
import SearchIcon from "@material-ui/icons/Search";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";

function Header() {
  const [isGreen, setIsGreen] = useState(true);
  const [{ cart, user }, dispatch] = useStateValue();

  const CART_STYLE = {
    visibility: isGreen ? "visible" : "hidden",
  };

  useEffect(() => {
    cart.length > 0 ? setIsGreen(true) : setIsGreen(false);
  }, [cart]);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          <img
            className="header__logo"
            src="/IKEA-Logo.png"
            alt="IKEA-Logo.png"
          />
        </Link>

        <div className="header__nav">
          <ul className="header__nav__main">
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/">Rooms</Link>
            </li>
            <li>
              <Link to="/">SALE</Link>
            </li>
          </ul>
        </div>

        <div className="header__search">
          <SearchIcon />
          <input
            className="search-field__input"
            type="text"
            placeholder="What are you looking for?"
          />
        </div>

        <div className="header__icons">
          <ul>
            <Link to="#">
              <li>
                <LocationOnOutlinedIcon />
              </li>
            </Link>
            <Link to="#">
              <li>
                <AssignmentTurnedInOutlinedIcon />
              </li>
            </Link>

            {user ? (
              <Link to="/profile">
                <li>
                  <PersonOutlineOutlinedIcon />
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li>
                  <PersonOutlineOutlinedIcon />
                </li>
              </Link>
            )}

            <Link to="#">
              <li>
                <FavoriteBorderIcon />
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <div id="header__icon-basket" style={CART_STYLE}></div>
                <ShoppingBasketOutlinedIcon />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
