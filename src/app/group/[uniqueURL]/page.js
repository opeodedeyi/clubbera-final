'use client';

import Header from "../../../components/header/header";
import CustomButton from "../../../components/utility/custombutton";
import GroupTag from "../../../components/utility/grouptag";
import '../../style/groupdetails.css';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const AboutSection = () => (
    <div id="about" className="group-other">
        <div className="group-about-description">
            <h5 className="group-about-title">Group description</h5>
            <p className="group-about-content">
                Picture this: A vibrant community nestled in the heart of the United Kingdom, uniting individuals who are passionate about spreading the contagious spirit of positivity. Here, we are not just enthusiasts; we are advocates, champions, and connoisseurs of all things uplifting.
                In the Positivity Lovers Club, we have created a haven for those who believe that positivity is not just a mindset; it is a way of life. We are the ones who look for silver linings on even the cloudiest of days, and we ave turned glass half full into an art form.
                So, if you are a lover of sunny dispositions, a connoisseur of good vibes, and a collector of heartwarming stories, the Positivity Lovers Club in the UK is the perfect place for you. Join us in our quest to connect, inspire, and uplift, because we know that together, we can make the world a brighter, more cheerful place. 🌟💖
            </p>
        </div>
        <div className="group-meeting-time">
            <div className="group-meeting-time-container">
                <h5 className="group-about-title">Meeting times</h5>
                <div className="group-meeting-items">

                </div>
            </div>
        </div>
    </div>
);
  
const EventsSection = () => (
    <div id="events" className="group-event">Events Content</div>
);

const GroupDetails = ({ params }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash)  {
            setActiveTab(hash);
        } else {
            setActiveTab('about');
        }
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
        router.push(`#${tabName}`, undefined, { shallow: true });
    };

    return (
        <>
            <Header />

            <div className="group-details-main">
                <div className="group-details-back-header">
                    <CustomButton coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span className="desktop-only-show">Back</span></CustomButton>
                </div>
                <div className="group-details-keydetails">
                    <div className="group-keydetails-major">
                        {/* style from here */}
                        <div className="group-keydetails-major-image">
                            <img src="/group.png" alt="" />
                        </div>
                        <div className="group-keydetails-major-text">
                            <div className="group-keydetails-text-inner">
                                <div className="group-keydetails-text-gen">
                                    <div className="group-keydetails-tit-pub">
                                        <GroupTag privategroup={false} viewtype="desktop-only-show"/>

                                        <h4>Positivity lovers club <GroupTag privategroup={false} viewtype="mobile-only-show"/></h4>
                                        {/* tagline goes here when it is added to the backend */}
                                    </div>
                                    <div className="group-keydetails-loc-mem">
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/location.svg" alt="<"/></div><span>Leeds, United Kingdom</span></div>
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded"><img src="/people.svg" alt="<"/></div><span>1278 members</span></div>
                                    </div>
                                </div>
                                <div className="group-keydetails-text-buttons">
                                    <CustomButton coloring="default-coloring" size="normal-button-size">Join Group</CustomButton>
                                    <CustomButton coloring="inverse-coloring" size="normal-button-size"><span>Share</span><img src="/downArrow.svg" alt="<"/></CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-details-navigation">
                    <ul>
                        <li onClick={() => handleTabClick('about')} className={`group-details-navigation-item ${activeTab === 'about' ? 'active-navigation-item' : ''}`}>About</li>
                        <li onClick={() => handleTabClick('events')} className={`group-details-navigation-item ${activeTab === 'events' ? 'active-navigation-item' : ''}`}>Events</li>
                        <li onClick={() => handleTabClick('discussions')} className={`group-details-navigation-item ${activeTab === 'discussions' ? 'active-navigation-item' : ''}`}>Discussions</li>
                        <li onClick={() => handleTabClick('members')} className={`group-details-navigation-item ${activeTab === 'members' ? 'active-navigation-item' : ''}`}>Members</li>
                        <li onClick={() => handleTabClick('photos')} className={`group-details-navigation-item ${activeTab === 'photos' ? 'active-navigation-item' : ''}`}>Photos</li>
                    </ul>
                </div>

                {activeTab === 'about' && <AboutSection/>}
                {activeTab === 'events' && <EventsSection/>}
            </div>
        </>
    );
}

export default GroupDetails;