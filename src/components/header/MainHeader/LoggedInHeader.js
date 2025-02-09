'use client';

import { useState, useCallback, useMemo, memo } from "react";
import Logo from "@/components/utility/Logo/logo";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import SearchBar from "@/components/forminput/SearchBar/SearchBar";
import ProfileSection from "./ProfileSection/ProfileSection";
import style from "./MainHeader.module.css";
import NotificationBell from "./notification/NotificationBell";


const LoggedInHeader = memo(({ navBtnClicked, toggleMobileSearch, searchText, handleSearchChange, onSubmit }) => {
    const mobileButtons = useMemo(() => (
        <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.mobileOnlyShow}`}>
            <button
                className={style.headerToggleBarAlt}
                onClick={toggleMobileSearch} >
                <HiOutlineSearch size="18px" color="var(--color-text-main)" />
            </button>
            
            <ProfileSection />
        </div>
    ), [toggleMobileSearch]);

    const desktopButtons = useMemo(() => (
        <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.desktopOnlyShow}`}>
            <SearchBar 
                type="search" 
                placeholder="Search communities, locations" 
                value={searchText}
                onChange={handleSearchChange}
                width="325px"
                onSubmit={onSubmit} />
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
        </>
    );
});

LoggedInHeader.displayName = 'LoggedInHeader';

export default LoggedInHeader;