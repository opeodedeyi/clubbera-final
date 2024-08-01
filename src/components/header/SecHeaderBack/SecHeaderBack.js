'use client';

import { HiOutlineChevronLeft } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { useNavigateBack } from '@/hooks/useNavigateBack';
import style from './SecHeaderBack.module.css';


export default function SecHeaderBack() {
    const navigateBack = useNavigateBack();

    return (
        <div className={style.backHeader}>
            <CustomButton onClick={navigateBack} coloring="formHeaderColoring" size="formHeaderSize">
                <HiOutlineChevronLeft color="var(--color-text-main)"/>
                <span className={style.desktopOnlyShow}>Back</span>
            </CustomButton>
        </div>
    )
}