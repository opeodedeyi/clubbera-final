import { useEffect } from 'react';

export const useSocialLogin = (socialType, handleCredentialResponse) => {
    useEffect(() => {
        if (socialType === "google") {
            loadGoogleSdk(handleCredentialResponse);
        }
    }, [socialType, handleCredentialResponse])

    const loadGoogleSdk = (callback) => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        script.onload = () => initializeGoogleSignIn(callback);
        document.body.appendChild(script);
    }

    const initializeGoogleSignIn = (callback) => {
        window.google.accounts.id.initialize({
            client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            callback: callback
        });
    };
}