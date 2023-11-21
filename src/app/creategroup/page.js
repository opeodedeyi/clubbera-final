'use client';

import { Fragment } from "react";
import AltHeader from "../../components/header/altheader";
import MainInput from "../../components/forminput/maininput";
import CustomTag from "../../components/forminput/customtag";
import MainTip from "../../components/utility/maintip";
import CustomButton from "../../components/utility/custombutton";
import "../style/authentication.css";

import { useState } from 'react';


const IntroStep = ({ onClick }) => {
    return (
        <>
            <div className="auth-form-content-center">
                <div className="auth-create-community-image">
                </div>
                
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Welcome to Clubbera! Create your community now.</h3>
                        <p className="auth-form-content-intro-text">Create your community in four (4) simple steps: Choose a location, select topics, add description and other key details, and you're done!</p>
                    </div>
                </div>

                <CustomButton size="fullwidth-size" onClick={onClick}>Create now</CustomButton>
            </div>
        </>
    );
}

const CreateGroupStepOne = ({ fullName, setFullName }) => {
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
                    <MainInput
                        type="text"
                        placeholder="Enter full name" 
                        input="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}/>
                    
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
                </div>
                
                <CustomButton link destination="/" size="normal-size">Go to Dashboard</CustomButton>
            </div>
        </>
    );
}

export default function CreateGroup() {
    const [step, setStep] = useState(0);
    const [presetTopics, setPresetTopics] = useState(["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]);
    const [topicSearch, setTopicSearch] = useState("");
    const [fullName, setFullName] = useState("");
    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);

    const handleNext = (event) => {
        if (step < 5) {
            setStep(step + 1)
        } else {
            console.log("go to homepage or something");
        }
    };

    const backButtonClicked = () => {
        if (step === 1) {
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
                                        fullName={fullName} 
                                        setFullName={setFullName} />}
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
                    {/* {step === 4 && <StepFour />} */}
                    {step === 5 && <FinishStep 
                                        groupTitle={groupTitle} />}

                    {step > 0 && step < 5 &&
                        <div className="auth-form-actions-two">
                            <CustomButton size="normal-size" onClick={handleNext}>Proceed</CustomButton>
                        </div>
                    }
                </form>
            </div>
        </Fragment>
    )
}
  