'use client';

import { useState } from "react";
import Logo from "@/components/utility/logo";
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M21 7.25H3C2.86614 7.25 2.75 7.13386 2.75 7C2.75 6.86614 2.86614 6.75 3 6.75H21C21.1339 6.75 21.25 6.86614 21.25 7C21.25 7.13386 21.1339 7.25 21 7.25Z" stroke="#777474"/>
                        <path d="M21 12.25H3C2.86614 12.25 2.75 12.1339 2.75 12C2.75 11.8661 2.86614 11.75 3 11.75H21C21.1339 11.75 21.25 11.8661 21.25 12C21.25 12.1339 21.1339 12.25 21 12.25Z" stroke="#777474"/>
                        <path d="M21 17.25H3C2.86614 17.25 2.75 17.1339 2.75 17C2.75 16.8661 2.86614 16.75 3 16.75H21C21.1339 16.75 21.25 16.8661 21.25 17C21.25 17.1339 21.1339 17.25 21 17.25Z" fill="#777474" stroke="#777474"/>
                    </svg>
                </button>
            </div>

            <div className={style.flexC}>
                <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.mobileOnlyShow}`}>
                    <button className={style.headerToggleBarAlt}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.66666 14.5C3.89999 14.5 0.833328 11.4334 0.833328 7.66671C0.833328 3.90004 3.89999 0.833374 7.66666 0.833374C11.4333 0.833374 14.5 3.90004 14.5 7.66671C14.5 11.4334 11.4333 14.5 7.66666 14.5ZM7.66666 1.83337C4.44666 1.83337 1.83333 4.45337 1.83333 7.66671C1.83333 10.88 4.44666 13.5 7.66666 13.5C10.8867 13.5 13.5 10.88 13.5 7.66671C13.5 4.45337 10.8867 1.83337 7.66666 1.83337Z" fill="#625F5F"/>
                            <path d="M14.6667 15.1666C14.54 15.1666 14.4133 15.12 14.3133 15.02L12.98 13.6866C12.7867 13.4933 12.7867 13.1733 12.98 12.98C13.1733 12.7866 13.4933 12.7866 13.6867 12.98L15.02 14.3133C15.2133 14.5066 15.2133 14.8266 15.02 15.02C14.92 15.12 14.7933 15.1666 14.6667 15.1666Z" fill="#625F5F"/>
                        </svg>
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