import style from './CardGridContainer.module.css';

export default function CardGridContainer({ children, cardWidth='290' }) {
    return (
        <div className={style.CardGridContainer}>
            <div className={style.cardGrid} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}px, 1fr))` }}>
                {children}
            </div>
        </div>
    );
}