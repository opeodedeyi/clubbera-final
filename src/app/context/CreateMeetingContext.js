"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter } from "next/navigation";
import { createMeeting } from "@/app/actions/createMeeting";
import { createMeetingSchema } from "@/validation";
import Alert from "@/components/alert/alert";
import { z } from "zod";

const CreateMeetingContext = createContext();

export const CreateMeetingProvider = ({ children, groupUniqueUrl }) => {
    const router = useRouter();
    const { removeQueryParam } = useQueryParams();
    const [meetingData, setMeetingData] = useState({
        title: "",
        description: "",
        date_of_meeting: "",
        time_of_meeting: "",
        duration: "0:00",
        capacity: 0,
        banner: "",
        location: "",
        lat: 0,
        lng: 0,
        location_details: "",
    });
    const [isCreatingMeeting, setIsCreatingMeeting] = useState(false);
    const [currentTab, setCurrentTab] = useState(1);
    const [validationErrors, setValidationErrors] = useState({});
    const [alert, setAlert] = useState({ show: false, type: "", message: "" });

    const closeModal = useCallback(() => {
        router.push(`?${removeQueryParam("createMeeting")}`, { scroll: false });
    }, [router, removeQueryParam]);

    const createMeetingData = useCallback((newData) => {
         const fieldName = Object.keys(newData)[0];
         setValidationErrors((prev) => {
           const newErrors = { ...prev };
           delete newErrors[fieldName];
           return newErrors;
         });
        setMeetingData((prevData) => ({ ...prevData, ...newData }));
    }, []);

    const handleAlertClose = useCallback(() => {
        setAlert((prev) => ({ ...prev, show: false }));
      }, []);

    const submitMeetingData = useCallback(async () => {
        setIsCreatingMeeting(true);
        try {
            const data = await createMeeting(groupUniqueUrl, meetingData);
            setMeetingData((prevData) => ({
                ...prevData,
                title: "",
                description: "",
                date_of_meeting: "",
                time_of_meeting: "",
                duration: "0:00",
                capacity: 0,
                banner: "",
                location: "",
                lat: 0,
                lng: 0,
                location_details: "",
            }));
            setCurrentTab(1);
            setAlert({
              show: true,
              type: "success",
              message: "Activity created successfully!",
            });
            closeModal();
        } catch (error) {
            setAlert({
              show: true,
              type: "error",
              message: "Failed to create activity. Please try again.",
            });
            throw error;
        } finally {
            setIsCreatingMeeting(false);
        }
    }, [meetingData]);

    const goToNextPage = useCallback(() => {
        try {
            if (currentTab === 1) {
                createMeetingSchema.pick({
                    title: true,
                    description: true,
                    location: true,
                    date_of_meeting: true,
                    time_of_meeting: true,
                    duration: true,
                }).parse(meetingData);
            } else if (currentTab === 2) {
                createMeetingSchema.pick({
                    banner: true,
                    capacity: true,
                    location_details: true
                }).parse(meetingData);
            }

            setValidationErrors({});

            if (currentTab === 2) {
                submitMeetingData();
            } else {
                setCurrentTab((previousTab) => previousTab + 1);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newValidationErrors = error.errors.reduce(
                    (accumulator, currentError) => {
                        accumulator[currentError.path[0]] = currentError.message;
                        return accumulator;
                    }, {}
                );
                setValidationErrors(newValidationErrors);
            }
        }
    }, [currentTab, submitMeetingData, meetingData]);

    const goToPreviousPage = useCallback(() => {
        setCurrentTab((prevTab) => Math.max(prevTab - 1, 1));
    }, []);

    return (
      <CreateMeetingContext.Provider
        value={{
          meetingData,
          createMeetingData,
          submitMeetingData,
          isCreatingMeeting,
          currentTab,
          goToNextPage,
          goToPreviousPage,
          validationErrors,
        }}
      >
        {children}
        <Alert
          type={alert.type}
          message={alert.message}
          show={alert.show}
          onClose={handleAlertClose}
        />
      </CreateMeetingContext.Provider>
    );
};

export const useCreateMeeting = () => {
    const context = useContext(CreateMeetingContext);

    if (!context) {
        throw new Error(
          "useCreateMeeting must be used within an CreateMeetinngProvider"
        );
    }

    return context;
};
