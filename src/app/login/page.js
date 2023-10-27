'use client';

import Link from "next/link";
import { Fragment } from "react";
import Header from "../../components/header/header";
import MainInput from "../../components/forminput/maininput";
import MainPasswordInput from "../../components/forminput/passwordinput";
import CustomButton from "../../components/utility/custombutton";
import SocialLoginButton from "../../components/utility/socialbutton";
import "../style/authentication.css";

import { useState } from 'react';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password) => {
        // At least one, At least one lowercase, At least one uppercase, At least one special, A total of at least 8 characters
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
        return passwordRegex.test(password);
    };

    const isDisabled = !email || !password || !isEmailValid(email) || !isPasswordValid(password);
  
    return (
        <Fragment>
            <Header />

            <div className="auth-container">
                <form className="auth-container-main">
                    <div className="auth-form-content">
                        <div className="auth-form-content-Logo">
                            LOGO
                        </div>
                        <div className="auth-form-content-main">
                            <div className="auth-form-content-intro">
                                <h3>Welcome back</h3>
                                <p className="auth-form-content-intro-text">Ready to reconnect with friends? Login to resume discovery of new experiences together.</p>
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
                        <CustomButton size="fullwidth-size">Login</CustomButton>
                        <p className="auth-form-actions-cta">Not a member yet? <Link href="/signup" className="">Sign up now</Link></p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
  }
  