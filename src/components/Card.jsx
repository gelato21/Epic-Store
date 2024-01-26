import React from "react";

export default function Card(props){

    return(
        <div className="card-container">
            <div className="card">
                <div className="card-img-div"> 
                    <img className="card-img" src={props.image} alt="product-img" />
                </div>
                <div className="card-second">
                    <h3 className="card-heading">{props.title}</h3>
                    <div className="card-price">{props.price}</div>
                </div>
            </div>
        </div>
    )
}
// brand
// : 
// "Hemani Tea"
// category
// : 
// "skincare"
// description
// : 
// "Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,"
// discountPercentage
// : 
// 4.09
// id
// : 
// 17
// images
// : 
// (4) ['https://cdn.dummyjson.com/product-images/17/1.jpg', 'https://cdn.dummyjson.com/product-images/17/2.jpg', 'https://cdn.dummyjson.com/product-images/17/3.jpg', 'https://cdn.dummyjson.com/product-images/17/thumbnail.jpg']
// price
// : 
// 12
// rating
// : 
// 4.52
// stock
// : 
// 78
// thumbnail
// : 
// "https://cdn.dummyjson.com/product-images/17/thumbnail.jpg"
// title
// : 
// "Tree Oil 30ml"