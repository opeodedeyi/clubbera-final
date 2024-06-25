'use client';


import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import BinaryOption from "@/components/forminput/BinaryOption/BinaryOption";
import CustomTag from "@/components/forminput/CustomTag/CustomTag";
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";


const EditDetailsSection = ({ params, selectedImage, setSelectedImage, imageName, setImageName, imageSize, setImageSize, groupTitle, setGroupTitle, groupDescription, setGroupDescription, groupTagline, setGroupTagline, boolValue, setBoolValue, presetTopics, selectedTopics, setSelectedTopics, cityLocation, setCityLocation, latLocation, setLatLocation, lngLocation, setLngLocation, isDisabled }) => {
    const handleTopicClick = (topic) => {
        return () => {
            if (selectedTopics.includes(topic)) {
                setSelectedTopics(prevTopics => prevTopics.filter(prevTopic => prevTopic !== topic));
            } else {
                setSelectedTopics(prevTopics => [...prevTopics, topic]);
            }
        }
    };

    const handleSubmitClick = async () => {
        const response = await fetchWithTimeout(`${process.env.NEXT_PUBLIC_HOST}/api/group/update/${params.uniqueURL}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                groupTitle,
                groupDescription,
                groupTagline,
                boolValue,
                selectedTopics,
                cityLocation,
                latLocation,
                lngLocation
            })
        })

        if (response) {
            const data = await response.json();
            
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data.data.group);
            }
        }
    }

    return (
        <div className="edit-details-container">
            <div className="edit-details-main">
                <div className="edit-details-main-top">
                    <div className="edit-details-basicinfo">
                        <p className="edit-details-basicinfo-title">BASIC INFORMATION</p>
                        <div className="edit-details-basicinfo-form">
                            <MainInput
                                type="text"
                                placeholder="Enter name" 
                                input="Group name"
                                value={groupTitle}
                                onChange={(e) => setGroupTitle(e.target.value)}/>

                            <MainInput
                                type="text"
                                placeholder="Enter tagline" 
                                input="Group tagline"
                                value={groupTagline}
                                onChange={(e) => setGroupTagline(e.target.value)}/>

                            <CityInput 
                                label="Location" 
                                placeholder="Enter city" 
                                cityLocation={cityLocation} 
                                setCityLocation={setCityLocation} 
                                setLatLocation={setLatLocation}
                                setLngLocation={setLngLocation}/>

                            <MainInput
                                type="textarea"
                                placeholder="Enter desctiption" 
                                input="Description"
                                value={groupDescription}
                                onChange={(e) => setGroupDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="edit-details-picturecontainer">
                        <SingleImageUpload
                            hasChange
                            selectedImage={selectedImage}
                            setSelectedImage={setSelectedImage}
                            imageName={imageName}
                            setImageName={setImageName}
                            imageSize={imageSize}
                            setImageSize={setImageSize}/>
                    </div>
                </div>

                <div className="edit-details-main-bottom">
                    <div className="edit-details-tags">
                        <p className="edit-details-general-title">GROUP TOPICS</p>
                        <div className="edit-details-tags-shell">
                            {presetTopics.map((topic, index) => (
                                <CustomTag key={index} selected={selectedTopics.includes(topic) ? 'isSelected' : 'isNotSelected'} onClick={handleTopicClick(topic)}>
                                    {topic}
                                </CustomTag>
                            ))}
                        </div>
                    </div>
                    
                    <div className="edit-details-privacy">
                        <p className="edit-details-general-title">PRIVACY SETTINGS</p>
                        <BinaryOption 
                            boolValue={boolValue} 
                            setBoolValue={setBoolValue} 
                            truthyPlaceholder="Private" 
                            falseyPlaceholder="Public" />
                    </div>
                </div>
            </div>

            <div className="edit-details-button">
                <CustomButton onClick={handleSubmitClick} size="defaultButtonSize" disabled={isDisabled}>Update details</CustomButton>
            </div>
        </div>
    )
};

export default EditDetailsSection;
