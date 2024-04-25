'use client';

import Link from "next/link";
import useLoginForm from '@/hooks/useLoginForm';
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/maininput";
import MainPasswordInput from "@/components/forminput/passwordinput";
import CustomButton from "@/components/utility/custombutton";
import SocialLoginButton from "@/components/utility/socialbutton";
import "@/app/style/authentication.css";
import { useEffect } from "react";


export default function Login({ searchParams }) {
    const { destination } = searchParams
    const { email, setEmail, password, setPassword, submitLogin, isDisabled } = useLoginForm(destination);

    // useEffect(() => {
    //     google.accounts.id.initialize({
    //         client_id: "YOUR_GOOGLE",
    //         callback: handleCredentialResponse,
    //         auto_select: false
    //     })
    // }, [])

    // const handleGoogleLogin = () => {
    //     google.accounts.id.prompt()
    // }

    // const handleCredentialResponse = (response) => {
    //     console.log("Encoded JWT ID token: " + response.credential);
    // };

    return (
        <>
            <div className="auth-container">
                <form className="auth-container-main" onSubmit={(e) => { e.preventDefault(); submitLogin(); }}>
                    <div className="auth-form-content">
                        <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
                        <div className="auth-form-content-main">
                            <div className="auth-form-content-intro">
                                <h3>Welcome back</h3>
                                <p className="auth-form-content-intro-text">Ready to reconnect with friends? Login to resume discovery of new experiences together.</p>
                            </div>
                        </div>
                        <SocialLoginButton imgSrc="/google_icon.svg" coloring="google-coloring" socialType="google">Login with Google</SocialLoginButton>
                        <div className="auth-or-horizontal-line">
                            <div className="horizontal-line-half"></div>
                            <p className="horizontal-line-text">or</p>
                            <div className="horizontal-line-half"></div>
                        </div>
                        <div className="auth-form-inputs">
                            <MainInput
                                type="email"
                                placeholder="Enter email address" 
                                input="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>

                            <MainPasswordInput
                                forgotpasswordinput
                                type="password"
                                placeholder="Enter password" 
                                input="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </div>
                    <div className="auth-form-actions">
                        <CustomButton size="fullwidth-size" disabled={isDisabled} type="submit">Login</CustomButton>
                        <p className="auth-form-actions-cta">Not a member yet? <Link href="/signup" className="">Sign up now</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}
  