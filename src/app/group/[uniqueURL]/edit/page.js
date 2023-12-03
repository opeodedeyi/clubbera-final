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

const MemberTableRow = ({ name, role, birthday, timeJoined, dateJoined, gender, email }) => {
    return (
        <tr>
            <td className="edit-general-table-name">
                <div className="edit-general-table-image"><img src="/profile_image.png" alt="profile-photo"/></div>
                <span>{truncateTextWithDot(name, 15)}</span>
            </td>
            <td>{role}</td>
            <td>{gender}</td>
            <td>{birthday}</td>
            <td>{email}</td>
            <td>{dateJoined}; {timeJoined}</td>
            <td className="edit-general-table-toolkit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3.25C8.41421 3.25 8.75 2.91421 8.75 2.5C8.75 2.08579 8.41421 1.75 8 1.75C7.58579 1.75 7.25 2.08579 7.25 2.5C7.25 2.91421 7.58579 3.25 8 3.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 8.75C8.41421 8.75 8.75 8.41421 8.75 8C8.75 7.58579 8.41421 7.25 8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 14.25C8.41421 14.25 8.75 13.9142 8.75 13.5C8.75 13.0858 8.41421 12.75 8 12.75C7.58579 12.75 7.25 13.0858 7.25 13.5C7.25 13.9142 7.58579 14.25 8 14.25Z" stroke="#625F5F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </td>
        </tr>
    );
};

const AnalyticsCard = ({ img, title, explain, value }) => {
    return (
        <div className="edit-analytics-card">
            <div className="edit-analytics-card-image">
                {/* <img src="/analytics.svg" alt="analytics"/> */}
                {img}
            </div>
            <div className="edit-analytics-card-info">
                <div className="edit-analytics-card-info-top">
                    <p className="edit-analytics-card-info-title">{title}</p>
                    <p className="edit-analytics-card-info-explain">{explain}</p>
                </div>
                <p className="edit-analytics-card-info-num">{value}</p>
            </div>
        </div>
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
                            <MemberTableRow
                                name="Opeyemi Odedeyi"
                                role="Organizer"
                                birthday="10 May"
                                timeJoined="9:45pm"
                                dateJoined="26 Oct 2023"
                                gender="Male"
                                email="opeyemi@gmail.com"/>
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

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M13.5005 5.37C13.4555 5.3625 13.403 5.3625 13.358 5.37C12.323 5.3325 11.498 4.485 11.498 3.435C11.498 2.3625 12.3605 1.5 13.433 1.5C14.5055 1.5 15.368 2.37 15.368 3.435C15.3605 4.485 14.5355 5.3325 13.5005 5.37Z" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12.7276 10.8301C13.7551 11.0026 14.8876 10.8226 15.6826 10.2901C16.7401 9.58512 16.7401 8.43012 15.6826 7.72512C14.8801 7.19262 13.7326 7.01262 12.7051 7.19262" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4.47688 5.37C4.52188 5.3625 4.57438 5.3625 4.61938 5.37C5.65438 5.3325 6.47937 4.485 6.47937 3.435C6.47937 2.3625 5.61688 1.5 4.54438 1.5C3.47188 1.5 2.60938 2.37 2.60938 3.435C2.61687 4.485 3.44188 5.3325 4.47688 5.37Z" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M5.25008 10.8301C4.22258 11.0026 3.09008 10.8226 2.29508 10.2901C1.23758 9.58512 1.23758 8.43012 2.29508 7.72512C3.09758 7.19262 4.24508 7.01262 5.27258 7.19262" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.99859 10.9725C8.95359 10.965 8.90109 10.965 8.85609 10.9725C7.82109 10.935 6.99609 10.0875 6.99609 9.03754C6.99609 7.96504 7.85859 7.10254 8.93109 7.10254C10.0036 7.10254 10.8661 7.97254 10.8661 9.03754C10.8586 10.0875 10.0336 10.9425 8.99859 10.9725Z" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6.81656 13.3355C5.75906 14.0405 5.75906 15.1955 6.81656 15.9005C8.01656 16.703 9.98156 16.703 11.1816 15.9005C12.2391 15.1955 12.2391 14.0405 11.1816 13.3355C9.98906 12.5405 8.01656 12.5405 6.81656 13.3355Z" stroke="#1E7B1D" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>}
                        title="Total members"
                        explain="Total number of members"
                        value="20"/>

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M9 9C11.0711 9 12.75 7.32107 12.75 5.25C12.75 3.17893 11.0711 1.5 9 1.5C6.92893 1.5 5.25 3.17893 5.25 5.25C5.25 7.32107 6.92893 9 9 9Z" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.55664 16.5C2.55664 13.5975 5.44414 11.25 8.99914 11.25C9.71914 11.25 10.4166 11.3475 11.0691 11.5275" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.5 13.5C16.5 14.0625 16.3425 14.595 16.065 15.045C15.9075 15.315 15.705 15.555 15.4725 15.75C14.9475 16.2225 14.2575 16.5 13.5 16.5C12.405 16.5 11.4525 15.915 10.935 15.045C10.6575 14.595 10.5 14.0625 10.5 13.5C10.5 12.555 10.935 11.7075 11.625 11.16C12.1425 10.7475 12.795 10.5 13.5 10.5C15.1575 10.5 16.5 11.8425 16.5 13.5Z" stroke="#1E7B1D" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12.3301 13.4996L13.0726 14.2421L14.6701 12.7646" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                        title="Active members"
                        explain="Total number of active members"
                        value="12"/>

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M7.86663 1.67242L4.12414 3.07492C3.26164 3.39742 2.55664 4.41741 2.55664 5.33991V10.9124C2.55664 11.7974 3.14165 12.9599 3.85415 13.4924L7.07914 15.8999C8.13664 16.6949 9.87663 16.6949 10.9341 15.8999L14.1591 13.4924C14.8716 12.9599 15.4566 11.7974 15.4566 10.9124V5.33991C15.4566 4.41741 14.7516 3.39742 13.8891 3.07492L10.1466 1.67242C9.50914 1.43992 8.48913 1.43992 7.86663 1.67242Z" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M8.99977 8.18982C8.96977 8.18982 8.93227 8.18982 8.90227 8.18982C8.19727 8.16732 7.63477 7.58231 7.63477 6.86981C7.63477 6.14231 8.22727 5.5498 8.95477 5.5498C9.68227 5.5498 10.2748 6.14231 10.2748 6.86981C10.2673 7.58981 9.70477 8.16732 8.99977 8.18982Z" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.5068 10.2895C6.7868 10.7695 6.7868 11.557 7.5068 12.037C8.3243 12.5845 9.6668 12.5845 10.4843 12.037C11.2043 11.557 11.2043 10.7695 10.4843 10.2895C9.6743 9.74203 8.3318 9.74203 7.5068 10.2895Z" stroke="#1E7B1D" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                        title="Pending requests"
                        explain="Number of pending requests"
                        value="1000"/>

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M13.485 8.09251V11.0925C13.485 11.2875 13.4775 11.475 13.455 11.655C13.2825 13.68 12.09 14.685 9.8925 14.685H9.59251C9.40501 14.685 9.225 14.775 9.1125 14.925L8.21251 16.125C7.81501 16.6575 7.17 16.6575 6.7725 16.125L5.87249 14.925C5.77499 14.7975 5.5575 14.685 5.3925 14.685H5.09251C2.70001 14.685 1.5 14.0925 1.5 11.0925V8.09251C1.5 5.89501 2.51251 4.70251 4.53001 4.53001C4.71001 4.50751 4.89751 4.5 5.09251 4.5H9.8925C12.285 4.5 13.485 5.70001 13.485 8.09251Z" stroke="#1E7B1D" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M16.4843 5.09251V8.09251C16.4843 10.2975 15.4718 11.4825 13.4543 11.655C13.4768 11.475 13.4843 11.2875 13.4843 11.0925V8.09251C13.4843 5.70001 12.2843 4.5 9.89179 4.5H5.0918C4.8968 4.5 4.7093 4.50751 4.5293 4.53001C4.7018 2.51251 5.8943 1.5 8.0918 1.5H12.8918C15.2843 1.5 16.4843 2.70001 16.4843 5.09251Z" stroke="#1E7B1D" stroke-width="1.2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M10.1216 9.9375H10.1284" stroke="#1E7B1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.49662 9.9375H7.50337" stroke="#1E7B1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M4.87162 9.9375H4.87837" stroke="#1E7B1D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                        title="Total discussions"
                        explain="Total number of discussions had"
                        value="2000"/>

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M15.75 7.5H2.25M12 1.5V4.5M6 1.5V4.5M5.85 16.5H12.15C13.4101 16.5 14.0402 16.5 14.5215 16.2548C14.9448 16.039 15.289 15.6948 15.5048 15.2715C15.75 14.7902 15.75 14.1601 15.75 12.9V6.6C15.75 5.33988 15.75 4.70982 15.5048 4.22852C15.289 3.80516 14.9448 3.46095 14.5215 3.24524C14.0402 3 13.4101 3 12.15 3H5.85C4.58988 3 3.95982 3 3.47852 3.24524C3.05516 3.46095 2.71095 3.80516 2.49524 4.22852C2.25 4.70982 2.25 5.33988 2.25 6.6V12.9C2.25 14.1601 2.25 14.7902 2.49524 15.2715C2.71095 15.6948 3.05516 16.039 3.47852 16.2548C3.95982 16.5 4.58988 16.5 5.85 16.5Z" stroke="#1E7B1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                        title="Total events"
                        explain="Total number of events created"
                        value="3"/>

                    <AnalyticsCard
                        img={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                <path d="M15.75 8.625V6.6C15.75 5.33988 15.75 4.70982 15.5048 4.22852C15.289 3.80516 14.9448 3.46095 14.5215 3.24524C14.0402 3 13.4101 3 12.15 3H5.85C4.58988 3 3.95982 3 3.47852 3.24524C3.05516 3.46095 2.71095 3.80516 2.49524 4.22852C2.25 4.70982 2.25 5.33988 2.25 6.6V12.9C2.25 14.1601 2.25 14.7902 2.49524 15.2715C2.71095 15.6948 3.05516 16.039 3.47852 16.2548C3.95982 16.5 4.58988 16.5 5.85 16.5H9.375M15.75 7.5H2.25M12 1.5V4.5M6 1.5V4.5M13.5 15.75V11.25M11.25 13.5H15.75" stroke="#1E7B1D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>}
                        title="Upcoming events "
                        explain="Number of upcoming events "
                        value="1"/>

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