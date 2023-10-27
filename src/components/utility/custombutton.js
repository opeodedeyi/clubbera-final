'use client';

import Link from "next/link";
import "./custombutton.css";

const CustomButton = ({ size='default-size', coloring='default-coloring', link=false, destination, onClick, disabled, children }) => {
    return (
        link ? 
            <Link href={destination} className={`custom-button ${size} ${coloring}`}>
                { children }
            </Link>
        :
            <button type="button" className={`custom-button ${size} ${coloring}`} onClick={onClick} disabled={disabled}>
                { children }
            </button>
    );
};

export default CustomButton
