'use client';

import Link from "next/link";
import { Fragment, useState } from "react";
import { useRouter } from 'next/navigation';
import { useUser } from '@/context/UserContext';
import Header from "@/components/header/header";
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/maininput";
import MainPasswordInput from "@/components/forminput/passwordinput";
import CustomButton from "@/components/utility/custombutton";
import SocialLoginButton from "@/components/utility/socialbutton";
import "@/app/style/authentication.css";


export default function Login({ searchParams }) {
    const router = useRouter();
    const { destination } = searchParams;
    const { setUser } = useUser();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const nextPage = () => {
        if (destination) {
            return `/${destination}`
        } else {
            return '/'
        }
    }

    const isEmailValid = (email) => {
        const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
        return emailRegex.test(email);
    };

    const isPasswordValid = (password) => {
        // At least one character, A total of at least 8 characters
        const passwordRegex = /^.{8,}$/;
        return passwordRegex.test(password);
    };

    const isDisabled = !email || !password || !isEmailValid(email) || !isPasswordValid(password) || loading;

    const buttonClicked = async (event) => {
        event.preventDefault();
        setLoading(true);
        const response = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        })

        if (response) {
            const data = await response.json();
            
            if (data.error) {
                console.log(data.error);
                setLoading(false);
            } else {
                setUser(data.data.user);
                router.push(nextPage());
            }
        }
    };
  
    return (
        <Fragment>
            <Header />

            <div className="auth-container">
                <form className="auth-container-main">
                    <div className="auth-form-content">
                        <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
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
                        <CustomButton size="fullwidth-size" disabled={isDisabled} onClick={buttonClicked}>Login</CustomButton>
                        <p className="auth-form-actions-cta">Not a member yet? <Link href="/signup" className="">Sign up now</Link></p>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
  