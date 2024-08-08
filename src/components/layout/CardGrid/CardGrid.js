import style from './CardGrid.module.css';

export default function CardGrid({ children, cardWidth='290' }) {
    return (
        <div className={style.cardGrid} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}px, 1fr))` }}>
            {children}
        </div>
    );
}