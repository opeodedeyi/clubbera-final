'use client';

import { useState } from "react";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CustomButton from '@/components/utility/CustomButton/CustomButton';
import style from "./ContactForm.module.css";


export default function ContactForm() {
    const [meetingData, setMeetingData] = useState({
        title: "",
        location_details: "",
    });

    const updateMeetingData = (data) => {
        setMeetingData({ ...meetingData, ...data });
    };

    const submitContactData = () => {
        console.log(meetingData);
    };

    return (
        <form className={style.formContainer}>
            <MainInput 
                input="Subject" 
                placeholder="What is the title of your message"
                value={meetingData.title}
                onChange={(e) => updateMeetingData({ title: e.target.value})}/>

            <MainInput
                type="textarea"
                placeholder="Tell us anything you want to share" 
                input="How we can help you"
                value={meetingData.location_details}
                onChange={(e) => updateMeetingData({ location_details: e.target.value})}/>

            <CustomButton onClick={submitContactData} size='fullwidthSize'>
                Submit
            </CustomButton>
            {/* {validationErrors.location_details && (
                <span className={style.errorMessage}>{validationErrors.location_details}</span>
            )} */}
        </form>
    );
}