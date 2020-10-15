import React from 'react'
import './Inspiration.css'
import ReactTooltip from 'react-tooltip';

function Inspiration() {
    return (
        <div className="inspiration">
            <div className="inspiration-container">
                <div className="inspiration-image">
                    <img className="inspiration-image__img" src="bedroom1.webp" alt="bedroom1" />
                    <div className="inspiration-image__area" style={{top: "21%", left: "60.5%"}}>
                        <a className="inspiration-image__dot" data-tip></a>
                        <ReactTooltip className="inspiration-image__tag" place="right"  effect="solid" arrowColor="transparent" clickable="true" delayUpdate={1000}>
                            <p>tooltip</p>
                        </ReactTooltip>

                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Inspiration
