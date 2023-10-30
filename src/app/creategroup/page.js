'use client';

import { Fragment } from "react";
import Header from "../../components/header/header";
import MainInput from "../../components/forminput/maininput";
import MainPasswordInput from "../../components/forminput/passwordinput";
import CustomButton from "../../components/utility/custombutton";
import "../style/authentication.css";

import { useState } from 'react';


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

const CreateGroupStepTwo = () => {
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
                    {/* <MainInput
                        type="text"
                        placeholder="Enter full name" 
                        input="Full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}/> */}
                    
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
                <div className="auth-form-inputs">
                    <MainInput
                        type="text"
                        placeholder="Enter title" 
                        input="Full name"
                        value={groupTitle}
                        onChange={(e) => setGroupTitle(e.target.value)}/>

                    <MainInput
                        type="text"
                        placeholder="Enter desctiption" 
                        input="Description"
                        value={groupDescription}
                        onChange={(e) => setGroupDescription(e.target.value)}/>
                    
                </div>
            </div>
        </>
    );
}

export default function CreateGroup() {
    const [step, setStep] = useState(1);
    const [fullName, setFullName] = useState("");
    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");

    const handleNext = (event) => {
        event.preventDefault();
        setStep(step + 1)
    };
  
    return (
        <Fragment>
            <Header />

            <div className="auth-container">
                <form className="auth-container-main">
                    
                    {/* {step === 0 && <StepPre />} */}
                    {step === 1 && <CreateGroupStepOne fullName={fullName} setFullName={setFullName} />}
                    {step === 2 && <CreateGroupStepTwo />}
                    {step === 3 && <CreateGroupStepThree groupTitle={groupTitle} setGroupTitle={setGroupTitle} groupDescription={groupDescription} setGroupDescription={setGroupDescription} />}
                    {/* {step === 4 && <StepFour />}
                    {step === 5 && <StepFive />}
                    {step === 6 && <StepPost uniqueURL={uniqueURL} />} */}

                    <div className="auth-form-actions-two">
                        <CustomButton size="normal-size" onClick={(e) => handleNext(e)}>Proceed</CustomButton>
                    </div>
                </form>
            </div>
        </Fragment>
    )
}
  