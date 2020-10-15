import React from 'react'
import './Inspiration.css'
import ReactTooltip from 'react-tooltip';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Inspiration() {

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
    

    let itemsHTML = []

    for (let item of items) {
        itemsHTML.push(
            <div className="inspiration-image__area" style={{top: item.position_top, left: item.position_left}} >                        
            <ReactTooltip id={item.title} className="tooltip" place="right"  effect="solid" arrowColor="transparent" clickable="true" >                            
                <div className="tooltip-container">
                    <h4 className="tooltip-title">{item.title}</h4>
                    <sapn className="tooltip-description">{item.description}</sapn>
                    <div className="tooltip-arrow">
                        <ArrowForwardIosIcon  fontSize="small" />
                    </div>
                    <span className="tooltip-price">{item.price}</span>
                </div>                            
            </ReactTooltip>                        
            <a className="inspiration-image__dot" data-tip data-for={item.title}></a>
        </div>
        );
    }

     

    return (
        <div className="inspiration">
            <div className="inspiration-container">
                <div className="inspiration-image">
                    <img className="inspiration-image__img" src="bedroom1.webp" alt="bedroom1" />
                    {itemsHTML}
                </div>
            </div>
            
        </div>
    )
}

export default Inspiration
