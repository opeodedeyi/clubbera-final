'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { updateMeeting, updateMeetingImage } from '@/app/actions/updateMeeting';

const EditMeetingContext = createContext();

export const EditMeetingProvider = ({ children, meeting }) => {
    const [meetingData, setMeetingData] = useState({
        id: meeting.id || 0,
        unique_url: meeting.unique_url,
        title: meeting.title,
        description: meeting.description || '',
        date_of_meeting: meeting.date_of_meeting,
        time_of_meeting: meeting.time_of_meeting,
        duration: meeting.duration,
        capacity: meeting.capacity,
        location: meeting.location,
        location_details: meeting.location_details,
        lat: meeting.lat,
        lng: meeting.lng,
        banner: meeting.banner,
    });
    const [isUpdatingMeeting, setIsUpdatingMeeting] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [currentTab, setCurrentTab] = useState("basicDetails");

    const updateMeetingData = useCallback((newData) => {
        setMeetingData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const submitMeetingData = useCallback(async () => {
        setIsUpdatingMeeting(true);
        try {
            if (currentTab === 'basicDetails') {
                const result = await updateMeeting(meetingData.unique_url, meetingData);
                return result;
            } else if (currentTab === 'eventSetup') {
                const result = await updateMeeting(meetingData.unique_url, meetingData);
                return result;
            }
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        } finally {
            setIsUpdatingMeeting(false);
        }
    }, [meetingData, meeting.unique_url, currentTab]);

    const uploadMeetingImage = useCallback(async (imageData) => {
        setIsUploadingImage(true);
        try {
            const result = await updateMeetingImage(meetingData.unique_url, { banner: imageData });
            setMeetingData(prevData => ({ ...prevData, banner: imageData }));
            return result;
        } catch (error) {
            console.error('Error uploading group image:', error);
            throw error;
        } finally {
            setIsUploadingImage(false);
        }
    }, [meeting.unique_url, updateMeetingData]);

    return (
        <EditMeetingContext.Provider value={{
            meetingData,
            updateMeetingData,
            submitMeetingData,
            uploadMeetingImage,
            isUpdatingMeeting,
            isUploadingImage,
            currentTab,
            setCurrentTab
        }}>
            {children}
        </EditMeetingContext.Provider>
    );
};

export const useEditMeeting = () => {
    const context = useContext(EditMeetingContext);

    if (!context) {
        throw new Error('useEditUser must be used within an EditUserProvider');
    }
    
    return context;
}