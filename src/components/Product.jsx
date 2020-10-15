import React from 'react'

function Product() {
    return (
        <div className="page">
            <div className="product-container">
                <div className="product-image">
                    <image>image.jpg</image>
                </div>
                <div className="product-details">
                    <div className="product-title">Title</div>
                    <div className="product-description">Description</div>
                    <div className="product-rating">rating</div>
                    <div className="product-price">price</div>
                    <button>Add to cart</button>

                </div>
            </div>
        </div>
    )
}

export default Product
