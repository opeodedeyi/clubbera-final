'use client';

import { useEditMeeting } from '@/app/context/EditMeetingContext';
import BasicDetails from './steps/BasicDetails';
import EventSetup from './steps/EventSetup';

export default function EditMeetingContent() {
    const { 
        currentTab
    } = useEditMeeting();

    return (
        <>
            {currentTab === 'basicDetails' && <BasicDetails />}
            {currentTab === 'eventSetup' && <EventSetup />}
        </>
    );
}