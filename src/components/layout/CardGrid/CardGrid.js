import style from './CardGrid.module.css';

export default function CardGrid({ children, cardWidth='290', padding='40px var(--container-padding)', gap='24px' }) {
    return (
        <div className={style.cardGrid} style={{ gridTemplateColumns: `repeat(auto-fill, minmax(${cardWidth}px, 1fr))`, padding, gap }}>
            {children}
        </div>
    );
}