'use client';

import { HiOutlineChevronLeft } from "react-icons/hi";
import { useNavigateBack } from '@/hooks/useNavigateBack';
import style from './BackButton.module.css';


export default function BackButton({ showText=false, screenType, size=18 }) {
    const navigateBack = useNavigateBack();

    return (
        <button
            onClick={navigateBack}
            className={`${style.backButton} ${ screenType === 'desktop' ? style.desktopOnlyShow : screenType === 'mobile' ? style.mobileOnlyShow : '' }`}>
            <HiOutlineChevronLeft size={size} color='var(--color-text-main)' />
            { showText && <span>Back</span> }
        </button>
    )
}