'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { useNavigateBack } from '@/hooks/useNavigateBack';
import style from './SecHeaderBack.module.css';


export default function SecHeaderBack() {
    const navigateBack = useNavigateBack();

    return (
        <div className={style.backHeader}>
            <CustomButton  onClick={navigateBack} coloring="formHeaderColoring" size="formHeaderSize">
                <img src="/back_direction.svg" alt="<" />
                <span className={style.desktopOnlyShow}>Back</span>
            </CustomButton>
        </div>
    )
}