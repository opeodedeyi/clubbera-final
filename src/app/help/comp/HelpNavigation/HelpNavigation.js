import style from "./HelpNavigation.module.css";


export default function HelpNavigation({ activeTab, goToTab }) {
    const navigationItems = [
        { id: "guests", label: "Guests" },
        { id: "eventHost", label: "Event host" },
        { id: "communityOrganizer", label: "Community organizer" },
        { id: "communityMember", label: "Community member" }
    ];

    return (
        <nav className={style.helpNavigationContainer}>
            <div className={style.helpNavigation}>
                <div className={style.helpNavigationItems}>
                    {navigationItems.map(({ id, label }) => (
                        <div
                            key={id}
                            className={`${style.helpNavigationItem} ${activeTab === id ? style.activeNavigationItem : ""}`}
                            onClick={() => goToTab(id)} >
                            {label}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
};
