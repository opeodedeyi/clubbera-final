'use client';

import { fetchWithTimeout } from "@/utils/fetchWithTimeout";
import { Fragment, useState } from "react";
import CreateGroupHeader from "@/components/header/CreateGroupHeader/CreateGroupHeader";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import MainInput from "@/components/forminput/MainInput/MainInput";
import BinaryOption from "@/components/forminput/BinaryOption/BinaryOption";
import SingleImageUpload from "@/components/forminput/ImageUpload/SingleImageUpload";
import CustomTag from "@/components/forminput/CustomTag/CustomTag";
import MainTip from "@/components/utility/MainTip/MainTip";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { useRouter } from 'next/navigation'
import style from "./CreateGroup.module.css";


const IntroStep = ({ onClick }) => {
    return (
        <>
            <div className={style.authFormContentCenter}>
                <div className={style.authCommunityCreatedImage}>
                    <img src="/create_community.svg" alt="community created" />
                </div>
                
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Welcome to Clubbera! Create your community now.</h3>
                        <p className={style.authFormContentIntroText}>Create your community in four (4) simple steps: Choose a location, select topics, add description and other key details, and you&apos;re done!</p>
                    </div>
                </div>

                <div className={style.authFormContentColumn}>
                    <CustomButton size="fullwidthSize" onClick={onClick}>Create now</CustomButton>
                    <CustomButton link destination='/' coloring="buttonNobuttonColoring" size="buttonNobuttonSize">Go back</CustomButton>
                </div>
            </div>
        </>
    );
}

const CreateGroupStepOne = ({ cityLocation, setCityLocation, setLatLocation, setLngLocation }) => {
    return (
        <>
            <div className={style.authFormContent}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>First, set your location for your group</h3>
                        <p className={style.authFormContentIntroText}>Begin with setting your location to help us connect with people in your area.</p>
                    </div>
                </div>
                <div className={style.authFormInputs}>
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
            <div className={style.authFormContent}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Choose topics for your group</h3>
                        <p className={style.authFormContentIntroText}>Set the topics for your group, select at least 3 topics before moving onto the next step.</p>
                    </div>
                </div>
                <div className={style.authFormInputs}>
                    {/* searchbar */}
                    
                    <div className={style.authFormTags}>
                        {presetTopics.map((topic, index) => (
                            <CustomTag key={index} selected={selectedTopics.includes(topic) ? 'isSelected' : 'isNotSelected'} onClick={handleTopicClick(topic)}>
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
            <div className={style.authFormContent}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Describe group</h3>
                        <p className={style.authFormContentIntroText}>Choose a name that will give people a clear idea of what the group is about. You can edit this later if you change your mind.</p>
                    </div>
                </div>
                <MainTip theme="defaultTheme">We value human connection and review groups to ensure they meet our guidelines. Consider your group&apos;s goal, audience, and event activities.</MainTip>
                <div className={style.authFormInputs}>
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
            <div className={style.authFormContent}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Complete setup</h3>
                        <p className={style.authFormContentIntroText}>Configure the privacy settings and upload an image that best describes your group.</p>
                    </div>
                </div>
                <div className={style.authFormInputs}>
                    <BinaryOption boolValue={boolValue} setBoolValue={setBoolValue} truthyPlaceholder="Private" falseyPlaceholder="Public">Is this group a Private or Public Group?</BinaryOption>

                    <SingleImageUpload
                        selectedImage={selectedImage}
                        setSelectedImage={setSelectedImage}
                        imageName={imageName}
                        setImageName={setImageName}
                        imageSize={imageSize}
                        setImageSize={setImageSize}>
                        Upload image
                    </SingleImageUpload>
                </div>
            </div>
        </>
    );
}

const FinishStep = ({ groupTitle, groupLink }) => {
    return (
        <>
            <div className={style.authFormContentCenter}>
                <div className={style.authFormContentMain}>
                    <div className={style.authFormContentIntro}>
                        <h3>Your group is all set up 🎉</h3>
                        <p className={style.authFormContentIntroText}>Congratulations. You have successfully created a community group - &lsquo;{groupTitle}&rsquo;. Kindly proceed to your dashboard</p>
                    </div>
                </div>

                <div className={style.authCommunityCreatedImage}>
                    <img src="/community_created.svg" alt="community created" />
                </div>
                
                <CustomButton link destination={`/group/${groupLink}/edit`} size="fullwidthSize">See my Group</CustomButton>
            </div>
        </>
    );
}

export default function CreateGroup() {
    const router = useRouter();
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const [presetTopics, setPresetTopics] = useState(["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]);
    const [topicSearch, setTopicSearch] = useState("");
    const [cityLocation, setCityLocation] = useState("");
    const [latLocation, setLatLocation] = useState("");
    const [lngLocation, setLngLocation] = useState("");
    const [groupTitle, setGroupTitle] = useState("");
    const [groupLink, setGroupLink] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [selectedTopics, setSelectedTopics] = useState([]);
    const [isPrivate, setIsPrivate] = useState(null);
    const [selectedImage, setSelectedImage] = useState('');
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');

    const handleNext = async (event) => {
        if (step < 4) {
            setStep(step + 1)
        } else if (step === 4) {
            setLoading(true);
            const response = await fetchWithTimeout(`${process.env.NEXT_PUBLIC_HOST}/api/group/create`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    cityLocation,
                    latLocation,
                    lngLocation,
                    groupTitle,
                    groupDescription,
                    selectedTopics,
                    isPrivate,
                    selectedImage
                })
            })
            
            if (response) {
                const data = await response.json();
                
                if (data.error) {
                    console.log(data.error);
                    setLoading(false);
                } else {
                    setGroupLink(data.data.group.unique_url);
                    setStep(step + 1);
                }
            }
        } else {
            router.push('/');
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
            router.back();
        } else if (step === 5) {
            router.push('/');
        } else {
            setStep(prevStep => prevStep - 1);
        }
    };
  
    return (
        <Fragment>
            <CreateGroupHeader progress={step} backButtonClicked={backButtonClicked}>Back</CreateGroupHeader>

            <div className={`${style.authContainer} ${style.createGroupContainer}`}>
                <form className={style.authContainerMain}>
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
                                        groupTitle={groupTitle}
                                        groupLink={groupLink} />}

                    {step > 0 && step < 5 &&
                        <div className={style.authFormActionsTwo}>
                            <CustomButton size="normalSize" onClick={handleNext} disabled={disableNextPage()}>
                                {step < 4 ? 'Proceed' : 'Complete'}
                            </CustomButton>
                        </div>
                    }
                </form>
            </div>
        </Fragment>
    )
}
  