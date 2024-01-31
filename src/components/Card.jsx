import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoltLightning } from "@fortawesome/free-solid-svg-icons";
import { addCartItem} from "../features/productSlice";
import { useDispatch } from "react-redux";

export default function Card({item}){
    const indianRupee=item.price*83
    const dispatch=useDispatch();

    return(
        <div className="product">
            <div className="product-card">
                <Link 
                    to={`/product/${item.id}`} 
                    state={item}
                    className="link-btn"
                >
                    <>
                        <img 
                            src={item.thumbnail} 
                            alt="Product Image" 
                            className="product-image" 
                        />
                        <h1 className="product-title">{item.title}</h1>
                        <span className="item-rating">{item.rating.toFixed(1)}★</span>
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
                                    {item.discountPercentage.toFixed(0)}% off
                                </span>
                            </div>
                        <div className="product-category">{item.category}</div>
                    </>
                </Link>
                <div
                    className="item-buy-now item-btn card-btn link-btn"
                    onClick={() => dispatch(addCartItem({...item, quantity: 1}))}
                >
                    <FontAwesomeIcon 
                        icon={faBoltLightning} 
                        className="btn-icon"
                    />
                    <Link 
                        to="../cart"
                        path="relative"
                    >
                        BUY NOW
                    </Link> 
                </div>
            </div>
            
        </div>
    )
}
