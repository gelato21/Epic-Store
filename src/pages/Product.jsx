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
    
        
        <div className="product-section">
            <div className="sidebar">
                <div className="filter-heading">Filters</div>
                <ul className="filter-options">
                    <li>
                        <label>
                            <input type="checkbox" /> Smartphones
                        </label>
                        </li>
                        <li>
                        <label>
                            <input type="checkbox" /> Laptops
                        </label>
                        <label>
                            <input type="checkbox" /> Fragrances
                        </label>
                        <label>
                            <input type="checkbox" /> home-decoration
                        </label>
                        <label>
                            <input type="checkbox" /> groceries
                        </label>
                        <label>
                            <input type="checkbox" /> skincare
                        </label>
                    </li>
                </ul>
            </div>
            <div className="display-product">
                {
                displayItems
                }
            </div>
        </div>
    )
}
