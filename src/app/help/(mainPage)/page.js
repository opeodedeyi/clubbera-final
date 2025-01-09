'use client';

import { useState } from 'react';
import HelpHero from '../comp/HelpHero/HelpHero';
import HelpNavigation from "../comp/HelpNavigation/HelpNavigation";
// import EventHost from "../../pages/EventHost/EventHost";
// import CommunityOrganizer from "../../pages/CommunityOrganizer/CommunityOrganizer";
// import CommunityMember from "../../pages/CommunityMember/CommunityMember";
// import Guests from "../../pages/Guests/Guests";


export default function Help() {
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState("guests");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const onSubmit = (e) => {
        console.log("Search submitted");
        // router.push(`/search?q=${encodeURIComponent(searchText.trim())}`);
    };

    const goToTab = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="centerPage">
            <HelpHero
                searchText={searchText}
                handleSearchChange={handleSearchChange}
                onSubmit={onSubmit} />
            <HelpNavigation
                activeTab={activeTab}
                goToTab={goToTab}/>
        </div>
    );
}