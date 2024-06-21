'use client';

import React from 'react';
import style from "./MainHeader.module.css";


const ProfileSection = React.memo(({ user }) => {
    return (
        <div className={style.headerProfilePhotoCard}>
            <img src={user?.avatar || "/profile.png"} className={style.headerProfilePhotoImg} />
            {/* add down arrow */}
        </div>
    );
});

export default ProfileSection;