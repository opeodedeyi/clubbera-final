'use client';

import { useState, useCallback, useEffect } from 'react';
import { useEditGroupContext } from '@/app/context/EditGroupContext';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import BinaryOption from "@/components/forminput/BinaryOption/BinaryOption";
import CustomTag from "@/components/forminput/CustomTag/CustomTag";
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";
import style from './DetailsSection.module.css';


const EditDetailsSection = () => {
    const { 
        groupData, 
        updateGroupData, 
        saveGroupData, 
        uploadGroupImage, 
        isUpdatingDetails, 
        isUploadingImage
    } = useEditGroupContext();
    const [selectedImage, setSelectedImage] = useState(groupData.banner);
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');

    useEffect(() => {
        setSelectedImage(groupData.banner);
    }, [groupData.banner]);

    const handleTopicClick = useCallback((topic) => {
        const newTopics = groupData.topics.includes(topic)
            ? groupData.topics.filter(t => t !== topic)
            : [...groupData.topics, topic];
        updateGroupData({ topics: newTopics });
    }, [groupData.topics, updateGroupData]);

    const handleImageChange = (newImage) => {
        setSelectedImage(newImage);
        uploadGroupImage(newImage);
    };

    const handleSubmit = async () => {
        await saveGroupData();
    };

    const isDisabled = !groupData.title || !groupData.description || !groupData.location;

    return (
        <div className={style.editDetailsContainer}>
            <div className={style.editDetailsMain}>
                <div className={style.editDetailsMainTop}>
                    <div className={style.editDetailsBasicinfo}>
                        <p className={style.editDetailsBasicinfoTitle}>BASIC INFORMATION</p>
                        <div className={style.editDetailsBasicinfoForm}>
                            <MainInput
                                type="text"
                                placeholder="Enter name" 
                                input="Group name"
                                value={groupData.title}
                                onChange={(e) => updateGroupData({ title: e.target.value })}/>

                            <MainInput
                                type="text"
                                placeholder="Enter tagline" 
                                input="Group tagline"
                                value={groupData.tagline}
                                onChange={(e) => updateGroupData({ tagline: e.target.value })}/>

                            <CityInput 
                                label="Location" 
                                placeholder="Enter city" 
                                cityLocation={groupData.location} 
                                setCityLocation={(city) => updateGroupData({ location: city })}
                                setLatLocation={(lat) => updateGroupData({ lat: lat })}
                                setLngLocation={(lng) => updateGroupData({ lng: lng })}/>

                            <MainInput
                                type="textarea"
                                placeholder="Enter description" 
                                input="Description"
                                value={groupData.description}
                                onChange={(e) => updateGroupData({ description: e.target.value })}/>
                        </div>
                    </div>
                    <div className={style.editDetailsPicturecontainer}>
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

                <div className={style.editDetailsMainBottom}>
                    <div className={style.editDetailsTags}>
                        <p className={style.editDetailsGeneralTitle}>GROUP TOPICS</p>
                        <div className={style.editDetailsTagsShell}>
                            {groupData.presetTopics.map((topic, index) => (
                                <CustomTag 
                                    key={index} 
                                    selected={groupData.topics.includes(topic) ? 'isSelected' : 'isNotSelected'} 
                                    onClick={() => handleTopicClick(topic)}
                                >
                                    {topic}
                                </CustomTag>
                            ))}
                        </div>
                    </div>
                    
                    <div className={style.editDetailsPrivacy}>
                        <p className={style.editDetailsGeneralTitle}>PRIVACY SETTINGS</p>
                        <BinaryOption 
                            boolValue={groupData.is_private} 
                            setBoolValue={(value) => updateGroupData({ is_private: value })} 
                            truthyPlaceholder="Private" 
                            falseyPlaceholder="Public" />
                    </div>
                </div>
            </div>

            <div className="editDetailsButton">
                <CustomButton 
                    onClick={handleSubmit} 
                    size="defaultButtonSize" 
                    disabled={isDisabled}
                    loading={isUpdatingDetails}
                    loadingText='Updating'>
                    Update details
                </CustomButton>
            </div>
        </div>
    );
};

export default EditDetailsSection;