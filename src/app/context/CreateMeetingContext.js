"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter } from "next/navigation";
import { createMeeting } from "@/app/actions/createMeeting";
import { createMeetingSchema } from "@/validation";
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
    duration: "",
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

  const closeModal = useCallback(() => {
    router.push(`?${removeQueryParam("createMeeting")}`, { scroll: false });
  }, [router, removeQueryParam]);

  const createMeetingData = useCallback((newData) => {
    setMeetingData((prevData) => ({ ...prevData, ...newData }));
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
        duration: "",
        capacity: 0,
        banner: "",
        location: "",
        lat: 0,
        lng: 0,
        location_details: "",
      }));
      closeModal();
    } catch (error) {
      console.error("Error saving user data:", error);
      throw error;
    } finally {
      setIsCreatingMeeting(false);
    }
  }, [meetingData]);

  const goToNextPage = useCallback(() => {
    console.log("Meeting Data:", meetingData);
    console.log("Current Tab:", currentTab);

    try {
      if (currentTab === 1) {
        createMeetingSchema
          .pick({
            title: true,
            description: true,
            location: true,
            date_of_meeting: true,
            time_of_meeting: true,
            duration: true,
          })
          .parse(meetingData);
      } else if (currentTab === 2) {
        createMeetingSchema
          .pick({ banner: true, capacity: true, location_details: true })
          .parse(meetingData);
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
          },
          {}
        );
        console.log("Validation Errors:", newValidationErrors);
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
