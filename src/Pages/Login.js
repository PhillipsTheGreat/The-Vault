import React from "react";
import './Login.css';
import { Link } from "react-router-dom";


export default function Login() {
    return (
        <div className="LoginContainer">
            <textarea className="UsernameInput" rows="1" placeholder="Username" />
            <textarea className="PasswordInput" rows="1" placeholder="Password" />
            <Link to="/home">
                <button className="LoginButton">Enter The Vault</button>
            </Link>
        </div>
    )
} 