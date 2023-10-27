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

export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isDisabled = !email || !isEmailValid(email)
  
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
                                <h3>Recover account</h3>
                                <p className="auth-form-content-intro-text">Forgot your account&apos;s password? Enter your email address and we&apos;ll send you a recovery link.</p>
                            </div>
                        </div>
                        <div className="auth-form-inputs">
                            <MainInput
                                type="email"
                                placeholder="Enter email address" 
                                input="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div className="auth-form-actions">
                        <CustomButton size="fullwidth-size">Send Recovery email</CustomButton>
                        <p className="auth-form-actions-cta">Go back to <Link href="/login" className="">Log in</Link></p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
  }
  