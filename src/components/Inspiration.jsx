import React from 'react'
import './Inspiration.css'

function Inspiration() {
    return (
        <div className="inspiration">
            <div className="shoppable-image">
                <img src="bedroom1.webp" alt="bedroom1" />
                <div className="shoppable-image__area">
                    <a className="shoppable-image__dot"></a>
                    <div className="shoppable-image__tag" role="tooltip"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Inspiration
