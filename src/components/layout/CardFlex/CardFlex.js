import style from './CardFlex.module.css';

export default function CardFlex({ children }) {
    return (
        <div className={style.cardFlexWrapper}>
            <div className={style.cardFlex}>
                {children}
            </div>
        </div>
    );
}