import React, { useEffect, useState } from "react";
import Card from "../components/Card";


export default function Product(){
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setItems(data.products))
    }, [])
    

    const displayItems=items.map(item => 
        <Card 
            key={item.id}
            id={item.id}
            image={item.thumbnail} 
            desc={item.description} 
            price={item.price} 
            title={item.title}
            rating={item.rating}
            discount={item.discountPercentage}
            category={item.category}
        />
    )
    
    return(
        <div className="display-product">
            {
                displayItems
            }
        </div>
    )
}
