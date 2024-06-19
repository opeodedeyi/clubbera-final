'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./AuthHeader.module.css";


export default function AuthHeader() {
    return (
        <>
            <header className={`${style.headerMain} ${style.noBorderBottom}`}>
                <CustomButton link destination="/" coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span>Back to home page</span></CustomButton>
            </header>
        </>
    )
}
