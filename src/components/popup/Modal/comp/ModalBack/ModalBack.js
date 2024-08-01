'use client';

import { HiOutlineChevronLeft } from "react-icons/hi";
import style from './ModalBack.module.css';


export default function ModalBack({ onClose }) {
    return (
        <div className={style.backHeader}>
            <button onClick={onClose} type="button" className={style.backHeaderButton} >
                <HiOutlineChevronLeft />
                <span>Back</span>
            </button>
        </div>
    )
}