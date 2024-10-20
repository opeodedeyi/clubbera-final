"use client";

import { useState, useCallback, useEffect } from "react";
import { useCreateMeeting } from "@/app/context/CreateMeetingContext";
import MainInput from "@/components/forminput/MainInput/MainInput";
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";
import style from "./EditMeeting.module.css";

export default function EventSetup() {
    const { 
        meetingData,
        createMeetingData,
        isUploadingImage,
        validationErrors 
    } = useCreateMeeting();
    const [imageName, setImageName] = useState("");
    const [imageSize, setImageSize] = useState("");

    const handleImageUpload = useCallback((dataUrl) => {
        createMeetingData({ banner: dataUrl });
    }, [createMeetingData]);

    return (
        <div className={style.formContainer}>
            <div className={style.formContainerInner}>
                <SingleImageUpload
                    hasChange
                    isUploadingImage={isUploadingImage}
                    selectedImage={meetingData.banner}
                    setSelectedImage={handleImageUpload}
                    imageName={imageName}
                    setImageName={setImageName}
                    imageSize={imageSize}
                    setImageSize={setImageSize}>
                    Upload the meeting banner
                </SingleImageUpload>
                
                {validationErrors.banner && (
                    <span className={style.errorMessage}>{validationErrors.banner}</span>
                )}

                <MainInput
                    type="number"
                    input="what is the maximum number of people that can attend?"
                    name="quantity"
                    value={meetingData.capacity}
                    onChange={(e) => createMeetingData({ capacity: e.target.value })}
                    min={0}
                    max={1000}
                    step={1}/>

                {validationErrors.capacity && (
                    <span className={style.errorMessage}>{validationErrors.capacity}</span>
                )}

                <MainInput
                    type="textarea"
                    placeholder="Tell people how to easily find the venue"
                    input="How can people find the venue?"
                    maxLength={250}
                    value={meetingData.location_details}
                    onChange={(e) =>
                        createMeetingData({ location_details: e.target.value })
                    }/>
                    
                {validationErrors.location_details && (
                    <span className={style.errorMessage}>{validationErrors.location_details}</span>
                )}
            </div>
        </div>
    );
}
