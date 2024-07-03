import style from './LoadingSpinner.module.css';

export default function LoadingSpinner({ height="18px" }) {
    return (
        <div className={style.spinner} style={{ height }}>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>    
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
            <div className={style.container} style={{ height }}>
                <div className={style.line}></div>
            </div>
        </div>
    );
}