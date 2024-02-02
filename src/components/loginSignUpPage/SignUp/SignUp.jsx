import React from "react";
import "./signup.css"
import { Link } from "react-router-dom";

export default function SignUp(){
    return(
        <div className="sign-page">
            <div className="sign-container">
                <div className="label-input">
                    <label htmlFor="" className="label">Name</label>
                    <input 
                        className="input" 
                        type="text" 
                        placeholder="Name"
                    />
                </div>
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
                <div className="sign-btn">Continue</div>
                <Link
                    to="../login"
                    path="relative"
                    className="link-btn link-sign-page"
                >
                    Already have an account? Sign in
                </Link>
            </div>
        </div>
    )
}