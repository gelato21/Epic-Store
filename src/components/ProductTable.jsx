
import React from 'react';

function ProductTable({props}){
    console.log(props)
    const indianRupee=props.price*83
  return (
    <div className='cart-wrap'>
        <div className='cart-item'>
            <div className="cart-item-images">
                <img 
                    src={props.thumbnail}  
                    alt="Image 1" 
                />
            </div>
            <div className='item-info'>
                <h1 className="cart-title">{props.title}</h1>
                <p className='cart-description'>{props.description}</p>
                <div className="item-pricing-detail">
                    <span 
                        className="cart-cut-price"
                    >
                        <del>₹{(indianRupee+1000).toLocaleString()}</del>
                    </span>
                    <span className="cart-price">₹{indianRupee.toLocaleString()}</span>
                    <span 
                        className="item-discount"
                    >
                        {props.discountPercentage.toFixed(0)}% off
                    </span>
                </div>
            </div>
        </div>
        <div className='cart-counter'>
            <span className='cart-btn cart-minus'>-</span>
            <span className='cart-counter-num'>7</span>
            <span className='cart-btn cart-plus'>+</span>
            <span className='cart-remove-btn'>REMOVE</span>
        </div>
    </div>
  )
};


export default ProductTable;
