import React, { useEffect, useState } from "react";
import Card from "../components/Card";

export default function Product(){
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [])
    console.log(items)
    

    const displayItems=items.map(item => 
        <Card 
            key={item.id}
            image={item.thumbnail} 
            desc={item.description} 
            price={item.price} 
            title={item.title}
        />
    )
    
    return(
        <div className="product-section">
            <div className="sidebar">
                <h1>Apply Filter</h1>

            </div>
            <div className="display-product">
                {
                displayItems
                }
            </div>
        </div>
    )
}
