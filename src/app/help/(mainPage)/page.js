'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import HelpHero from '../comp/HelpHero/HelpHero';
import HelpNavigation from "../comp/HelpNavigation/HelpNavigation";
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import Guests from "../pages/Guests/Guests";
import EventHost from "../pages/EventHost/EventHost";
import CommunityOrganizer from "../pages/CommunityOrganizer/CommunityOrganizer";
import CommunityMember from "../pages/CommunityMember/CommunityMember";


export default function Help() {
    const router = useRouter();
    const [searchText, setSearchText] = useState('');
    const [activeTab, setActiveTab] = useState("guests");

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const onSubmit = (e) => {
        console.log("Search submitted");
        router.push(`/help/search?q=${encodeURIComponent(searchText.trim())}`);
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
            <CenterCont>
                {activeTab === "guests" && <Guests />}
                {activeTab === "eventHost" && <EventHost />}
                {activeTab === "communityOrganizer" && <CommunityOrganizer />}
                {activeTab === "communityMember" && <CommunityMember />}
            </CenterCont>
        </div>
    );
}