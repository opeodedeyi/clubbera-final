"use client";

import { useEditMeeting } from '@/app/context/EditMeetingContext';
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import MainInput from "@/components/forminput/MainInput/MainInput";
import AddressInput from "@/components/forminput/LocationInput/AddressInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import TimeInput from "@/components/forminput/TimeInput/TimeInput";
import DurationInput from '@/components/forminput/DurationInput/DurationInput';
import style from "./EditMeeting.module.css";


export default function BasicDetails() {
    const { meetingData, updateMeetingData, validationErrors } =
      useEditMeeting();

    return (
        <div className={style.formContainer}>
            <div className={style.formContainerInner}>
                <MainInput 
                    input="Title" 
                    placeholder="Enter event title"
                    value={meetingData.title}
                    onChange={(e) => updateMeetingData({ title: e.target.value})}/>
                 {validationErrors.title && (
                    <span className={style.errorMessage}>{validationErrors.title}</span>
                )}

                <MainInput
                    type="textarea"
                    placeholder="Tell people about the event" 
                    input="Description"
                    value={meetingData.description}
                    onChange={(e) => updateMeetingData({ description: e.target.value})}/>
                    
                {validationErrors.description && (
                    <span className={style.errorMessage}>{validationErrors.description}</span>
                )}

                <AddressInput
                    label="Location"
                    placeholder="Enter Location"
                    cityLocation={meetingData.location}
                    setCityLocation={(location) => updateMeetingData({ location: location })}
                    setLatLocation={(lat) => updateMeetingData({ lat: lat })}
                    setLngLocation={(lng) => updateMeetingData({ lng: lng })}/>

                {validationErrors.location && (
                    <span className={style.errorMessage}>{validationErrors.location}</span>
                )}

                <TwoColumnLayout>
                    <DateInput
                        label="Date of meeting?"
                        name="date_of_meeting"
                        value={meetingData.date_of_meeting}
                        onChange={(e) => updateMeetingData({ date_of_meeting: e.target.value})} />

                     {validationErrors.date_of_meeting && (
                            <span className={style.errorMessage}>{validationErrors.date_of_meeting}</span>
                        )}

                    <TimeInput
                        label="Time"
                        name="time_of_meeting"
                        value={meetingData.time_of_meeting}
                        onChange={(e) => updateMeetingData({ time_of_meeting: e.target.value})} />

                     {validationErrors.time_of_meeting && (
                            <span className={style.errorMessage}>{validationErrors.time_of_meeting}</span>
                        )}
                </TwoColumnLayout>

                <DurationInput
                    label="How long is the meeting?"
                    name="duration"
                    value={meetingData.duration}
                    onChange={(value) => updateMeetingData({ duration: value })} />

                 {validationErrors.duration && (
                    <span className={style.errorMessage}>{validationErrors.duration}</span>
                )}
            </div>
        </div>
    );
}