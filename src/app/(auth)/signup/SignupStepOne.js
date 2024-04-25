'use client';


import Link from "next/link";
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/maininput";
import MainPasswordInput from "@/components/forminput/passwordinput";
import SocialLoginButton from "@/components/utility/socialbutton";
import CustomButton from "@/components/utility/custombutton";
import "@/app/style/authentication.css";


export default function SignupStepOne ({ email, setEmail, fullName, setFullName, password, setPassword, isDisabled, buttonClicked }) {
    return (
        <>
            <div className="auth-form-content">
                <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Join the adventure</h3>
                        <p className="auth-form-content-intro-text">Sign up to connect with like-minded individuals and embark on exciting journeys together.</p>
                    </div>
                </div>
                <SocialLoginButton imgSrc="/google_icon.svg" coloring="google-coloring">Login with Google</SocialLoginButton>
                <div className="auth-or-horizontal-line">
                    <div className="horizontal-line-half"></div>
                    <p className="horizontal-line-text">or</p>
                    <div className="horizontal-line-half"></div>
                </div>
                <div className="auth-form-inputs">
                    <MainInput
                        type="text"
                        placeholder="Enter full name" 
                        input="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}/>
                    
                    <MainInput
                        type="email"
                        placeholder="Enter email address" 
                        input="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>

                    <MainPasswordInput
                        type="password"
                        placeholder="Enter password" 
                        input="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </div>
            </div>
            <div className="auth-form-actions">
                <CustomButton size="fullwidth-size" disabled={isDisabled} onClick={buttonClicked}>Continue</CustomButton>
                <p className="auth-form-actions-cta">Already a member? <Link href="/login" className="">Log in</Link></p>
            </div>
        </>
    );
}