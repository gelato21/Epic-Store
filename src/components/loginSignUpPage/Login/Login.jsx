import React from "react";
import "./login.css"
import { Link } from "react-router-dom";

export default function Login(){
    return(
        <div className="login-page">
            <div className="login-container">
                <div className="label-input">
                    <label htmlFor="" className="label">Email</label>
                    <input 
                        className="input" 
                        type="email" 
                        placeholder="Email"
                    />
                </div>
                <div className="label-input" >
                    <label htmlFor="" className="label">Passward</label>
                    <input 
                        className="input"
                        type="passward" 
                        placeholder="passward"
                    />
                </div>
                <div className="login-btn">Login</div>
                <Link
                    to="../signup"
                    path="relative"
                    className="link-btn link-login-page"
                >
                    New to Epic Store? Create an account
                </Link>
            </div>
        </div>
    )
}