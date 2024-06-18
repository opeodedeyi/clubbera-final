'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { useTabManager } from "@/hooks/useTabManager";
import AboutSection from "@/components/pages/groupDetails/AboutSection";
import EventSection from "@/components/pages/groupDetails/EventSection";
import DiscussionSection from "@/components/pages/groupDetails/DiscussionSection";
import MemberSection from "@/components/pages/groupDetails/MemberSection";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import GroupTag from "@/components/utility/GroupTag/GroupTag";
import Image from 'next/image';
import LocationMarkerIcon from '@/svg/LocationMarkerIcon';
import GroupPeopleIcon from '@/svg/GroupPeopleIcon';
import DownArrowIcon from '@/svg/DownArrowIcon';
import '@/app/style/groupdetails.css';


const MainGroupDetails = ({ params, searchParams, group }) => {
    const router = useRouter();
    const [ctaText, setCtaText] = useState('Join Group');
    const [location, setLocation] = useState('The Man Behind The Curtain, Vicar Lane, Leeds, United Kingdom');
    const [date, setDate] = useState('24 Sep, 2023');
    const [time, setTime] = useState('3:00 PM')

    const { activeTab, handleTabClick } = useTabManager('about', searchParams);

    useEffect(() => {
        if (group.isMember === 'owner') {
            setCtaText('Owner');
        } else if (group.isMember === 'pending') {
            setCtaText('Pending');
        } else if (group.isMember === 'member') {
            setCtaText('Leave Group');
        } else {
            setCtaText('Join Group');
        }
    }, [group.isMember]);

    const joinOrLeaveGroup = () => {
        if (ctaText === 'Join Group') {
            // join group
        } else if (ctaText === 'Leave Group') {
            // leave group
        }
    }

    return (
        <>
            <div className="group-details-main">
                <div className="group-details-back-header">
                    <CustomButton coloring="form-header-coloring" size="form-header-size"><img src="/back_direction.svg" alt="<" /><span className="desktop-only-show">Back</span></CustomButton>
                </div>
                <div className="group-details-keydetails">
                    <div className="group-keydetails-major">
                        <div className="group-keydetails-major-image">
                            <Image 
                                fill={true}
                                priority
                                src={group.banner || "/group.png"}
                                alt="picture of group" />
                        </div>
                        <div className="group-keydetails-major-text">
                            <div className="group-keydetails-text-inner">
                                <div className="group-keydetails-text-gen">
                                    <div className="group-keydetails-tit-pub">
                                        <GroupTag privategroup={group.is_private} viewtype="desktop-only-show"/>

                                        <h4>{group.title}<GroupTag privategroup={group.is_private} viewtype="mobile-only-show"/></h4>
                                        {/* tagline goes here when it is added to the backend */}
                                    </div>
                                    <div className="group-keydetails-loc-mem">
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded">
                                            <LocationMarkerIcon color="--main-color-card"/>
                                        </div><span>{group.location}</span></div>
                                        <div className="grp-keydet-loc-item"><div className="grp-keydet-icon-rounded">
                                            <GroupPeopleIcon color="--main-color-card"/>
                                        </div><span>{group.member_count} members</span></div>
                                    </div>
                                </div>
                                <div className="group-keydetails-text-buttons">
                                    <CustomButton 
                                        coloring="default-coloring" 
                                        size="normal-button-size" 
                                        disabled={ctaText === ('owner' || 'pending') ? true : false}
                                        onClick={() => joinOrLeaveGroup}>
                                        {ctaText}
                                    </CustomButton>
                                    <CustomButton coloring="inverse-coloring" size="normal-button-size">
                                        <span>Share</span><DownArrowIcon/>
                                    </CustomButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-details-navigation">
                    <ul>
                        <li onClick={(e) => handleTabClick(e, 'about')} className={`group-details-navigation-item ${activeTab === 'about' ? 'active-navigation-item' : ''}`}>About</li>
                        <li onClick={(e) => handleTabClick(e, 'events')} className={`group-details-navigation-item ${activeTab === 'events' ? 'active-navigation-item' : ''}`}>Events</li>
                        <li onClick={(e) => handleTabClick(e, 'discussions')} className={`group-details-navigation-item ${activeTab === 'discussions' ? 'active-navigation-item' : ''}`}>Discussions</li>
                        <li onClick={(e) => handleTabClick(e, 'members')} className={`group-details-navigation-item ${activeTab === 'members' ? 'active-navigation-item' : ''}`}>Members</li>
                    </ul>
                </div>

                {activeTab === 'about' && <AboutSection group={group} location={location} date={date} time={time}/>}
                {activeTab === 'events' && <EventSection params={params}/>}
                {activeTab === 'discussions' && <DiscussionSection params={params}/>}
                {activeTab === 'members' && <MemberSection params={params}/>}
            </div>
        </>
    );
}

export default MainGroupDetails;