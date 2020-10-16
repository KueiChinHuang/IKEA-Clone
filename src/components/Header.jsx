import React from "react";
import "./Header.css";

// Import icons from Material-UI
import SearchIcon from "@material-ui/icons/Search";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__logo">
          <img src="./IKEA-Logo.png" />
        </div>

        <div className="header__nav">
          <ul className="header__nav__main">
            <li>
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="#">Rooms</Link>
            </li>
            <li>
              <Link to="#">SALE</Link>
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
            <li>
              <Link to="#">
                <LocationOnOutlinedIcon className="header__icon-btn" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <AssignmentTurnedInOutlinedIcon className="header__icon-btn" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <PersonOutlineOutlinedIcon className="header__icon-btn" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <FavoriteBorderIcon className="header__icon-btn" />
              </Link>
            </li>
            <li>
              <Link to="#">
                <ShoppingBasketOutlinedIcon className="header__icon-btn" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
