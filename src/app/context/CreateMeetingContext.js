'use client';

import { createContext, useContext, useState, useCallback } from 'react';
// import { updateUser, changePassword, updateUserImage } from '@/app/actions/updateGroup';

const CreateMeetingContext = createContext();

export const CreateMeetingProvider = ({ children, uniqueUrl }) => {
    const [meetingData, setMeetingData] = useState({
        title: '',
        description: '',
        date_of_meeting: null,
        time_of_meeting: null,
        duration: null,
        capacity: null,
        location: '',
        lat: null,
        lng: null,
        banner: null,
        location_helper: null,
    });
    const [isCreatingMeeting, setIsCreatingMeeting] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);

    const createMeetingData = useCallback((newData) => {
        setMeetingData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const submitMeetingData = useCallback(async () => {
        setIsCreatingMeeting(true);
        try {
            console.log('creating meeting details');
            console.log(meetingData);
        } catch (error) {
            // console.error('Error saving user data:', error);
            // throw error;
        } finally {
            setIsCreatingMeeting(false);
        }
    }, [meetingData]);

    const goToNextPage = useCallback(() => {
        if (currentTab === 2) {
            submitMeetingData();
        } else {
            setCurrentTab(prevTab => prevTab + 1);
        }
    }, [currentTab, submitMeetingData]);

    const goToPreviousPage = useCallback(() => {
        setCurrentTab(prevTab => Math.max(prevTab - 1, 1));
    }, []);

    return (
        <CreateMeetingContext.Provider value={{
            meetingData,
            createMeetingData,
            submitMeetingData,
            isCreatingMeeting,
            currentTab,
            goToNextPage,
            goToPreviousPage
        }}>
            {children}
        </CreateMeetingContext.Provider>
    );
};

export const useCreateMeeting = () => {
    const context = useContext(CreateMeetingContext);

    if (!context) {
        throw new Error('useCreateMeeting must be used within an CreateMeetinngProvider');
    }
    
    return context;
}