import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home">
            <div className="home-container">
                <div>
                    <h1 className="home-heading">Online shopping simplified</h1>
                    <p>Order your groceries from SuperM with our easy to use app, and get your products delivered straight to your doorstep.</p>
                    <div className="start-div">
                        <Link  to="product" className="start-btn">Start Shopping</Link>
                    </div>
                </div>
                <div>
                    <img  className="home-img" src="https://st4.depositphotos.com/1017228/21668/i/450/depositphotos_216682472-stock-photo-photo-shopaholic-woman-20s-straw.jpg" alt="food-img" />
                </div>
            </div>
        </div>
    )
}