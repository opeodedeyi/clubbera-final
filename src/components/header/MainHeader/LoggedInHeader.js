'use client';

import { useState } from "react";
import Logo from "@/components/utility/logo";
import { HiOutlineSearch, HiOutlineMenu } from "react-icons/hi";
import SearchBar from "@/components/forminput/SearchBar/SearchBar";
import ProfileSection from "./ProfileSection/ProfileSection";
import style from "./MainHeader.module.css";


function LoggedInHeader({ user, navBtnClicked}) {
    const [showMobileSearch, toggleShowMobileSearch] = useState(false);
    const [searchText, setSearchText] = useState('');

    return (
        <>
            <div>
                <div className={style.desktopOnlyShow}>
                    <Logo coloring="default-logo-coloring" size="header-logo-size"></Logo>
                </div>
                <button className={`${style.headerToggleBar} ${style.mobileOnlyShow}`} onClick={navBtnClicked}>
                    <HiOutlineMenu size="24px" color="var(--color-text-main)"/>
                </button>
            </div>

            <div className={style.flexC}>
                <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.mobileOnlyShow}`}>
                    <button className={style.headerToggleBarAlt}>
                        <HiOutlineSearch size="20px" color="var(--color-text-main)"/>
                    </button>

                    <ProfileSection/>
                </div>

                <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.desktopOnlyShow}`}>
                    <SearchBar 
                        type="search" 
                        placeholder="Search communities, locations" 
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />

                    <div className={style.headerVertiLine}></div>
                    
                    <ProfileSection/>
                </div>
            </div>
        </>
    );
}

export default LoggedInHeader