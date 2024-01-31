import React, { useState } from "react";
import { faCartShopping, faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { nanoid } from "@reduxjs/toolkit";
import { Link, useLocation } from "react-router-dom";
import { addCartItem } from "../features/productSlice";
import { useDispatch } from "react-redux";


export default function ItemDetails(){
    const location = useLocation()
    const dispatch = useDispatch()
    const [showImage, setShowImage]=useState(location.state.thumbnail)
    const indianRupee=location.state.price*83


    function handleClick(img){
        setShowImage(img)
    }
    const allImages=location.state.images.map((img) => 
        <img 
            key={nanoid()}
            src={img} 
            onClick={() => handleClick(img)}
        /> 
    )

    return(
        <div className="item">
            <div className="item-images">
                <img src={showImage} alt="Image 1" />
            </div>
            <div className="item-info">
                <h1 className="title">{location.state.title}</h1>
                <span className="item-rating">{location.state.rating.toFixed(1)}★</span>
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
                        {location.state.discountPercentage.toFixed(0)}% off
                    </span>
                </div>
                <div className="item-highlights">
                    <span>Highlights:</span>
                </div>
                <p className="item-description">{location.state.description}</p>
                <div className="item-short-img">
                    {allImages}
                </div>
                <div className="item-btns">
                    <div 
                        className="item-add-cart item-btn"
                        onClick={ () => dispatch(addCartItem({...location.state, quantity:1 })) }
                        >
                        <FontAwesomeIcon 
                            icon={faCartShopping}
                            className="btn-icon"
                            /> 
                            ADD TO CART
                    </div>
                    <Link 
                        className="item-buy-now item-btn link-btn" 
                        to="../cart" 
                        path="relative"
                        onClick={ () => dispatch(addCartItem({...location.state, quantity:1 })) }
                    >
                        <FontAwesomeIcon 
                            icon={faBoltLightning} 
                            className="btn-icon"

                        />
                            BUY NOW
                    </Link>
                </div>
            </div>
        </div>
    )
}