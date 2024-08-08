'use client';

import { useRef } from 'react';
import { HiOutlineCamera } from "react-icons/hi";
import Image from 'next/image';
import { processImage } from "@/utils/imageUtils";
import LoadingSpinner from "@/components/animation/LoadingSpinner/LoadingSpinner";
import style from "./ProfilePhoto.module.css";

const ProfilePhoto = ({ children, isUploadingImage, selectedImage, setSelectedImage }) => {
    const fileInputRef = useRef();

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const { dataUrl } = await processImage(file);
        setSelectedImage(dataUrl);
    };

    const handleClick = () => {
        if (!isUploadingImage) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className={style.profilePhotoUpload}>
            <div 
                className={`${style.imageContainer} ${isUploadingImage ? style.uploading : ''}`} 
                onClick={handleClick}
            >
                <Image 
                    src={selectedImage || "/profile.png"} 
                    alt="Profile Photo" 
                    width={120} 
                    height={120} 
                    className={style.profileImage}
                />
                {isUploadingImage ? (
                    <div className={style.spinnerOverlay}>
                        <LoadingSpinner height='24px' />
                    </div>
                ) : (
                    <div className={style.overlay}>
                        <HiOutlineCamera className={style.cameraIcon} />
                    </div>
                )}
            </div>
            <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                ref={fileInputRef}
                className={style.fileInput}
                disabled={isUploadingImage}
            />
            {children}
        </div>
    );
};

export default ProfilePhoto;