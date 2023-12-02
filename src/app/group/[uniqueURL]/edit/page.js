'use client';

import Header from "../../../../components/header/header";
import MainInput from "../../../../components/forminput/maininput";
import BinaryOptionInput from "../../../../components/forminput/binaryoptioninput";
import CustomTag from "../../../../components/forminput/customtag";
import SingleImageUploadInput from "../../../../components/forminput/singleimageuploadinput";
import MainFooter from "../../../../components/footer/mainfooter";
import CustomButton from "../../../../components/utility/custombutton";
import '../../../style/editgroup.css';
import { truncateTextWithDot } from '@/utils/textUtils';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const RequestTableRow = ({ name, location, time, gender, email }) => {
    return (
        <tr>
            <td className="edit-general-table-name-alt">
                <div className="edit-general-table-image-alt">
                    <img src="/profile_image.png" alt="profile-photo"/>
                </div>
                <div className="edit-general-table-name-cont">
                    <p className="edit-general-table-main-name">{truncateTextWithDot(name, 20)}</p>
                    <div className="edit-general-table-loc-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M7.99992 8.95297C9.14867 8.95297 10.0799 8.02172 10.0799 6.87297C10.0799 5.72422 9.14867 4.79297 7.99992 4.79297C6.85117 4.79297 5.91992 5.72422 5.91992 6.87297C5.91992 8.02172 6.85117 8.95297 7.99992 8.95297Z" stroke="#625F5F" strokeWidth="1.3"/>
                            <path d="M2.41379 5.65968C3.72712 -0.113657 12.2805 -0.106991 13.5871 5.66634C14.3538 9.05301 12.2471 11.9197 10.4005 13.693C9.06046 14.9863 6.94046 14.9863 5.59379 13.693C3.75379 11.9197 1.64712 9.04634 2.41379 5.65968Z" stroke="#625F5F" strokeWidth="1.3"/>
                        </svg>
                        <p className="table-mini-loc">{ location }</p> 
                        <p className="table-mini-time">{ time }</p>
                    </div>
                </div>
            </td>
            <td className="desktop-only-show">{ gender }</td>
            <td className="desktop-only-show">{ email }</td>
            <td>
                <div className="edit-general-table-btns">
                    <CustomButton size="table-button-size"><img className="mobile-only-show" src="/white_tick.svg" alt=">" /><span className="desktop-only-show">Accept</span></CustomButton>
                    <CustomButton size="table-button-size" coloring="inverse-coloring"><img className="mobile-only-show" src="/cancel.svg" alt="x" /><span className="desktop-only-show">Reject</span></CustomButton>
                </div>
            </td>
        </tr>
    );
};

const EditDetailsSection = ({ selectedImage, setSelectedImage, imageName, setImageName, imageSize, setImageSize, groupTitle, setGroupTitle, groupDescription, setGroupDescription, boolValue, setBoolValue, presetTopics, selectedTopics, setSelectedTopics }) => {
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
        <div id="details" className="edit-details-container">
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

                            {/* location goes here */}

                            <MainInput
                                type="textarea"
                                placeholder="Enter desctiption" 
                                input="Description"
                                value={groupDescription}
                                onChange={(e) => setGroupDescription(e.target.value)}/>
                        </div>
                    </div>
                    <div className="edit-details-picturecontainer">
                        <SingleImageUploadInput
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
                                <CustomTag key={index} selected={selectedTopics.includes(topic) ? 'is-selected' : 'is-not-selected'} onClick={handleTopicClick(topic)}>
                                    {topic}
                                </CustomTag>
                            ))}
                        </div>
                    </div>
                    
                    <div className="edit-details-privacy">
                        <p className="edit-details-general-title">PRIVACY SETTINGS</p>
                        <BinaryOptionInput 
                            boolValue={boolValue} 
                            setBoolValue={setBoolValue} 
                            truthyPlaceholder="Private" 
                            falseyPlaceholder="Public" />
                    </div>
                </div>
            </div>

            <div className="edit-details-button">
                <CustomButton size="default-button-size">Update details</CustomButton>
            </div>
        </div>
    )
};

const MemberSection = ({members}) => {
    return (
        <div id="members" className="edit-members-container">
            <div className="edit-members-container-main">
                <div className="edit-members-header">
                    <p className="edit-members-header-title">Members</p>
                    <CustomButton size="normal-button-size">Invite user</CustomButton>
                </div>
                <div className="edit-members-table-container">
                    <table className="edit-general-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Gender</th>
                                <th>Birthday</th>
                                <th>Email address</th>
                                <th>Date joined</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="edit-general-table-name">
                                    <div className="edit-general-table-image"><img src="/profile_image.png" alt="profile-photo"/></div>
                                    <span>{truncateTextWithDot('Opeyemi Odedeyi', 10)}</span>
                                </td>
                                <td>Organizer</td>
                                <td>Male</td>
                                <td>10 May</td>
                                <td>opeyemi@gmail.com</td>
                                <td>26 Oct 2023; 9:45pm</td>
                                <td className="edit-general-table-toolkit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const RequestsSection = ({members}) => {
    return (
        <div id="requests" className="edit-members-container">
            <div className="edit-members-container-main">
                <div className="edit-members-header">
                    <p className="edit-members-header-title">Pending requests</p>
                </div>
                <div className="edit-members-table-container">
                    <table className="edit-general-table-alt">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th className="desktop-only-show">Gender</th>
                                <th className="desktop-only-show">Email address</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <RequestTableRow
                                name="Opeyemi Odedeyi"
                                location="United Kingdom"
                                time="1 hr"
                                gender="male"
                                email="male@gmail.com"/>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const EventsSection = () => (
    <div id="events" className="group-event">

    </div>
);

const AnalyticsSection = () => (
    <div id="analytics" className="edit-analytics">
        <div className="edit-analytics-main">
            <div className="edit-analytics-header">
                <p className="edit-analytics-header-title">Analytics</p>
            </div>

            <div className="edit-analytics-body-container">
                <div className="edit-analytics-body">

                    <div className="edit-analytics-card">
                        <div className="edit-analytics-card-image">
                            {/* <img src="/analytics.svg" alt="analytics"/> */}
                        </div>
                        <div className="edit-analytics-card-info">
                            <div className="edit-analytics-card-info-top">
                                <p className="edit-analytics-card-info-title">Total members</p>
                                <p className="edit-analytics-card-info-explain">Total number of members</p>
                            </div>
                            <p className="edit-analytics-card-info-num">20</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
);

const EditGroup = ({ params }) => {
    const router = useRouter();
    const [presetTopics, setPresetTopics] = useState(["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]);
    const [selectedImage, setSelectedImage] = useState('https://beta.clubbera.com/group.png'); // Change to null
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');
    const [description, setDescription] = useState("Positivity lovers club");
    const [activeTab, setActiveTab] = useState('');
    const [groupTitle, setGroupTitle] = useState("");
    const [groupDescription, setGroupDescription] = useState("");
    const [isPrivate, setIsPrivate] = useState(null);
    const [selectedTopics, setSelectedTopics] = useState([]);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash)  {
            setActiveTab(hash);
        } else {
            setActiveTab('details');
        }
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`#${tabName}`, undefined, { shallow: true });
    };

    return (
        <>
            <Header />

            <div className="edit-group-main">
                <div className="edit-group-back-header">
                    <CustomButton coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span className="desktop-only-show">Back</span></CustomButton>
                </div>

                <div className="edit-group-basic-details">
                    <div className="edit-group-basic-details-top">
                        <h4 className="edit-group-basic-details-title">{description}</h4>
                        <p className="edit-group-basic-details-tagline">Connecting positivity lovers in the UK together</p>
                    </div>
                    <div className="edit-group-basic-details-bottom">
                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/location.svg" alt="<"/></div><span>Leeds, United Kingdom</span></div>
                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/people.svg" alt="<"/></div><span>1278 members</span></div>
                    </div>
                </div>
                
                <div className="edit-group-navigation">
                    <ul>
                        <li onClick={() => handleTabClick('details')} className={`${activeTab === 'details' ? 'active-navigation-item' : ''}`}>Details</li>
                        <li onClick={() => handleTabClick('members')} className={`${activeTab === 'members' ? 'active-navigation-item' : ''}`}>Members</li>
                        <li onClick={() => handleTabClick('requests')} className={`${activeTab === 'requests' ? 'active-navigation-item' : ''}`}>Requests</li>
                        <li onClick={() => handleTabClick('events')} className={`${activeTab === 'events' ? 'active-navigation-item' : ''}`}>Events</li>
                        <li onClick={() => handleTabClick('analytics')} className={`${activeTab === 'analytics' ? 'active-navigation-item' : ''}`}>Analytics</li>
                    </ul>
                </div>

                {activeTab === 'details' && <EditDetailsSection
                                                selectedImage={selectedImage}
                                                setSelectedImage={setSelectedImage}
                                                imageName={imageName}
                                                setImageName={setImageName}
                                                imageSize={imageSize}
                                                setImageSize={setImageSize}
                                                groupTitle={groupTitle} 
                                                setGroupTitle={setGroupTitle} 
                                                groupDescription={groupDescription} 
                                                setGroupDescription={setGroupDescription}
                                                boolValue={isPrivate}
                                                setBoolValue={setIsPrivate}
                                                presetTopics={presetTopics}
                                                selectedTopics={selectedTopics}
                                                setSelectedTopics={setSelectedTopics} />}
                {activeTab === 'members' && <MemberSection/>}
                {activeTab === 'requests' && <RequestsSection/>}
                {activeTab === 'events' && <EventsSection/>}
                {activeTab === 'analytics' && <AnalyticsSection/>}
            </div>

            <MainFooter/>
        </>
    );
}

export default EditGroup;