'use client';

import Header from "../../../../components/header/header";
import MainFooter from "../../../../components/footer/mainfooter";
import CustomButton from "../../../../components/utility/custombutton";
import GroupTag from "../../../../components/utility/grouptag";
import '../../../style/editgroup.css';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';


const EditDetailsSection = ({description, location, title}) => (
    <div id="details" className="edit-details-container">
        <div className="edit-details-main">
            <div className="edit-details-main-top">
                <div className="edit-details-basicinfo">
                    <p className="edit-details-basicinfo-title">BASIC INFORMATION</p>
                </div>
            </div>
            <div className="edit-details-main-bottom">

            </div>
        </div>
        <div className="edit-details-button">
            <CustomButton size="default-button-size">Update details</CustomButton>
        </div>
    </div>
);

const MemberSection = ({members}) => {
    return (
        <div id="members" className="group-members">

        </div>
    );
};
  
const EventsSection = () => (
    <div id="events" className="group-event">

    </div>
);

const EditGroup = ({ params }) => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('');

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
                        <h4 className="edit-group-basic-details-title">Positivity lovers club</h4>
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

                {activeTab === 'details' && <EditDetailsSection/>}
                {activeTab === 'events' && <EventsSection/>}
                {/* {activeTab === 'discussions' && <DiscussionSection/>} */}
                {activeTab === 'members' && <MemberSection/>}
            </div>

            <MainFooter/>
        </>
    );
}

export default EditGroup;