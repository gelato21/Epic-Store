import React from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from "react-redux";
import SearchBar from "../components/SearchBar";

export default function Layout(){
    const cartItems = useSelector(state => state.product.cartProduct)
    const activeStyles={
        color: "blue", 
        fontWeight:"bold",
        textDecoration:"underline"
    }
    return(
        <>
            <div className="nav-container">
                <nav className="navBar">
                    <div className="search-and-logo">
                        <h1 className="nav-logo">Epic Store</h1>
                        <SearchBar/>
                    </div>
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
                        <NavLink  
                            to="cart"
                            className="nav-cart">
                            <FontAwesomeIcon 
                                icon={faCartShopping} 
                                className="icon"
                            />
                            { cartItems.length!=0 && <span className="button__badge">{cartItems.length}</span>}
                            Cart
                        </NavLink>
                        <NavLink
                            to='user'
                        >
                            <FontAwesomeIcon icon={faUser} />
                        </NavLink>
                    </div>
                </nav>
                <Outlet />
            </div>
        </>
    )
}