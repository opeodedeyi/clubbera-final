'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import ProfileNavigation from "./comp/ProfileNavigation/ProfileNavigation";
import FormedGroups from './steps/FormedGroups/FormedGroups';
import JoinedGroups from './steps/JoinedGroups/JoinedGroups';
import style from "./Profile.module.css";


export default function ProfileContent({user}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { createMultipleQueryString, createQueryString } = useQueryParams();

    const activeTab = searchParams.get('profileTab');

    useEffect(() => {
        if (!activeTab) {
            const newParams = {
                profileTab: 'joinedGroups',
                currentEditTab: 'basicInfo'
            };
            router.push(`?${createMultipleQueryString(newParams)}`, { scroll: false });
        }
    }, []);

    const handleTabClick = (tabName) => {
        router.push(`?${createQueryString('profileTab', tabName)}`, { scroll: false });
    };
    
    return (
        <div className={style.profileTabs}>
            <ProfileNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
            {activeTab === 'joinedGroups' && <JoinedGroups user={user}/>}
            {activeTab === 'formedGroups' && <FormedGroups user={user}/>}
        </div>
    )
}