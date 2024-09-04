'use client'

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { googleLogin } from '@/app/actions/googleLogin';
import LoadingSpinner from "@/components/animation/LoadingSpinner/LoadingSpinner";
import style from './SocialButton.module.css';


const SocialLoginButton = ({ imgSrc, coloring, loading, children, socialType, id }) => {
    const [isSdkLoaded, setIsSdkLoaded] = useState(false);
    const searchParams = useSearchParams();
    const destination = searchParams.get('destination');

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
        console.log('response idToken : ', res.credential);
        
        if (res.credential) {
            try {
                await googleLogin(res.credential, 'idToken', destination)
            } catch (error) {
                console.error('Google login error:', error)
            }
        } else {
            console.log('Sign-in was canceled')
        }
    }

    const handleLogin = () => {
        if (socialType === 'google' && isSdkLoaded) {
            triggerGoogleSignIn();
        }
    }

    const triggerGoogleSignIn = () => {
        if (window.google && window.google.accounts && window.google.accounts.id) {
            window.google.accounts.id.prompt((notification) => {
                if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
                    // If One Tap is not displayed, fallback to manual sign-in
                    window.google.accounts.oauth2.initCodeClient({
                        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
                        scope: 'email profile',
                        callback: (response) => {
                            if (response.code) {
                                console.log('Google login response : ', response.code);
                                googleLogin(response.code, 'code', destination);
                            }
                        },
                    }).requestCode();
                }
            });
        } else {
            console.error('Google Sign-In SDK not loaded properly');
        }
    }

    return (
        <button
            type="button"
            className={`${style.socialLoginButton} ${style[coloring]}`}
            onClick={handleLogin}
            disabled={loading || (socialType === 'google' && !isSdkLoaded)}>
            <img src={imgSrc} alt="google" className="google-icon" />
            <span>{children}</span>
            { (loading || !isSdkLoaded) && <LoadingSpinner /> }
        </button>
    )
}

export default SocialLoginButton
