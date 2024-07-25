'use client';

import { useState } from 'react';
import Link from "next/link";
import { HiOutlineEyeOff, HiOutlineEye } from "react-icons/hi";
import style from "./PasswordInput.module.css";


const MainPasswordInput = ( props ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    return (
        <div className={style.mainInputPassword}>
            <div className={style.formLabelContainer}>
                <label>{ props.input }</label>
                {props.forgotpasswordinput && <Link className={style.formLabelForgot} href="/forgotpassword">Forgot password?</Link>}
            </div>

            <div className={style.formInputPassword}>
                <input
                    name={props.name}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                
                <span className={style.eyeIcon} onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                        <HiOutlineEyeOff size={17} color="var(--color-placeholder)" />
                    ) : (
                        <HiOutlineEye size={17} color="var(--color-placeholder)" />
                    )}
                </span>
            </div>
        </div>
    );
}

export default MainPasswordInput