'use client';

import { useState, useCallback, useMemo, memo } from "react";
import Logo from "@/components/utility/logo";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import SearchBar from "@/components/forminput/SearchBar/SearchBar";
import ProfileSection from "./ProfileSection/ProfileSection";
import style from "./MainHeader.module.css";

const LoggedInHeader = memo(({ navBtnClicked }) => {
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    const toggleMobileSearch = useCallback(() => {
        setShowMobileSearch(prev => !prev);
    }, []);

    const handleSearchChange = useCallback((e) => {
        setSearchText(e.target.value);
    }, []);

    const mobileButtons = useMemo(() => (
        <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.mobileOnlyShow}`}>
            <button className={style.headerToggleBarAlt} onClick={toggleMobileSearch}>
                <HiOutlineSearch size="16px" color="var(--color-text-main)"/>
            </button>
            <ProfileSection/>
        </div>
    ), [toggleMobileSearch]);

    const desktopButtons = useMemo(() => (
        <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.desktopOnlyShow}`}>
            <SearchBar 
                type="search" 
                placeholder="Search communities, locations" 
                value={searchText}
                onChange={handleSearchChange}
            />
            <div className={style.headerVertiLine}></div>
            <ProfileSection/>
        </div>
    ), [searchText, handleSearchChange]);

    return (
        <>
            <div>
                <div className={style.desktopOnlyShow}>
                    <Logo coloring="default-logo-coloring" size="header-logo-size" />
                </div>
                <button className={`${style.headerToggleBar} ${style.mobileOnlyShow}`} onClick={navBtnClicked}>
                    <HiOutlineMenu size="24px" color="var(--color-text-main)"/>
                </button>
            </div>

            <div className={style.flexC}>
                {mobileButtons}
                {desktopButtons}
            </div>

            {showMobileSearch && (
                <div className={style.mobileOnlyShow}>
                    <SearchBar 
                        type="search" 
                        placeholder="Search communities, locations" 
                        value={searchText}
                        onChange={handleSearchChange}
                    />
                </div>
            )}
        </>
    );
});

LoggedInHeader.displayName = 'LoggedInHeader';

export default LoggedInHeader;