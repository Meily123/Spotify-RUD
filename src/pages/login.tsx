import React from 'react';
import '../assets/login.css';
import {loginUrl} from "../utils/loginUrl";

function Login() {

    const handleLogin = () => {
        window.location.href = loginUrl;
    };

    return (
        <div className="login">
            <div className="logo">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Spotify_App_Logo.svg/2048px-Spotify_App_Logo.svg.png"
                    alt="Spotify logo"
                />
                <h1>Spotify</h1>
            </div>
            <button onClick={handleLogin}>
                LOGIN
            </button>
        </div>
    );
}

export default Login;
