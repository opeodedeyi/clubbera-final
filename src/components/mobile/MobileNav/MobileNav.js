'use client';

import { useMemo, memo } from "react";
import Link from "next/link";
import Image from 'next/image';
import { useUser } from "@/app/context/UserContext";
import { usePathname, useSearchParams } from 'next/navigation';
import { HiOutlineHome, HiMiniChevronLeft, HiMiniChevronRight, HiOutlineUser } from "react-icons/hi2";
import { useLogout } from '@/hooks/useLogout';
import MobileOverlay from '@/components/mobile/MobileOverlay/MobileOverlay';
import style from './mobileNav.module.css';


const NavLink = memo(({text, link, svg, closeNav}) => (
    <li>
        <Link href={link} className={style.navLinkItem} onClick={closeNav}>
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
));

NavLink.displayName = 'NavLink';

const links = [
    {
        "text": "Home",
        "link": "/",
        "svg": <HiOutlineHome size="16px" color="var(--color-text-main)"/>
    },
    {
        "text": "Profile",
        "link": "/profile?profileTab=joinedGroups&currentEditTab=basicInfo",
        "svg": <HiOutlineUser size="16px" color="var(--color-text-main)"/>
    },
];

const MobileNav = memo(({ isOpen, closeNav }) => {
    const { user, loading, error } = useUser();
    const logout = useLogout();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const profileHref = useMemo(() => {
        return pathname === '/profile' 
            ? `/profile?${searchParams.toString()}`
            : '/profile?profileTab=joinedGroups&currentEditTab=basicInfo';
    }, [pathname, searchParams]);

    const navContent = useMemo(() => {
        if (loading) {
            return <div>Loading...</div>; // or some loading spinner
        }

        return (
            <>
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
                                <Link
                                    href={profileHref}
                                    className={style.mobileNavProfileLink}
                                    onClick={closeNav}>
                                        Update profile &gt;
                                </Link>
                            </div>
                        </div>

                        <ul className={style.mobileNavBodyBottom}>
                            {links.map((item, index) => 
                                <NavLink
                                    key={index}
                                    text={item.text}
                                    link={item.link}
                                    svg={item.svg}
                                    closeNav={closeNav}/>
                            )}
                        </ul>
                    </div>
                </nav>
                <MobileOverlay isOpen={isOpen} closeNav={closeNav}/>
            </>
        );
    }, [user, loading, isOpen, closeNav]);

    return navContent;
});

MobileNav.displayName = 'MobileNav';

export default MobileNav;