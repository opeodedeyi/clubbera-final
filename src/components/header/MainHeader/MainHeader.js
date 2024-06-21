'use client';

import { useState, useCallback } from "react";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import MobileNav from "@/components/mobile/MobileNav/MobileNav";
import style from "./MainHeader.module.css";


export default function MainHeader({ user }) {
    const [showNav, toggleShowNav] = useState(false);

    const openNav = useCallback(() => {
        toggleShowNav(true);
    }, [])

    const closeNav = useCallback(() => {
        toggleShowNav(false);
    }, [])

    return (
        <>
            <header className={style.headerMain}>
                {
                    user ? (
                        user.isLoggedIn ? 
                            <LoggedInHeader user={user} navBtnClicked={openNav} showNav={showNav} />
                        : 
                            <LoggedOutHeader />
                    )
                    :
                    'loading...'
                }
            </header>
            
            <MobileNav isOpen={showNav} closeNav={closeNav}/>
        </>
    )
}

