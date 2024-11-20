'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { updateMeeting, updateMeetingImage } from '@/app/actions/updateMeeting';
import { editMeetingSchema } from "@/validation";
import Alert from "@/components/alert/alert";
import { z } from "zod";

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
    const [validationErrors, setValidationErrors] = useState({});
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const updateMeetingData = useCallback((newData) => {
           const fieldName = Object.keys(newData)[0];
           setValidationErrors((prev) => {
             const newErrors = { ...prev };
             delete newErrors[fieldName];
             return newErrors;
           });
        setMeetingData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const handleAlertClose = useCallback(() => {
      setAlert((prev) => ({ ...prev, show: false }));
    }, []);

    const submitMeetingData = useCallback(async () => {
        setIsUpdatingMeeting(true);
        try {
            if (currentTab === 'basicDetails') {
                 editMeetingSchema
                   .pick({
                     title: true,
                     description: true,
                     location: true,
                     date_of_meeting: true,
                     time_of_meeting: true,
                     duration: true,
                   })
                   .parse(meetingData);
                const result = await updateMeeting(meetingData.unique_url, meetingData);
                return result;
            } else if (currentTab === 'eventSetup') {
                 editMeetingSchema
                   .pick({
                     capacity: true,
                     banner: true,
                     location_details: true,
                   })
                   .parse(meetingData);
                const result = await updateMeeting(meetingData.unique_url, meetingData);
                 setAlert({
                   show: true,
                   type: "success",
                   message: "Activity updated successfully!",
                 });
                return result;
            }
        } catch (error) {
           if (error instanceof z.ZodError) {
             const newValidationErrors = error.errors.reduce(
               (accumulator, currentError) => {
                 accumulator[currentError.path[0]] = currentError.message;
                 return accumulator;
               },
               {}
             );
             setValidationErrors(newValidationErrors);
           } else {
             setAlert({
               show: true,
               type: "error",
               message: "Error updating activity data. Please try again.",
             });
           }
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
            setCurrentTab,
            validationErrors
        }}>
        <Alert
           type={alert.type}
           message={alert.message}
           show={alert.show}
           onClose={handleAlertClose}
        />
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