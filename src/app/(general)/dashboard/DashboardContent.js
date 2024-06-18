'use client';

import React from 'react';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import GroupPeopleIcon from '@/svg/GroupPeopleIcon';
import { capitalizeAndTruncateTextWithDot } from "@/utils/textUtils";
import { useTabManager } from "@/hooks/useTabManager";
import "@/app/style/homepage.css"


const DashboardContent = React.memo(({ user, searchParams }) => {
    const { activeTab, handleTabClick } = useTabManager('mygroups', searchParams);

    return (
        <>
            <div className="homepage-login-hero">
                <div className="homepage-login-hero-cont">
                    <p className="homepage-login-hero-name">Hi {capitalizeAndTruncateTextWithDot(user?.full_name, 9)},</p>
                    <p className="homepage-login-hero-speech">Get started today with Clubbera</p>
                </div>
                <CustomButton link destination="/creategroup" size="default-size">
                    <div className="homepage-login-hero-innbtn">
                    <GroupPeopleIcon className='mobile-only-show' color='--color-on-brand'/>
                    Create <span className="desktop-only-show">new</span>
                    </div>
                </CustomButton>
            </div>
            <div className="homepage-login-navigation">
                <ul>
                    <li onClick={(e) => handleTabClick(e, 'mygroups')} className={`${activeTab === 'mygroups' ? 'active-navigation-item' : ''}`}>My groups</li>
                    <li onClick={(e) => handleTabClick(e, 'upcomingevents')} className={`${activeTab === 'upcomingevents' ? 'active-navigation-item' : ''}`}>Upcoming events</li>
                </ul>
            </div>
        </>
    );
});

export default DashboardContent;