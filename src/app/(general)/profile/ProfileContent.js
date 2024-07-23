'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProfileNavigation from "./comp/ProfileNavigation/ProfileNavigation";
import FormedGroups from './steps/FormedGroups/FormedGroups';
import JoinedGroups from './steps/JoinedGroups/JoinedGroups';
import Style from "./Profile.module.css";


export default function ProfileContent({user}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'joinedGroups');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    router.push(`?tab=${tabName}`, { scroll: false });
  };
  
  return (
    <div className={Style.profileTabs}>
      <ProfileNavigation activeTab={activeTab} handleTabClick={handleTabClick} />
      {activeTab === 'joinedGroups' && <JoinedGroups user={user}/>}
      {activeTab === 'formedGroups' && <FormedGroups user={user}/>}
    </div>
  )
}