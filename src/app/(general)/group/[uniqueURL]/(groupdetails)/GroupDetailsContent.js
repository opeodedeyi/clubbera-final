'use client';

import { useState, useMemo } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import GroupKeyDetails from './comp/GroupKeyDetails/GroupKeyDetails';
import GroupNavigation from './comp/GroupNavigation/GroupNavigation';
import { useGroupMembership } from '@/hooks/useGroupMembership';
import AboutSection from "@/components/pages/groupDetails/AboutSection";
import EventSection from "@/components/pages/groupDetails/EventSection";
import DiscussionSection from "@/components/pages/groupDetails/DiscussionSection";
import MemberSection from "@/components/pages/groupDetails/MemberSection";
import '@/app/style/groupdetails.css';


export default function GroupDetailsContent ({ group }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'about');
    const { ctaText, handleMembershipAction, isLoading } = useGroupMembership(group.isMember, group.unique_url, group.is_private);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`?tab=${tabName}`, { scroll: false });
    };

    return (
        <>
            <div className="group-details-main">
                <SecHeaderBack />
                <GroupKeyDetails 
                    group={group} 
                    ctaText={ctaText}
                    isLoading={isLoading}
                    onJoinLeave={handleMembershipAction} />
                <GroupNavigation
                    activeTab={activeTab} 
                    handleTabClick={handleTabClick} />

                {activeTab === 'about' && <AboutSection group={group}/>}
                {activeTab === 'events' && <EventSection/>}
                {activeTab === 'discussions' && <DiscussionSection/>}
                {activeTab === 'members' && <MemberSection/>}
            </div>
        </>
    );
};