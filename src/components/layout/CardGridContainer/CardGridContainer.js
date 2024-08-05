import style from './CardGridContainer.module.css';

export default function CardGridContainer({ children }) {
    return (
        <div className={style.CardGridContainer}>
            <div className={style.cardGrid}>
                {children}
            </div>
        </div>
    );
}