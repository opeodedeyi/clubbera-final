'use client';

import Link from "next/link";
import "./logo.css";

const Logo = ({ size="default-logo-size", coloring="default-logo-coloring" }) => {
    return (
        <Link href="/" className={`logo-container ${size} ${coloring}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                <g clip-path="url(#clip0_1216_4114)">
                    <path d="M9.63295 18.0004C11.7203 17.9735 13.9727 16.9288 15.8033 14.9388C15.8386 14.8872 15.8663 14.8307 15.8856 14.7713C16.2738 13.6486 14.1062 11.5131 13.0278 11.8951C12.8938 11.9425 12.8449 11.98 12.6206 12.2195C11.4956 13.4204 10.1054 14.0012 8.4763 13.8004C6.49306 13.5558 5.09559 12.4504 4.44962 10.5581C3.80896 8.68115 4.2389 6.98123 5.63443 5.56091C7.61341 3.54722 11.4157 4.12342 11.6801 4.97285C11.8175 5.41359 11.1099 6.21414 10.5226 6.22229C10.2215 6.22636 10.1169 5.99209 9.61843 5.89488C9.24446 5.82357 8.86088 5.81848 8.48515 5.87982C7.00127 6.11126 5.84851 7.45101 5.83789 8.98501C5.82337 10.8519 7.68176 12.3602 8.4122 12.1123C8.82691 11.9717 9.16069 11.1689 8.95971 10.9137C8.89508 10.8317 8.7883 10.8214 8.71978 10.8124C7.95836 10.7113 7.32691 10.079 7.20101 9.34677C7.06572 8.5595 7.42448 7.7917 8.10887 7.40214C8.78777 7.01664 9.64588 7.10855 10.2378 7.63499C10.3723 7.75345 10.4996 7.87987 10.6189 8.01357C10.667 8.04744 10.7168 8.07876 10.7682 8.10742C11.2445 8.36294 14.2619 6.33402 13.8121 5.15594C13.7963 5.11468 13.7903 5.07077 13.7335 5.00933C12.5876 3.7721 11.2107 3.00466 9.5044 2.87009C5.56413 2.55897 2.34332 5.96978 2.90517 9.86666C3.5322 14.2158 8.35908 16.5328 12.1547 14.3176C12.3096 14.2273 12.6314 13.7706 13.0806 13.7998C13.5807 13.8326 14.1113 14.4196 14.0106 14.7637C13.9787 14.8727 13.8886 14.9331 13.8594 14.9563C12.1063 16.3487 10.1132 16.9206 7.90311 16.5973C3.70644 15.9832 0.77709 12.0897 1.42359 7.91211C1.89071 4.89281 3.6225 2.78049 6.5067 1.77311C9.38274 0.769271 11.9974 1.40444 14.2704 3.42858C14.4315 3.57219 14.6033 4.01664 14.95 4.04498C15.3627 4.07844 15.8816 3.57236 15.8233 3.20228C15.8081 3.11909 15.7683 3.04236 15.7091 2.982C13.4863 0.620174 10.7542 -0.376933 7.5633 0.128792C2.63832 0.909337 -0.656153 5.51824 0.110581 10.4225C0.791256 14.7738 4.56915 17.9912 9.63295 18.0004Z" fill="#228B22"/>
                </g>
                <defs>
                    <clipPath id="clip0_1216_4114">
                        <rect width="15.9316" height="18" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            {/* <img src="/LogoClubbera.svg" alt="Clubbera logo" className="logo-container-image"/> */}
            <p className="logo-container-text">CLUBBERA</p>
        </Link>
    );
}

export default Logo