"use client";

import { useEditMeeting } from '@/app/context/EditMeetingContext';
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import MainInput from "@/components/forminput/MainInput/MainInput";
import AddressInput from "@/components/forminput/LocationInput/AddressInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import TimeInput from "@/components/forminput/TimeInput/TimeInput";
import style from "./EditMeeting.module.css";

export default function BasicDetails() {
    const { 
        meetingData,
        updateMeetingData,
    } = useEditMeeting();

    return (
        <div className={style.formContainer}>
            <div className={style.formContainerInner}>
                <MainInput 
                    input="Title" 
                    placeholder="Enter event title"
                    value={meetingData.title}
                    onChange={(e) => updateMeetingData({ title: e.target.value})}/>

                <MainInput
                    type="textarea"
                    placeholder="Tell people about the event" 
                    input="Description"
                    value={meetingData.description}
                    onChange={(e) => updateMeetingData({ description: e.target.value})}/>

                <AddressInput
                    label="Location"
                    placeholder="Enter Location"
                    cityLocation={meetingData.location}
                    setCityLocation={(location) => updateMeetingData({ location: location })}
                    setLatLocation={(lat) => updateMeetingData({ lat: lat })}
                    setLngLocation={(lng) => updateMeetingData({ lng: lng })}/>

                <TwoColumnLayout>
                    <DateInput
                        label="Date"
                        name="date_of_meeting"
                        value={meetingData.date_of_meeting}
                        onChange={(e) => updateMeetingData({ date_of_meeting: e.target.value})} />

                    <TimeInput
                        label="Time"
                        name="time_of_meeting"
                        value={meetingData.time_of_meeting}
                        onChange={(e) => updateMeetingData({ time_of_meeting: e.target.value})} />
                </TwoColumnLayout>
            </div>
        </div>
    );
}