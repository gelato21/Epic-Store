
import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementQuantity, removeCartItem, decrementQuantity } from '../features/productSlice';

function ProductTable({props}){
    const dispatch=useDispatch()
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
            <span 
                className='cart-btn cart-minus' 
                onClick={() => dispatch(decrementQuantity(props.id))}
            >-</span>
            <span className='cart-counter-num'>{props.quantity}</span>
            <span
                className='cart-btn cart-plus'
                onClick={() => dispatch(incrementQuantity(props.id))}
            >+</span>
            <span 
                className='cart-remove-btn'
                onClick={() => dispatch(removeCartItem(props.id))}
            >
                REMOVE
            </span>
        </div>
    </div>
  )
};


export default ProductTable;
