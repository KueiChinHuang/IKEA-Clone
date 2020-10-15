import React from 'react'
import './Bedroom.css'
import Inspiration from './Inspiration'
import './page.css'

function Bedroom() {
    const items = [
        {
            pid: 1,
            title: "REGOLIT",
            description: "Pendant lamp shade, white17 ¾ (45 cm)",
            price: "4.99",
            position_top: "21%",
            position_left: "60.5%"
        },
        {
            pid: 2,
            title: "SKURUP",
            description: "Wall lamp, black",
            price: "14.99",
            position_top: "29.6%",
            position_left: "25.5%"
        }
    ]

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
                    <Inspiration items={items}/>
                    <Inspiration items={items}/>
                    <Inspiration items={items}/>
                    <Inspiration items={items}/>
                    <Inspiration items={items}/>
                </div>
            </div>
        </div>
    )
}

export default Bedroom
