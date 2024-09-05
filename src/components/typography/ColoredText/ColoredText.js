import style from './ColoredText.module.css';

export default function ColoredText({ children }) {
    return (
        <span className={style.coloredText}>
            {children}
        </span>
    )
}