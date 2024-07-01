'use client';

import { useState, useCallback } from "react";
import { useUser } from '@/app/context/UserContext';
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import MobileNav from "@/components/mobile/MobileNav/MobileNav";
import style from "./MainHeader.module.css";


export default function MainHeader() {
    const { user, loading, error } = useUser();
    const [showNav, setShowNav] = useState(false);

    const openNav = useCallback(() => setShowNav(true), []);
    const closeNav = useCallback(() => setShowNav(false), []);

    if (loading) return <header className={style.headerMain}>Loading...</header>;
    if (error) return <header className={style.headerMain}>Error: {error.message}</header>;

    return (
        <>
            <header className={style.headerMain}>
                {user ? (
                    <LoggedInHeader user={user} navBtnClicked={openNav} showNav={showNav} />
                ) : (
                    <LoggedOutHeader />
                )}
            </header>
            
            <MobileNav isOpen={showNav} closeNav={closeNav}/>
        </>
    )
}

