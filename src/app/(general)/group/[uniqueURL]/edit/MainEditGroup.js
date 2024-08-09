'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import BasicDetailsHeader from './comp/BasicDetailsHeader/BasicDetailsHeader';
import GroupNavigation from './comp/GroupNavigation/GroupNavigation';
import GroupContent from './GroupContent';
import { EditGroupProvider } from '@/app/context/EditGroupContext';


const MainEditGroup = ({ group }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'details');

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`?tab=${tabName}`, { scroll: false });
    };

    return (
        <EditGroupProvider group={group}>
            <SecHeaderBack />
            <BasicDetailsHeader group={group} />
            <GroupNavigation 
                activeTab={activeTab} 
                handleTabClick={handleTabClick}
                isPrivate={group.is_private} />
            <GroupContent activeTab={activeTab} />
        </EditGroupProvider>
    );
}

export default MainEditGroup;