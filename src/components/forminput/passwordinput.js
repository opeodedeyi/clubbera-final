'use client';

import { useState } from 'react';
import "./forminput.css";
import Link from "next/link";

const mainPasswordInput = ( props ) => {
    const [type, setType] = useState('password');

    const changeView = () => {
        if (type=="password") {
            setType("text");
        } else {
            setType("password");
        }
    };

    return (
        <div className="main-input-password">
            <div className="form-label-container">
                <label className="form-label" htmlFor={props.input}>{ props.input }</label>
                {props.forgotpasswordinput && <Link className="form-label-forgot" href="/forgotpassword">Forgot password?</Link>}
            </div>
            <div className="form-input-password">
                <input
                    name={props.input}
                    type={type}
                    placeholder={props.placeholder}
                    value={props.value}
                    onChange={props.onChange}
                />
                
                <img src="/eye.svg" alt="eyeOpen" className="eye-icon" onClick={changeView}/>
            </div>
        </div>
    );
}

export default mainPasswordInput