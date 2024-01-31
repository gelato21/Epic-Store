import React from "react";
import { useSelector} from "react-redux";
import ProductTable from "./ProductTable";
import EmptyCart from "./EmptyCart";


export default function CartContainer(){
    const cartItems = useSelector(state => state.product.cartProduct)
    

    if(!cartItems.length){
        return <EmptyCart/>
    }

    const items = cartItems.map((item, index) =>
        <ProductTable  key={index} props={item} />
    )
    console.log(cartItems)
    let totalPrice=0, totalItems=0
    cartItems.forEach(element => {
        totalItems+=element.quantity
        let price=(element.price)*(element.quantity)
        totalPrice+=price;
    });
    totalPrice*=83

    return(
        <div className="cart-continer">
            <div className="cart-items">
                { items }
            </div> 
            <div className="cart-price-details">
                <h1 className="cart-price-heading">PRICE DETAILS</h1>
                <div className="cart-bill cart-price-items">
                    <p>Price ({totalItems} items)</p>
                    <p>₹{(totalPrice+1800).toLocaleString()}</p>
                </div>
                <div className="cart-bill">
                    <p>Discount</p>
                    <p className="cart-bill-green">− ₹1,800</p>
                </div>
                <div className="cart-bill cart-bill-delivery">
                    <p>Delivery Charges</p>
                    <p className="cart-bill-green"><del className="cart-del">₹80</del>Free</p>
                </div>
                <div className="cart-bill cart-bill-total">
                    <p>Total Amount</p>
                    <p>₹{totalPrice.toLocaleString()}</p>
                </div>
                <p className="cart-bill-para">You will save ₹5,580 on this order</p>
            </div>
        </div> 
    )
}