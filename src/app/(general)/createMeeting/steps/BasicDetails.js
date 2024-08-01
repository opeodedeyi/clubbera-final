"use client";

import { useCreateMeeting } from '@/app/context/CreateMeetingContext';
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import MainInput from "@/components/forminput/MainInput/MainInput";
import AddressInput from "@/components/forminput/LocationInput/AddressInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import TimeInput from "@/components/forminput/TimeInput/TimeInput";
import DurationInput from '@/components/forminput/DurationInput/DurationInput';
import style from "./EditMeeting.module.css";


export default function BasicDetails() {
    const { 
        meetingData,
        createMeetingData,
    } = useCreateMeeting();

    return (
        <div className={style.formContainer}>
            <div className={style.formContainerInner}>
                <MainInput 
                    input="Title" 
                    placeholder="Enter event title"
                    value={meetingData.title}
                    onChange={(e) => createMeetingData({ title: e.target.value})}/>

                <MainInput
                    type="textarea"
                    placeholder="Tell people about the event" 
                    input="Description"
                    value={meetingData.description}
                    onChange={(e) => createMeetingData({ description: e.target.value})}/>

                <AddressInput
                    label="Location"
                    placeholder="Enter Location"
                    cityLocation={meetingData.location}
                    setCityLocation={(location) => createMeetingData({ location: location })}
                    setLatLocation={(lat) => createMeetingData({ lat: lat })}
                    setLngLocation={(lng) => createMeetingData({ lng: lng })}/>

                <TwoColumnLayout>
                    <DateInput
                        label="Date of meeting?"
                        name="date_of_meeting"
                        value={meetingData.date_of_meeting}
                        onChange={(e) => createMeetingData({ date_of_meeting: e.target.value})} />

                    <TimeInput
                        label="Time"
                        name="time_of_meeting"
                        value={meetingData.time_of_meeting}
                        onChange={(e) => createMeetingData({ time_of_meeting: e.target.value})} />
                </TwoColumnLayout>

                <DurationInput
                    label="How long is the meeting?"
                    name="duration"
                    value={meetingData.duration}
                    onChange={(value) => createMeetingData({ duration: value })} />
            </div>
        </div>
    );
}