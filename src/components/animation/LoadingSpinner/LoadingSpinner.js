import style from './LoadingSpinner.module.css';

export default function LoadingSpinner({ height="18px", backgroundColor='var(--color-on-brand, #ffffff)' }) {
    return (
        <div className={style.spinner} style={{ height }}>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>    
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line} style={{ backgroundColor }}></div>
            </div>
        </div>
    );
}