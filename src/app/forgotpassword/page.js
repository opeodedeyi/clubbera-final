'use client';

import Link from "next/link";
import { useState, Fragment } from "react";
import Logo from "../../components/utility/logo";
import Header from "../../components/header/header";
import MainInput from "../../components/forminput/maininput";
import CustomButton from "../../components/utility/custombutton";
import "../style/authentication.css";

const MainForm = ({ email, setEmail, isDisabled }) => {
    return (
        <>
            <div className="auth-form-content">
                <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Forgot password ?</h3>
                        <p className="auth-form-content-intro-text">We will send you a mail to reset your password</p>
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
                <CustomButton size="fullwidth-size" disabled={isDisabled}>Send Email</CustomButton>
                <p className="auth-form-actions-cta">Didn&apos;t forget password? <Link href="/login" className="">Login</Link></p>
            </div>
        </>
    );
}

const EmailSent = () => {
    return (
        <>
            <div className="auth-form-content-center">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Email sent!</h3>
                        <p className="auth-form-content-intro-text">We sent an email to your email address. Follow the steps provided in your email to update your password.</p>
                    </div>
                </div>

                <div className="auth-form-success-image">
                </div>
                
                <CustomButton link destination="/login" size="normal-size">Check Email</CustomButton>
            </div>
        </>
    );
}

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [step, setStep] = useState(1);

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isDisabled = !email || !isEmailValid(email);
  
    return (
        <Fragment>
            <Header />

            <div className="auth-container">
                <form className="auth-container-main">
                    {step===1 ?
                        <MainForm email={email} setEmail={setEmail} isDisabled={isDisabled} />
                    :
                        <EmailSent />
                    }
                </form>
            </div>
        </Fragment>
    )
}
  