'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { useNavigateBack } from '@/hooks/useNavigateBack';
import style from "./AuthHeader.module.css";


export default function AuthHeader() {
    const navigateBack = useNavigateBack();

    return (
        <>
            <header className={`${style.headerMain} ${style.noBorderBottom}`}>
                <CustomButton onClick={navigateBack} coloring="formHeaderColoring" size="formHeaderSize">
                    <img src="/back_direction.svg" alt="<" />
                    <span>Back</span>
                </CustomButton>
            </header>
        </>
    )
}
