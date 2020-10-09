import React from 'react'
import './Nav.css'
import LocationOnIcon from '@material-ui/icons/LocationOn';

function Nav() {
    return (
        <div className="nav">
            <div className="nav__logo"><img src="./IKEA-Logo.png" /></div>
            <div className="nav__option">Product</div>
            <div className="nav__option">Rooms</div>
            <div className="nav__option">SALE</div>
            <div className="nav__search"></div>
            <div className="nav__icon"><a><LocationOnIcon className="nav__locationIcon"></LocationOnIcon></a></div>
            <div className="nav__icon"><a><LocationOnIcon className="nav__locationIcon"></LocationOnIcon></a></div>
            <div className="nav__icon"><a><LocationOnIcon className="nav__locationIcon"></LocationOnIcon></a></div>
            <div className="nav__icon"><a><LocationOnIcon className="nav__locationIcon"></LocationOnIcon></a></div>
            <div className="nav__icon"><a><LocationOnIcon className="nav__locationIcon"></LocationOnIcon></a></div>
        </div>
    )
}

export default Nav
