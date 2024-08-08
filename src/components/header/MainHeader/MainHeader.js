'use client';

import { useState, useCallback, useMemo, memo } from "react";
import { useUser } from '@/app/context/UserContext';
import HeaderSkeleton from "./HeaderSkeleton";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import MobileNav from "@/components/mobile/MobileNav/MobileNav";
import style from "./MainHeader.module.css";


const MainHeader = memo(() => {
    const { user, loading, error } = useUser();
    const [showNav, setShowNav] = useState(false);

    const openNav = useCallback(() => setShowNav(true), []);
    const closeNav = useCallback(() => setShowNav(false), []);

    const headerContent = useMemo(() => {
        if (loading) return <header className={style.headerMain}> <HeaderSkeleton/> </header>;
        if (error) return <header className={style.headerMain}>Error: {error.message}</header>;

        return (
            <>
                <header className={style.headerMain}>
                    {user ? (
                        <LoggedInHeader navBtnClicked={openNav} showNav={showNav} />
                    ) : (
                        <LoggedOutHeader />
                    )}
                </header>
                
                <MobileNav isOpen={showNav} closeNav={closeNav}/>
            </>
        );
    }, [user, loading, error, showNav, openNav, closeNav]);

    return headerContent;
});

MainHeader.displayName = 'MainHeader';

export default MainHeader;