'use client';

import Link from "next/link";
import { useState, Fragment } from "react";
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "../Auth.module.css";

const MainForm = ({ email, setEmail, isDisabled }) => {
    return (
        <>
            <div className={style.authFormContent}>
                <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Forgot password ?</h3>
                        <p className={style.authFormContentIntroText}>We will send you a mail to reset your password</p>
                    </div>
                </div>
                <div className={style.authFormInputs}>
                    <MainInput
                        type="email"
                        placeholder="Enter email address" 
                        input="Email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                </div>
            </div>
            <div className={style.authFormActions}>
                <CustomButton size="fullwidthSize" disabled={isDisabled}>Send Email</CustomButton>
                <p className={style.authFormActionsCta}>Didn&apos;t forget password? <Link href="/login" className="">Login</Link></p>
            </div>
        </>
    );
}

const EmailSent = () => {
    return (
        <>
            <div className={style.authFormContentCenter}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Email sent!</h3>
                        <p className={style.authFormContentIntroText}>We sent an email to your email address. Follow the steps provided in your email to update your password.</p>
                    </div>
                </div>

                <div className={style.authFormSuccessImage}>
                </div>
                
                <CustomButton link destination="/login" size="normalSize">Check Email</CustomButton>
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
            <div className={style.authContainer}>
                <form className={style.authContainerMain}>
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
  