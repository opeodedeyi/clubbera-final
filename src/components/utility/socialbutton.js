'use client';

import { useEffect } from 'react';
import "./custombutton.css";

const SocialLoginButton = ( props ) => {
    const { imgSrc, coloring, onClick, disabled, children, socialType} = props;

    useEffect(() => {
        if (socialType === "google") {
            // Load the Google Identity SDK
            const script = document.createElement('script');
            script.src = 'https://accounts.google.com/gsi/client';
            script.async = true;
            script.defer = true;
            script.onload = initializeGoogleSignIn;
            document.body.appendChild(script);
        }
    }, [])

    const initializeGoogleSignIn = () => {
        window.google.accounts.id.initialize({
            client_id: 'YOUR_CLIENT_ID', // Replace 'YOUR_CLIENT_ID' with your actual client ID
            callback: handleGoogleCredentialResponse
        });
    };

    const handleGoogleCredentialResponse = (response) => {
        console.log('Encoded JWT ID token: ' + response.credential);
    };

    const handleLogin = () => {
        if (socialType === "google") {
            window.google.accounts.id.prompt(); // This function triggers the Google login prompt
        }
    };

    return (
        <button type="button" className={`social-login-button ${coloring}`} onClick={handleLogin} disabled={disabled}>
            <img src={imgSrc} alt="google" className="google-icon"/>
            <span>{ children }</span>
        </button>
    );
};

export default SocialLoginButton