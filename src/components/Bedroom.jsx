import React from 'react'
import './Bedroom.css'
import Inspiration from './Inspiration'
import './page.css'

function Bedroom() {
    return (
        <div className="bedroom">
            <div className="page-container">
                <div className="page-title">
                    <h2>Bedroom inspiration for every taste</h2>
                </div>
                <div className="page-description">
                    <p>Not sure which bed or bedroom furniture is right for you? You can browse this gallery of fully-furnished bedrooms to find the looks that suit your style.</p>
                </div>
                <div className="bedroom-container">
                    <Inspiration />
                    <Inspiration />
                    <Inspiration />
                    <Inspiration />
                    <Inspiration />
                </div>
            </div>
        </div>
    )
}

export default Bedroom
