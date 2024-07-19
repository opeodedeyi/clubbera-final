'use client';

import { useCreateGroup } from '@/app/context/CreateGroupContext';
import BinaryOption from "@/components/forminput/BinaryOption/BinaryOption";
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";
import style from "../CreateGroup.module.css";


export default function CreateGroupStepFour() {
    const { 
        isPrivate, setIsPrivate, 
        selectedImage, setSelectedImage, 
        imageName, setImageName, 
        imageSize, setImageSize 
    } = useCreateGroup();

    return (
        <div className={style.authFormContent}>
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>Complete setup</h3>
                    <p className={style.authFormContentIntroText}>Configure the privacy settings and upload an image that best describes your group.</p>
                </div>
            </div>
            <div className={style.authFormInputs}>
                <BinaryOption 
                    boolValue={isPrivate} 
                    setBoolValue={setIsPrivate} 
                    truthyPlaceholder="Private" 
                    falseyPlaceholder="Public"
                >
                    Is this group a Private or Public Group?
                </BinaryOption>

                <SingleImageUpload
                    selectedImage={selectedImage}
                    setSelectedImage={setSelectedImage}
                    imageName={imageName}
                    setImageName={setImageName}
                    imageSize={imageSize}
                    setImageSize={setImageSize}
                >
                    Upload image
                </SingleImageUpload>
            </div>
        </div>
    );
}