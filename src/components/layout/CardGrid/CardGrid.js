import style from './CardGrid.module.css';

export default function CardGrid({ children }) {
    return (
        <div className={style.cardGrid}>
            {children}
        </div>
    );
}