'use client';

import Link from "next/link";
import { Fragment } from "react";
import Logo from "../../components/utility/logo";
import Header from "../../components/header/header";
import MainInput from "@/components/forminput/maininput";
import MainPasswordInput from "../../components/forminput/passwordinput";
import CustomButton from "../../components/utility/custombutton";
import SocialLoginButton from "../../components/utility/socialbutton";
import "../style/authentication.css";

import { useState } from 'react';


const SignupStepOne = ({ email, setEmail, fullName, setFullName, password, setPassword, isDisabled }) => {
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
                <CustomButton size="fullwidth-size" disabled={isDisabled}>Continue</CustomButton>
                <p className="auth-form-actions-cta">Already a member? <Link href="/login" className="">Log in</Link></p>
            </div>
        </>
    );
}

const SignupStepTwo = () => {
    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Finish signing up</h3>
                        <p className="auth-form-content-intro-text">We just need a few information from you and your account will be all set up.</p>
                    </div>
                </div>
            </div>
            <div className="auth-form-actions">
                <CustomButton size="fullwidth-size">Get started</CustomButton>
                <p className="auth-form-actions-policy">By signing up, you agree to <Link href="/termsofservice" className="auth-dark-link">Terms of Service</Link>, <Link href="/privacypolicy" className="auth-dark-link">Privacy Policy</Link>, and <Link href="/cookiepolicy" className="auth-dark-link">Cookie Policy</Link>.</p>
            </div>
        </>
    );
}

export default function Signup() {
    const [step, setStep] = useState(2);
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [ageConsent, setAgeConsent] = useState(false);

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password) => {
        // At least one, At least one lowercase, At least one uppercase, At least one special, A total of at least 8 characters
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const isDisabled = !fullName || !email || !password || !isEmailValid(email) || !isPasswordValid(password);
  
    return (
        <Fragment>
            <Header />

            <div className="auth-container">
                <form className="auth-container-main">
                    {step===1 ?
                        <SignupStepOne
                            email={email} 
                            setEmail={setEmail} 
                            fullName={fullName} 
                            setFullName={setFullName} 
                            password={password} 
                            setPassword={setPassword}
                            isDisabled={isDisabled}/>
                    :
                        <SignupStepTwo />
                    }
                    
                </form>
            </div>
        </Fragment>
    )
}
  