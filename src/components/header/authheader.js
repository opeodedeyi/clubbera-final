'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import "@/components/header/header.css";


export default function AuthHeader() {
    return (
        <>
            <header className={'header-main no-border-bottom'}>
                    <CustomButton link destination="/" coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span>Back to home page</span></CustomButton>
            </header>
        </>
    )
}
