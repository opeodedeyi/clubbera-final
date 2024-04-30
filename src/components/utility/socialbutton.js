'use client';

import { useSocialLogin } from "@/hooks/useSocialLogin";
import { useRouter } from "next/navigation";
import "./custombutton.css";


const SocialLoginButton = ({ imgSrc, coloring, disabled, children, socialType }) => {
    const router = useRouter();
    const handleGoogleCredentialResponse = async (res) => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ idToken: res.credential }),
        });

        if (response.ok) {
            const data = await response.json();
            
            if (data?.data?.error) {
                console.log(data.error);
            } else {
                router.push('/');
            }
        }
    };

    useSocialLogin(socialType, handleGoogleCredentialResponse);

    const handleLogin = () => {
        if (socialType === "google") {
            window.google.accounts.id.prompt();
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