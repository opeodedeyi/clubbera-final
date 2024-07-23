'use client'

import { useEffect, useState } from 'react';
import { googleLogin } from '@/app/actions/googleLogin';
import LoadingSpinner from "@/components/animation/LoadingSpinner/LoadingSpinner";
import style from './SocialButton.module.css';


const SocialLoginButton = ({ imgSrc, coloring, loading, children, socialType, id }) => {
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);

    useEffect(() => {
        if (socialType === 'google') {
            loadGoogleSdk();
        }
    }, [socialType])

    const loadGoogleSdk = () => {
        const script = document.createElement('script')
        script.src = 'https://accounts.google.com/gsi/client'
        script.async = true
        script.defer = true
        script.onload = () => {
            initializeGoogleSignIn();
            setIsSdkLoaded(true);
        }
        document.body.appendChild(script)
    }

    const initializeGoogleSignIn = () => {
        window.google.accounts.id.initialize({
          client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
          callback: handleGoogleCredentialResponse,
        })
    }

    const handleGoogleCredentialResponse = async (res) => {
        try {
            await googleLogin(res.credential)
        } catch (error) {
            console.error('Google login error:', error)
        }
    }

    const handleLogin = () => {
        if (socialType === 'google' && isSdkLoaded) {
            window.google.accounts.id.prompt()
        }
    }

    return (
      <button
        type="button"
        className={`${style.socialLoginButton} ${style[coloring]}`}
        onClick={handleLogin}
        disabled={loading || (socialType === "google" && !isSdkLoaded)}
      >
        <img src={imgSrc} alt="google" className="google-icon" />
        <span>{children}</span>
        {(loading || !isSdkLoaded) && <LoadingSpinner />}
      </button>
    );
}

export default SocialLoginButton



