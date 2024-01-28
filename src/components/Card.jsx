import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";

export default function Card(props){
    const indianRupee=props.price*83

    return(
        <div className="product">
            <Link to={`/product/${props.id}`}>
                <div className="product-card">
                <img 
                    src={props.image} 
                    alt="Product Image" 
                    className="product-image" 
                />
                <h1 className="product-title">{props.title}</h1>
                <span className="item-rating">{props.rating.toFixed(1)}★</span>
                <span className="item-reviews">1,494 Ratings & 138 Reviews</span>
                    <div className="item-pricing-detail">
                        <span className="item-price">₹{indianRupee.toLocaleString()}</span>
                        <span 
                            className="item-cut-price"
                        >
                            <del>₹{(indianRupee+1000).toLocaleString()}</del>
                        </span>
                        <span 
                            className="item-discount"
                        >
                            {props.discount.toFixed(0)}% off
                        </span>
                    </div>
                <div className="product-category">{props.category}</div>
                <div className="item-buy-now item-btn card-btn">
                    <FontAwesomeIcon 
                        icon={faBoltLightning} 
                        className="btn-icon"
                    />
                        BUY NOW
                </div>
                </div>
            </Link>
        </div>
    )
}
