import React from 'react'
import './Bedroom.css'
import Inspiration from './Inspiration'
import inspirationData from '../inspirationData'

function Bedroom() {

    let inspirationHTML = [];

    for (let inspiration_data of inspirationData) {
        inspirationHTML.push(<Inspiration inspiration_data={inspiration_data} />)
    }

    return (
        <div className="page">
            <div className="page-container">
                <div className="page-title">
                    <h2>Bedroom inspiration for every taste</h2>
                </div>
                <div className="page-description">
                    <p>Not sure which bed or bedroom furniture is right for you? You can browse this gallery of fully-furnished bedrooms to find the looks that suit your style.</p>
                </div>
                <div className="bedroom-container">
                    {inspirationHTML}
                </div>
            </div>
        </div>
    )
}

export default Bedroom
