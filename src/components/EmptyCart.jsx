import React from "react";
import { Link } from "react-router-dom";

export default function EmptyCart(){
    return(
        <div className="empty-cart">
            <img src="https://rukminim2.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90" alt="empty-cart-img" />
            <h2>Your cart is empty!</h2>
            <p>Add items to it now.</p>
            <Link 
                to="../product"
                path="relative"
                className="empty-link"
            
            >
                <div className="empty-btn">Shop now</div>
            </Link>
        </div>
    )
}