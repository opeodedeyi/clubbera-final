'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import GroupKeyDetails from './comp/GroupKeyDetails/GroupKeyDetails';
import GroupNavigation from './comp/GroupNavigation/GroupNavigation';
import GroupPages from './GroupPages';
import { useGroupMembership } from '@/hooks/useGroupMembership';
import style from './GroupDetails.module.css';


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
        <div className={style.groupDetailsMain}>
            <SecHeaderBack />
            <GroupKeyDetails 
                group={group} 
                ctaText={ctaText}
                isLoading={isLoading}
                onJoinLeave={handleMembershipAction} />
            <GroupNavigation
                activeTab={activeTab} 
                handleTabClick={handleTabClick} />

            <GroupPages group={group} activeTab={activeTab}/>
        </div>
    );
};