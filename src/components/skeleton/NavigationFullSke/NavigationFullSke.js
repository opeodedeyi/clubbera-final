import style from './NavigationFullSke.module.css';

export default function NavigationFullSke() {
    return (
        <div className={style.groupDetailsNavigation}>
            <ul>
                {['About', 'Events', 'Discussions', 'Members'].map((item, index) => (
                    <li key={index} className={style.groupDetailsNavigationItem}>
                        <div className={`${style.navItemText} ${style.skeleton}`}></div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
