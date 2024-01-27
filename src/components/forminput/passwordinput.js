'use client';

import { useState } from 'react';
import "@/components/forminput/forminput.css";
import Link from "next/link";

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
        <div className="main-input-password">
            <div className="form-label-container">
                <label className="form-label">{ props.input }</label>
                {props.forgotpasswordinput && <Link className="form-label-forgot" href="/forgotpassword">Forgot password?</Link>}
            </div>
            <div className="form-input-password">
                <input
                    name="Password"
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

export default MainPasswordInput