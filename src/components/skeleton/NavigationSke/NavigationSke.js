import style from './NavigationSke.module.css';

export default function NavigationSke({ itemCount = 2 }) {
    return (
        <nav className={style.navigation}>
            <ul className={style.navigationList}>
                {Array.from({ length: itemCount }, (_, index) => (
                    <li key={index} className={style.navigationItem}>
                        <div className={`${style.itemText} ${style.skeleton}`}></div>
                    </li>
                ))}
            </ul>
        </nav>
    );
};