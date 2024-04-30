'use client';

import { useState, useCallback } from "react";
import LoggedInHeader from "@/components/header/LoggedInHeader";
import LoggedOutHeader from "@/components/header/LoggedOutHeader";
import MobileNav from "@/components/mobile/mobileNav";
import "@/components/header/header.css";


export default function Header({ user }) {
    const [showNav, toggleShowNav] = useState(false);

    const openNav = useCallback(() => {
        toggleShowNav(true);
    }, [])

    const closeNav = useCallback(() => {
        toggleShowNav(false);
    }, [])

    return (
        <>
            <header className={'header-main'}>
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

