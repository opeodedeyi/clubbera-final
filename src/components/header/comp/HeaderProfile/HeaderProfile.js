'use client';

import Link from "next/link";
import Image from "next/image";
import { HiOutlineUserGroup, HiOutlineLogin, HiOutlineChevronDown, HiMenu } from "react-icons/hi";
import { useLogout } from '@/hooks/useLogout';
import style from "./HeaderProfile.module.css";


export default function HeaderProfile({ user, screenType }) {
    // const profileUrl = `/profile/${user.unique_url}` // for future use
    const logout = useLogout();

    function openProfileDropdown() {
        console.log('open profile dropdown');
    };

    function handleLogout(e) {
        e.preventDefault();
        logout();
    };

    return (
        <div className={`${style.profileContainer} ${screenType === "desktop" ? style.desktopOnlyShow : screenType === "mobile" ? style.mobileOnlyShow : ""}`}>
            <div className={style.profileMain} onClick={openProfileDropdown}>
                <HiMenu size={16} color="var(--color-text-main)"/>

                <div className={style.profileMainImg}>
                    <Image
                        src={user?.avatar || "/profile.png"}
                        height={40}
                        width={40}
                        alt="profile photo"/>
                </div>
            </div>

            <div className={`${style.headerProfileDropdown} ${style.desktopOnlyShow}`}>
                <div className={style.headerProfileDropdownSpace}></div>
                <ul>
                    <li>
                        <div onClick={handleLogout} className={style.headerProfileDropdownLink}>
                            <HiOutlineLogin size={16} />
                            <span>Logout</span>
                        </div>
                    </li>
                    <li>
                        <Link href="/mygroups" className={style.headerProfileDropdownLink}>
                            <HiOutlineUserGroup size={16} />
                            <span>My groups</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}