import React from "react";
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
  const [{ cart, user }, dispatch] = useStateValue();

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
              <Link to="#">Products</Link>
            </li>
            <li>
              <Link to="/">Rooms</Link>
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
            <Link to="#">
              <li>
                <LocationOnOutlinedIcon className="header__icon-btn" />
              </li>
            </Link>
            <Link to="#">
              <li>
                <AssignmentTurnedInOutlinedIcon className="header__icon-btn" />
              </li>
            </Link>

            {user ? (
              <Link to="/profile">
                <li>
                  <PersonOutlineOutlinedIcon className="header__icon-btn" />
                </li>
              </Link>
            ) : (
              <Link to="/login">
                <li>
                  <PersonOutlineOutlinedIcon className="header__icon-btn" />
                </li>
              </Link>
            )}
            {/* <Link to="/login"> */}

            <Link to="#">
              <li>
                <FavoriteBorderIcon className="header__icon-btn" />
              </li>
            </Link>
            <Link to="/cart">
              <li>
                <ShoppingBasketOutlinedIcon className="header__icon-btn header-basket-icon" />
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
