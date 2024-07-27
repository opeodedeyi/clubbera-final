'use client';

import { useState, useCallback, useEffect } from 'react';
import { useEditMeeting } from '@/app/context/EditMeetingContext';
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";
import style from "./EditMeeting.module.css";

export default function EventSetup() {
    const { 
        meetingData,
        uploadMeetingImage,
        isUploadingImage,
    } = useEditMeeting();
    const [selectedImage, setSelectedImage] = useState(meetingData.banner);
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');

    useEffect(() => {
        setSelectedImage(meetingData.banner);
    }, [meetingData.banner]);

    const handleImageChange = (newImage) => {
        setSelectedImage(newImage);
        uploadMeetingImage(newImage);
    };

    return (
        <div className={style.formContainer}>
            <div className={style.formContainerInner}>
                <SingleImageUpload
                    hasChange
                    isUploadingImage={isUploadingImage}
                    selectedImage={selectedImage}
                    setSelectedImage={handleImageChange}
                    imageName={imageName}
                    setImageName={setImageName}
                    imageSize={imageSize}
                    setImageSize={setImageSize}/>
            </div>
        </div>
    );
}