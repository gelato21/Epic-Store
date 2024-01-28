import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Layout(){
    const [cartValue, setCartValue]=useState(0);
    const activeStyles={
        color: "blue", 
        fontWeight:"bold",
        textDecoration:"underline"
    }
    return(
        <>
            <div className="nav-container">
                <nav className="navBar">
                    <h1 className="nav-logo">Epic Store</h1>
                    <div className="nav-links">
                        <NavLink 
                            to="."
                            // style={({isActive}) => isActive ? activeStyles: null}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="about"
                            // style={({isActive}) => isActive ? activeStyles: null}
                        >
                            About us
                        </NavLink>
                        <NavLink 
                            to="product"
                            // style={({isActive}) => isActive ? activeStyles: null}
                        >
                            Product
                        </NavLink>
                        <span className="nav-cart">
                            <FontAwesomeIcon 
                                icon={faCartShopping} 
                                className=""
                            />
                            <span class="button__badge">{cartValue}</span>
                            Cart
                        </span>
                    </div>
                </nav>
                <Outlet context={[cartValue, setCartValue]} />
            </div>
        </>
    )
}