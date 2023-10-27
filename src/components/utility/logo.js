'use client';

import Link from "next/link";
import "./logo.css";

const Logo = ({ size="default-logo-size", coloring="default-logo-coloring" }) => {
    return (
        <Link href="/" className={`logo-container ${size} ${coloring}`}>
            <img src="/LogoClubbera.svg" alt="Clubbera logo" className="logo-container-image"/>
            <p className="logo-container-text">CLUBBERA</p>
        </Link>
    );
}

export default Logo