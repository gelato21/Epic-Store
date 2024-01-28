import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ItemDetails from "./ItemDetails";

export default function ProductDetail(){
    const [cartValue, setCartValue]=useOutletContext()
    const params=useParams()
    function handleCard(){
        setCartValue(prev => prev+1)
    }
    return(
        <ItemDetails handleCard={handleCard} />
    )
}