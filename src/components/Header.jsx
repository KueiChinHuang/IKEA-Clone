import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AssignmentTurnedInOutlinedIcon from '@material-ui/icons/AssignmentTurnedInOutlined';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

function Header() {
    return (
        <header className="header">
            <div className="header-container">
                <div className="header__logo">
                    <img src="./IKEA-Logo.png" />
                </div>

                <div className="header__nav">
                    <ul className="header__nav__main">
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Rooms</a></li>
                        <li><a href="#">SALE</a></li>
                    </ul>
                </div>

                <div className="header__search">
                    <SearchIcon />
                    <input className="search-field__input" type="text" placeholder="What are you looking for?"/>
                </div>

                <div className="header__icons">
                    <ul>
                        <li>
                            <a href="#"><LocationOnOutlinedIcon className="header__locationIcon" /></a>
                        </li>
                        <li>
                            <a href="#"><AssignmentTurnedInOutlinedIcon className="header__locationIcon" /></a>
                        </li>
                        <li>
                            <a href="#"><PersonOutlineOutlinedIcon className="header__locationIcon" /></a>
                        </li>
                        <li>
                            <a href="#"><FavoriteBorderIcon className="header__locationIcon" /></a>
                        </li>
                        <li>
                            <a href="#"><ShoppingBasketOutlinedIcon className="header__locationIcon" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
