import style from './GroupNavigation.module.css';

export default function GroupNavigation({ activeTab, handleTabClick }) {
    return (
        <div className={style.groupDetailsNavigation}>
            <ul>
                <li onClick={() => handleTabClick('about')} className={`${style.groupDetailsNavigationItem} ${activeTab === 'about' ? style.activeNavigationItem : ''}`}>About</li>
                <li onClick={() => handleTabClick('events')} className={`${style.groupDetailsNavigationItem} ${activeTab === 'events' ? style.activeNavigationItem : ''}`}>Events</li>
                <li onClick={() => handleTabClick('discussions')} className={`${style.groupDetailsNavigationItem} ${activeTab === 'discussions' ? style.activeNavigationItem : ''}`}>Discussions</li>
                <li onClick={() => handleTabClick('members')} className={`${style.groupDetailsNavigationItem} ${activeTab === 'members' ? style.activeNavigationItem : ''}`}>Members</li>
            </ul>
        </div>
    )
}