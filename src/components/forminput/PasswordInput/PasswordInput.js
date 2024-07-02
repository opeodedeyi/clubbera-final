'use client';

import { useState } from 'react';
import Link from "next/link";
import style from "./PasswordInput.module.css";


const MainPasswordInput = ( props ) => {
    const [type, setType] = useState('password');

    const changeView = () => {
        if (type=="password") {
            setType("text");
        } else {
            setType("password");
        }
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
                    type={type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                
                <img src="/eye.svg" alt="eyeOpen" className={style.eyeIcon} onClick={changeView}/>
            </div>
        </div>
    );
}

export default MainPasswordInput