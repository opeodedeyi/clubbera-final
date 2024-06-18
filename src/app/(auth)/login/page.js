'use client';

import Link from "next/link";
import useLoginForm from '@/hooks/useLoginForm';
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/maininput";
import MainPasswordInput from "@/components/forminput/passwordinput";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import SocialLoginButton from "@/components/utility/socialbutton";
import style from "../Auth.module.css";


export default function Login({ searchParams }) {
    const { destination } = searchParams
    const { email, setEmail, password, setPassword, submitLogin, isDisabled } = useLoginForm(destination);

    return (
        <>
            <div className={style.authContainer}>
                <form className={style.authContainerMain} onSubmit={(e) => { e.preventDefault(); submitLogin(); }}>
                    <div className={style.authFormContent}>
                        <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
                        <div className={style.authFormContentMain}>
                            <div className={style.authFormContentIntro}>
                                <h3>Welcome back</h3>
                                <p className={style.authFormContentIntroText}>Ready to reconnect with friends? Login to resume discovery of new experiences together.</p>
                            </div>
                        </div>
                        <SocialLoginButton imgSrc="/google_icon.svg" coloring="google-coloring" socialType="google">Login with Google</SocialLoginButton>
                        <div className={style.authOrHorizontalLine}>
                            <div className={style.horizontalLineHalf}></div>
                            <p className={style.horizontalLineText}>or</p>
                            <div className={style.horizontalLineHalf}></div>
                        </div>
                        <div className={style.authFormInputs}>
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
                    <div className={style.authFormActions}>
                        <CustomButton size="fullwidth-size" disabled={isDisabled} type="submit">Login</CustomButton>
                        <p className={style.authFormActionsCta}>Not a member yet? <Link href="/signup" className="">Sign up now</Link></p>
                    </div>
                </form>
            </div>
        </>
    )
}
  