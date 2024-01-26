import React from "react";

export default function Card(props){
    const rating=(props.rating/5)*100

    return(
        <div className="product">
            <div className="product-card">
            <img src={props.image} alt="Product Image" className="product-image" />
            <div className="rating-bar">
                <div className="rating-fill" style={{width:rating+'%'}}></div>
            </div>
            <div className="product-title">{props.title}</div>
            <div className="product-category">{props.category}</div>
            <div className="price-container">
                <div className="product-price">19.99$</div>
                <div className="discount-label">-{props.discount}% off</div>
            </div>
            <button className="buy-button">Buy Now</button>
            </div>
        </div>
    )
}
