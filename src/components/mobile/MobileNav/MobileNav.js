'use client';

import { useUser } from "@/app/context/UserContext";
import { HiOutlineHome, HiMiniChevronLeft, HiMiniChevronRight, HiOutlineUser } from "react-icons/hi2";
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
                    <HiMiniChevronRight size="18px" color="var(--color-text-main)"/>
                </div>
            </Link>
        </li>
    );
}

const links = [
    {
        "text": "Home",
        "link": "/",
        "svg": <HiOutlineHome size="16px" color="var(--color-text-main)"/>
    },
    {
        "text": "Profile",
        "link": "/profile",
        "svg": <HiOutlineUser size="16px" color="var(--color-text-main)"/>
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
                <HiMiniChevronLeft size="18px" color="var(--color-text-main)"/>
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
                        <p className={style.mobileNavFullname}>{user?.full_name}</p>
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