'use client';

import { useMemo, useCallback, memo } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from 'next/navigation';
import { HiOutlineUserGroup, HiOutlineLogin, HiOutlineChevronDown } from "react-icons/hi";
import { useUser } from '@/app/context/UserContext';
import { useLogout } from '@/hooks/useLogout';
import style from "./ProfileSection.module.css";


const ProfileSection = memo(() => {
    const { user } = useUser();
    const logout = useLogout();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const profileHref = useMemo(() => {
        return pathname === '/profile' 
            ? `/profile?${searchParams.toString()}`
            : '/profile?profileTab=joinedGroups&currentEditTab=basicInfo';
    }, [pathname, searchParams]);

    const handleLogout = useCallback((e) => {
        e.preventDefault();
        logout();
    }, [logout]);

    return (
        <div className={style.headerProfilePhotoCard}>
            <Link href={profileHref} className={style.headerProfilePhotoMain}>
                <div className={style.headerProfilePhotoCardImg}>
                    <Image
                        src={user?.avatar || "/profile.png"}
                        height={40}
                        width={40}
                        alt="profile photo"/>
                </div>
                
                <HiOutlineChevronDown color="var(--color-text-main)" size="12px" className={style.desktopOnlyShow}/>
            </Link>

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
});

ProfileSection.displayName = 'ProfileSection';

export default ProfileSection;