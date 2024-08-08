'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter } from 'next/navigation';
import { createMeeting } from '@/app/actions/createMeeting';

const CreateMeetingContext = createContext();

export const CreateMeetingProvider = ({ children, groupUniqueUrl }) => {
    const router = useRouter();
    const { removeQueryParam } = useQueryParams();
    const [meetingData, setMeetingData] = useState({
        title: '',
        description: '',
        date_of_meeting: null,
        time_of_meeting: null,
        duration: null,
        capacity: null,
        banner: null,
        location: '',
        lat: null,
        lng: null,
        location_details: null,
    });
    const [isCreatingMeeting, setIsCreatingMeeting] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);

    const closeModal = useCallback(() => {
        router.push(`?${removeQueryParam('createMeeting')}`, { scroll: false });
    }, [router, removeQueryParam]);

    const createMeetingData = useCallback((newData) => {
        setMeetingData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const submitMeetingData = useCallback(async () => {
        setIsCreatingMeeting(true);
        try {
            const data = await createMeeting(groupUniqueUrl, meetingData);
            setMeetingData(prevData => ({
                ...prevData,
                title: '',
                description: '',
                date_of_meeting: null,
                time_of_meeting: null,
                duration: null,
                capacity: null,
                banner: null,
                location: '',
                lat: null,
                lng: null,
                location_details: null,
            }));
            closeModal();
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
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