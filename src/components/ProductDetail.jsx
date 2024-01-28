import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";

export default function ProductDetail(){
    const params=useParams();
    // const [product, setProduct]=useState(null);
    // console.log(params)

    // useEffect(() => {
    //     fetch(`https://dummyjson.com/products/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setProduct(data))
    // }, [])
    // console.log(product)

    return(
        <ItemDetails/>
    )
}