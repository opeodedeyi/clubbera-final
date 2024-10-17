import style from './SpicyText.module.css';

export default function SpicyText({ children }) {
    return (
        <span className={style.spicyText}>
            {children}
        </span>
    )
}