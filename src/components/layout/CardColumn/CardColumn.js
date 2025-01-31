import style from './CardColumn.module.css';

export default function CardColumn({ children, padding = "0", gap = "20px", alignSelf = "flex-start", width = "100%", maxWidth = "380px" }) {
    return (
        <div className={style.cardColumnWrapper} style={{ padding, gap, alignSelf, width, maxWidth }}>
            {children}
        </div>
    );
}