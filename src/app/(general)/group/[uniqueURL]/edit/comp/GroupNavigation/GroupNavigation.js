import style from './GroupNavigation.module.css';


export default function GroupNavigation({ activeTab, handleTabClick, isPrivate }) {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigationList}>
                <li onClick={() => handleTabClick('details')} className={activeTab === 'details' ? style.activeNavigationItem : ''}>Details</li>
                <li onClick={() => handleTabClick('members')} className={activeTab === 'members' ? style.activeNavigationItem : ''}>Members</li>
                {isPrivate && <li onClick={() => handleTabClick('requests')} className={activeTab === 'requests' ? style.activeNavigationItem : ''}>Requests</li>}
                <li onClick={() => handleTabClick('events')} className={activeTab === 'events' ? style.activeNavigationItem : ''}>Events</li>
                <li onClick={() => handleTabClick('analytics')} className={activeTab === 'analytics' ? style.activeNavigationItem : ''}>Analytics</li>
            </ul>
        </nav>
    );
}