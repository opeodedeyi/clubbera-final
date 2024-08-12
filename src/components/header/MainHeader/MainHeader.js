'use client';

import { useState, useCallback, useMemo, memo, useEffect } from "react";
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { useUser } from '@/app/context/UserContext';
import HeaderSkeleton from "./HeaderSkeleton";
import LoggedInHeader from "./LoggedInHeader";
import LoggedOutHeader from "./LoggedOutHeader";
import MobileNav from "@/components/mobile/MobileNav/MobileNav";
import SearchBar from "@/components/forminput/SearchBar/SearchBar";
import style from "./MainHeader.module.css";

const MainHeader = memo(() => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const { user, loading, error } = useUser();
    const [showNav, setShowNav] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (pathname.startsWith('/search')) {
            setShowMobileSearch(true);
            const query = searchParams.get('q');
            if (query) {
                setSearchText(decodeURIComponent(query));
            }
        }
    }, [pathname, searchParams]);

    const openNav = useCallback(() => setShowNav(true), []);
    const closeNav = useCallback(() => setShowNav(false), []);

    const toggleMobileSearch = useCallback(() => {
        if (!pathname.startsWith('/search')) {
            setShowMobileSearch(prev => !prev);
        }
    }, [pathname]);

    const handleSearchChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
    }, [searchText, router]);

    const headerContent = useMemo(() => {
        if (loading) return <header className={`${style.headerMain} ${style.headerMainWrapper}`}><HeaderSkeleton/></header>;
        if (error) return <header className={style.headerMain}>Error: {error.message}</header>;

        return (
            <div className={style.headerMainWrapper}>
                {user ? (
                    <header className={style.headerMain}>
                        <LoggedInHeader
                            navBtnClicked={openNav}
                            showNav={showNav}
                            searchText={searchText}
                            toggleMobileSearch={toggleMobileSearch}
                            handleSearchChange={handleSearchChange}
                            onSubmit={onSubmit}/>
                    </header>
                ) : (
                    <header className={style.headerMain}><LoggedOutHeader /></header>
                )}

                {(showMobileSearch || pathname.startsWith('/search')) && (
                    <header className={`${style.headerMainSearch} ${style.mobileOnlyShow}`}>
                        <SearchBar 
                            type="search" 
                            placeholder="Search communities, locations" 
                            value={searchText}
                            onChange={handleSearchChange}
                            onSubmit={onSubmit}
                        />
                    </header>
                )}
                
                <MobileNav isOpen={showNav} closeNav={closeNav}/>
            </div>
        );
    }, [user, loading, error, showNav, showMobileSearch, searchText, openNav, closeNav, toggleMobileSearch, handleSearchChange]);

    return headerContent;
});

MainHeader.displayName = 'MainHeader';

export default MainHeader;