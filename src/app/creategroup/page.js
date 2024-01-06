'use client';

import { Fragment } from "react";
import AltHeader from "../../components/header/altheader";
import CityInput from "../../components/forminput/cityinput";
import MainInput from "../../components/forminput/maininput";
import BinaryOptionInput from "../../components/forminput/binaryoptioninput";
import SingleImageUploadInput from "../../components/forminput/singleimageuploadinput";
import CustomTag from "../../components/forminput/customtag";
import MainTip from "../../components/utility/maintip";
import CustomButton from "../../components/utility/custombutton";
import "../style/authentication.css";

import { useState } from 'react';


const IntroStep = ({ onClick }) => {
    return (
        <>
            <div className="auth-form-content-center">
                <div className="auth-community-created-image">
                    <img src="/create_community.svg" alt="community created" />
                </div>
                
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Welcome to Clubbera! Create your community now.</h3>
                        <p className="auth-form-content-intro-text">Create your community in four (4) simple steps: Choose a location, select topics, add description and other key details, and you&apos;re done!</p>
                    </div>
                </div>

                <div className="auth-form-content-column">
                    <CustomButton size="fullwidth-size" onClick={onClick}>Create now</CustomButton>
                    <CustomButton link destination='/' coloring="button-nobutton-coloring" size="button-nobutton-size">Skip</CustomButton>
                </div>
            </div>
        </>
    );
}

const CreateGroupStepOne = ({ cityLocation, setCityLocation, setLatLocation, setLngLocation }) => {
    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>First, set your location for your group</h3>
                        <p className="auth-form-content-intro-text">Begin with setting your location to help us connect with people in your area.</p>
                    </div>
                </div>
                <div className="auth-form-inputs">
                    <CityInput 
                        label="Location" 
                        placeholder="Enter city" 
                        cityLocation={cityLocation} 
                        setCityLocation={setCityLocation} 
                        setLatLocation={setLatLocation}
                        setLngLocation={setLngLocation}/>
                </div>
            </div>
        </>
    );
}

const CreateGroupStepTwo = ({ presetTopics, selectedTopics, setSelectedTopics }) => {
    const handleTopicClick = (topic) => {
        return () => {
            if (selectedTopics.includes(topic)) {
                setSelectedTopics(prevTopics => prevTopics.filter(prevTopic => prevTopic !== topic));
            } else {
                setSelectedTopics(prevTopics => [...prevTopics, topic]);
            }
        }
    };

    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Choose topics for your group</h3>
                        <p className="auth-form-content-intro-text">Set the topics for your group, select at least 3 topics before moving onto the next step.</p>
                    </div>
                </div>
                <div className="auth-form-inputs">
                    {/* searchbar */}
                    
                    <div className="auth-form-tags">
                        {presetTopics.map((topic, index) => (
                            <CustomTag key={index} selected={selectedTopics.includes(topic) ? 'is-selected' : 'is-not-selected'} onClick={handleTopicClick(topic)}>
                                {topic}
                            </CustomTag>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

const CreateGroupStepThree = ({ groupTitle, setGroupTitle, groupDescription, setGroupDescription }) => {
    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Describe group</h3>
                        <p className="auth-form-content-intro-text">Choose a name that will give people a clear idea of what the group is about. You can edit this later if you change your mind.</p>
                    </div>
                </div>
                <MainTip theme="default-theme">We value human connection and review groups to ensure they meet our guidelines. Consider your group&apos;s goal, audience, and event activities.</MainTip>
                <div className="auth-form-inputs">
                    <MainInput
                        type="text"
                        placeholder="Enter name" 
                        input="Group name"
                        value={groupTitle}
                        onChange={(e) => setGroupTitle(e.target.value)}/>

                    <MainInput
                        type="textarea"
                        placeholder="Enter desctiption" 
                        input="Description"
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}/>
                    
                </div>
            </div>
        </>
    );
}

const CreateGroupStepFour = ({ boolValue, setBoolValue, selectedImage, setSelectedImage, imageName, setImageName, imageSize, setImageSize }) => {
    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Complete setup</h3>
                        <p className="auth-form-content-intro-text">Configure the privacy settings and upload an image that best describes your group.</p>
                    </div>
                </div>
                <div className="auth-form-inputs">
                    <BinaryOptionInput boolValue={boolValue} setBoolValue={setBoolValue} truthyPlaceholder="Private" falseyPlaceholder="Public">Is this group a Private or Public Group?</BinaryOptionInput>

                    <SingleImageUploadInput
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        imageName={imageName}
                        setImageName={setImageName}
                        imageSize={imageSize}
                        setImageSize={setImageSize}>
                        Upload image
                    </SingleImageUploadInput>
                </div>
            </div>
        </>
    );
}

const FinishStep = ({groupTitle}) => {
    return (
        <>
            <div className="auth-form-content-center">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Your group is all set up 🎉</h3>
                        <p className="auth-form-content-intro-text">Congratulations. You have successfully created a community group - &lsquo;{groupTitle}&rsquo;. Kindly proceed to your dashboard</p>
                    </div>
                </div>

                <div className="auth-community-created-image">
                    <img src="/community_created.svg" alt="community created" />
                </div>
                
                <CustomButton link destination="/" size="fullwidth-size">Go to Dashboard</CustomButton>
            </div>
        </>
    );
}

export default function CreateGroup() {
    const [step, setStep] = useState(0);
    const [presetTopics, setPresetTopics] = useState(["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]);
    const [topicSearch, setTopicSearch] = useState("");
    const [cityLocation, setCityLocation] = useState("");
    const [latLocation, setLatLocation] = useState("");
    const [lngLocation, setLngLocation] = useState("");
    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [isPrivate, setIsPrivate] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');

    const handleNext = (event) => {
        if (step < 5) {
            setStep(step + 1)
        } else {
            console.log("go to homepage or something");
        }
    };

    const disableNextPage = () => {
        switch (step) {
            case 1:
                return !cityLocation || !latLocation || !lngLocation;
            case 2:
                return selectedTopics.length === 0;
            case 3:
                return !groupTitle || !groupDescription;
            case 4:
                return isPrivate === null;
            default:
                return false;
        }
    };

    const backButtonClicked = () => {
        if (step < 2) {
            console.log("go back to previous page");
        } else if (step === 5) {
            console.log("go back to home page");
        } else {
            setStep(prevStep => prevStep - 1);
        }
    };
  
    return (
        <Fragment>
            <AltHeader progress={step} backButtonClicked={backButtonClicked}>Back</AltHeader>

            <div className="auth-container create-group-container">
                <form className="auth-container-main">
                    {step === 0 && <IntroStep 
                                        onClick={handleNext}/>}
                    {step === 1 && <CreateGroupStepOne 
                                        cityLocation={cityLocation}
                                        setCityLocation={setCityLocation} 
                                        setLatLocation={setLatLocation}
                                        setLngLocation={setLngLocation} />}
                    {step === 2 && <CreateGroupStepTwo 
                                        presetTopics={presetTopics} 
                                        setPresetTopics={setPresetTopics} 
                                        selectedTopics={selectedTopics} 
                                        setSelectedTopics={setSelectedTopics} />}
                    {step === 3 && <CreateGroupStepThree 
                                        groupTitle={groupTitle} 
                                        setGroupTitle={setGroupTitle} 
                                        groupDescription={groupDescription} 
                                        setGroupDescription={setGroupDescription} />}
                    {step === 4 && <CreateGroupStepFour
                                        boolValue={isPrivate}
                                        setBoolValue={setIsPrivate}
                                        selectedImage={selectedImage}
                                        setSelectedImage={setSelectedImage}
                                        imageName={imageName}
                                        setImageName={setImageName}
                                        imageSize={imageSize}
                                        setImageSize={setImageSize} />}
                    {step === 5 && <FinishStep 
                                        groupTitle={groupTitle} />}

                    {step > 0 && step < 5 &&
                        <div className="auth-form-actions-two">
                            <CustomButton size="normal-size" onClick={handleNext} disabled={disableNextPage()}>
                                {step < 4 ? 'Proceed' : 'Complete'}
                            </CustomButton>
                        </div>
                    }
                </form>
            </div>
        </Fragment>
    )
}
  