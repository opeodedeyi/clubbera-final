'use client';

import { useState } from 'react';
import CustomButton from '@/components/utility/CustomButton/CustomButton'
import style from './CreateMeeting.module.css';


export default function CreateMeeting() {
    const [step, setStep] = useState(1);

    return (
        <>
            <div className={style.createHeaderContainer}>
                <div className={style.createMeetingText}>
                    <h4>Add new meeting</h4>
                    <p>Create a new meeting for your community</p>
                </div>

                <CustomButton size='defaultButtonSize'>
                    Create
                </CustomButton>
            </div>

            <div className={style.formContainer}>
                <form className={style.formContent}>

                </form>
            </div>
        </>
    );
}