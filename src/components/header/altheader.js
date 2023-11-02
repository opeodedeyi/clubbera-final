'use client';

import { useRouter } from "next/navigation";
import "./header.css";

import CustomButton from "../utility/custombutton";


export default function AltHeader({ children, backButtonClicked }) {
    return (
        <>
            <header className="header-main">
                <CustomButton coloring="form-header-coloring" size="form-header-size" onClick={backButtonClicked}>
                    <img className="header-alt-arrow" src="/back_direction.svg" alt="<" />
                    <span className="header-alt-text">{ children }</span>
                </CustomButton>
            </header>
        </>
    )
}

