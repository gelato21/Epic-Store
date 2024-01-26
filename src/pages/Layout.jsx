import React from "react";
import { Outlet } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function Layout(){
    const activeStyles={
        color: "#2B8379", 
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
                            style={({isActive}) => isActive ? activeStyles: null}
                        >
                            Home
                        </NavLink>
                        <NavLink 
                            to="about"
                            style={({isActive}) => isActive ? activeStyles: null}
                        >
                            About us
                        </NavLink>
                        <NavLink 
                            to="product"
                            style={({isActive}) => isActive ? activeStyles: null}
                        >
                            Product
                        </NavLink>
                        <div className="nav-cart">Cart(8)</div>
                    </div>
                </nav>
                <Outlet/>
            </div>
        </>
    )
}