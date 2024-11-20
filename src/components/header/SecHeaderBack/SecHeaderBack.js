'use client';

import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigateBack } from '@/hooks/useNavigateBack';
import style from './SecHeaderBack.module.css';


export default function SecHeaderBack() {
    const navigateBack = useNavigateBack();

    return (
        <div className={style.backHeader}>
            <button onClick={navigateBack} className={style.backButton}>
                <HiOutlineChevronLeft />
                <span>Back</span>
            </button>
        </div>
    )
}