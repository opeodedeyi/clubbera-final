'use client';

import { useEditMeeting } from '@/app/context/EditMeetingContext';
import style from "./EditMeetingNavigation.module.css";


export default function EditMeetingNavigation(){
  const { 
    currentTab,
    setCurrentTab
  } = useEditMeeting();

  return (
    <nav className={style.navigation}>
      <ul className={style.navigationList}>
          <li onClick={() => setCurrentTab('basicDetails')} className={currentTab === 'basicDetails' ? style.activeNavigationItem : ''}>Basic details</li>
          <li onClick={() => setCurrentTab('eventSetup')} className={currentTab === 'eventSetup' ? style.activeNavigationItem : ''}>Event setup</li>
      </ul>
    </nav>
  );
};