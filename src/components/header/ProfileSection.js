'use client';

import React from 'react';
import { capitalizeAndTruncateTextWithDot } from "@/utils/textUtils";
import "@/components/header/header.css";


const ProfileSection = React.memo(({ user }) => {
    return (
        <div className="header-profile-photo-card">
            <img src={user?.avatar || "/profile.png"} className="header-profile-photo-img" />
            <p className="header-profile-photo-text">{capitalizeAndTruncateTextWithDot(user?.full_name, 6)}</p>
        </div>
    );
});

export default ProfileSection;