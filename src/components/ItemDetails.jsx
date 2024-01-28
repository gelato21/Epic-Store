import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { faCartShopping, faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ItemDetails(props){
    const [product, setProduct]=useState(null)
    const [showImage, setShowImage]=useState(null)
    const params=useParams()
    
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${params.id}`)
            .then(res => res.json())
            .then(data => {
                setShowImage(data.thumbnail)
                return setProduct(data)
            })
    }, [])
    
    if(product==null){
        return <h1>Loading....</h1>
    }

    function handleClick(img){
        setShowImage(img)
    }
    const allImages=product.images.map((img) => 
        <img 
            src={img} 
            onClick={() => handleClick(img)}
        /> 
    )
    const indianRupee=product.price*83

    return(
        <div className="item">
            <div className="item-images">
                <img src={showImage} alt="Product Image 1" />
            </div>
            <div className="item-info">
                <h1 className="title">{product.title}</h1>
                <span className="item-rating">{product.rating.toFixed(1)}★</span>
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
                        {product.discountPercentage.toFixed(0)}% off
                    </span>
                </div>
                <div className="item-highlights">
                    <span>Highlights:</span>
                </div>
                <p className="item-description">{product.description}</p>
                <div className="item-short-img">
                    {allImages}
                </div>
                <div className="item-btns">
                    <div 
                        className="item-add-cart item-btn"
                        onClick={() => props.handleCard()}
                    >
                        <FontAwesomeIcon 
                            icon={faCartShopping}
                            className="btn-icon"
                        /> 
                            ADD TO CART
                    </div>
                    <div className="item-buy-now item-btn">
                        <FontAwesomeIcon 
                            icon={faBoltLightning} 
                            className="btn-icon"
                        />
                            BUY NOW
                    </div>
                </div>
            </div>
        </div>
    )
}