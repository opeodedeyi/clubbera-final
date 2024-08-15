'use client';

import style from "./ProfileNavigation.module.css";


export default function ProfileNavigation({activeTab, handleTabClick}){
    return (
        <nav className={style.navigation}>
            <ul className={style.navigationList}>
                <li onClick={() => handleTabClick('joinedGroups')} className={activeTab === 'joinedGroups' ? style.activeNavigationItem : ''}>My communities</li>
                <li onClick={() => handleTabClick('formedGroups')} className={activeTab === 'formedGroups' ? style.activeNavigationItem : ''}>Created communities</li>
            </ul>
        </nav>
    );
};
