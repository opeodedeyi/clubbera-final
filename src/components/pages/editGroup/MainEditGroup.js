'use client';

import { useState, useEffect } from 'react';
import CustomButton from "@/components/utility/custombutton";
import EditDetailsSection from "@/components/pages/editGroup/GroupDetails";
import MemberSection from "@/components/pages/editGroup/GroupMembers";
import RequestsSection from "@/components/pages/editGroup/GroupRequests";
import EventsSection from "@/components/pages/editGroup/GroupEvents";
import AnalyticsSection from "@/components/pages/editGroup/GroupAnalytics";
import { useRouter } from 'next/navigation';
import '@/app/style/editgroup.css';


const MainEditGroup = ({ params, searchParams, group }) => {
    const router = useRouter();
    const [presetTopics, setPresetTopics] = useState(["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]);
    const [selectedImage, setSelectedImage] = useState('https://beta.clubbera.com/group.png');
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');
    const [activeTab, setActiveTab] = useState('');
    const [groupTitle, setGroupTitle] = useState(null);
    const [groupDescription, setGroupDescription] = useState(null);
    const [groupTagline, setGroupTagline] = useState(null);
    const [isPrivate, setIsPrivate] = useState(null);
    const [cityLocation, setCityLocation] = useState(null);
    const [latLocation, setLatLocation] = useState(null);
    const [lngLocation, setLngLocation] = useState(null);
    const [selectedTopics, setSelectedTopics] = useState([]);

    const checkTab = () => {
        if (searchParams.tab) {
            setActiveTab(searchParams.tab);
        } else {
            router.push(`?tab=${'details'}`, undefined, { shallow: true });
            setActiveTab('details');
        }
    };

    const isDisabled = !groupTitle || !groupDescription || !cityLocation ;

    const setDefaultValues = (title, description, tagline, is_private, location, lat, lng, topics, banner) => {
        setGroupTitle(title);
        setGroupDescription(description);
        setGroupTagline(tagline);
        setIsPrivate(is_private);
        setCityLocation(location);
        setLatLocation(lat);
        setLngLocation(lng);
        setSelectedTopics(topics);
        setSelectedImage(banner);
    };

    useEffect(() => {
        setDefaultValues(group.title, group.description, group.tagline, group.is_private, group.location, group.lat, group.lng, group.topics, group.banner);
        checkTab();
    }, [searchParams]);

    const handleTabClick = (e, tabName) => {
        e.preventDefault();
        
        setActiveTab(tabName);
        router.push(`?tab=${tabName}`, undefined, { shallow: true });
    };

    return (
        <>
            <div className="edit-group-main">
                <div className="edit-group-back-header">
                    <CustomButton coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span className="desktop-only-show">Back</span></CustomButton>
                </div>

                <div className="edit-group-basic-details">
                    <div className="edit-group-basic-details-top">
                        <h4 className="edit-group-basic-details-title">{group.title}</h4>
                        <p className="edit-group-basic-details-tagline">{group.tagline}</p>
                    </div>
                    <div className="edit-group-basic-details-bottom">
                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/location.svg" alt="<"/></div><span>{group.location}</span></div>
                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/people.svg" alt="<"/></div><span>{group.member_count} members</span></div>
                    </div>
                </div>
                
                <div className="edit-group-navigation">
                    <ul>
                        <li onClick={(e) => handleTabClick(e, 'details')} className={`${activeTab === 'details' ? 'active-navigation-item' : ''}`}>Details</li>
                        <li onClick={(e) => handleTabClick(e, 'members')} className={`${activeTab === 'members' ? 'active-navigation-item' : ''}`}>Members</li>
                        { group.is_private ? (<li onClick={(e) => handleTabClick(e, 'requests')} className={`${activeTab === 'requests' ? 'active-navigation-item' : ''}`}>Requests</li> ) : null}
                        <li onClick={(e) => handleTabClick(e, 'events')} className={`${activeTab === 'events' ? 'active-navigation-item' : ''}`}>Events</li>
                        <li onClick={(e) => handleTabClick(e, 'analytics')} className={`${activeTab === 'analytics' ? 'active-navigation-item' : ''}`}>Analytics</li>
                    </ul>
                </div>

                {activeTab === 'details' && <EditDetailsSection
                                                params={params}
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
                                                groupTagline={groupTagline} 
                                                setGroupTagline={setGroupTagline}
                                                boolValue={isPrivate}
                                                setBoolValue={setIsPrivate}
                                                presetTopics={presetTopics}
                                                selectedTopics={selectedTopics}
                                                cityLocation={cityLocation}
                                                setCityLocation={setCityLocation} 
                                                latLocation={latLocation}
                                                setLatLocation={setLatLocation}
                                                lngLocation={lngLocation}
                                                setLngLocation={setLngLocation}
                                                setSelectedTopics={setSelectedTopics}
                                                isDisabled={isDisabled} />}
                {activeTab === 'members' && <MemberSection
                                                params={params}/>}
                {activeTab === 'requests' && <RequestsSection
                                                params={params}/>}
                {activeTab === 'events' && <EventsSection
                                                params={params}/>}
                {activeTab === 'analytics' && <AnalyticsSection
                                                params={params}/>}
            </div>
        </>
    );
}

export default MainEditGroup;