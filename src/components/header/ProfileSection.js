'use client';

import React from 'react';
import "@/components/header/header.css";


const ProfileSection = React.memo(({ user }) => {
    return (
        <div className="header-profile-photo-card">
            <img src={user?.avatar || "/profile.png"} className="header-profile-photo-img" />
            {/* add down arrow */}
        </div>
    );
});

export default ProfileSection;