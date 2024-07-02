'use client';

import { useUser } from "@/app/context/UserContext";
import Link from "next/link";
import Image from 'next/image';
import style from './mobileNav.module.css';


function NavLink({text, link, svg}) {
    return (
        <li>
            <Link href={link} className={style.navLinkItem}>
                <div className={style.navLinkText}>
                    <div className={style.navLinkIcon}>
                        {svg}
                    </div>
                    <span className={style.navLinkMainText}>{text}</span>
                </div>
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M5.99978 13.2807L10.3464 8.93404C10.8598 8.4207 10.8598 7.5807 10.3464 7.06737L5.99978 2.7207" stroke="#A19F9F" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </Link>
        </li>
    );
}

const links = [
    {
        "text": "Profile",
        "link": "/profile",
        "svg": <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8.10671 7.24732C8.04004 7.24065 7.96004 7.24065 7.88671 7.24732C6.30004 7.19398 5.04004 5.89398 5.04004 4.29398C5.04004 2.66065 6.36004 1.33398 8.00004 1.33398C9.63337 1.33398 10.96 2.66065 10.96 4.29398C10.9534 5.89398 9.69337 7.19398 8.10671 7.24732Z" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.77348 9.70602C3.16014 10.786 3.16014 12.546 4.77348 13.6193C6.60681 14.846 9.61348 14.846 11.4468 13.6193C13.0601 12.5393 13.0601 10.7793 11.4468 9.70602C9.62014 8.48602 6.61348 8.48602 4.77348 9.70602Z" stroke="#777474" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
    },
];

export default function MobileNav({ isOpen, closeNav }) {
    const { user, loading, error } = useUser();

    if (loading) {
        return <div>Loading...</div>; // or some loading spinner
    }

    return (
        <nav className={`${style.mobileNav} ${isOpen ? style.mobileNavOpen : ""}`}>
            <button className={style.mobileNavCancel} onClick={closeNav}>
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                    <path d="M4.98867 9L1 5L4.98867 1" stroke="#777474" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>

            <div className={style.mobileNavBody}>
                <div className={style.mobileNavBodyTop}>
                    <div className={style.mobileNavImg}>
                        <Image 
                            src={user?.avatar || "/profile.png"}
                            fill
                            sizes="100vw"
                            alt="user profile picture" />
                    </div>
                    <div className={style.mobileNavText}>
                        <p className={style.mobileNavFullname}>{user?.user?.full_name}</p>
                        <Link href="/profile" className={style.mobileNavProfileLink}>Update profile &gt;</Link>
                    </div>
                </div>

                <ul className={style.mobileNavBodyBottom}>
                    {links.map((item, index) => 
                        <NavLink key={index} text={item.text} link={item.link} svg={item.svg}/>
                    )}
                </ul>
            </div>
        </nav>
    );
}