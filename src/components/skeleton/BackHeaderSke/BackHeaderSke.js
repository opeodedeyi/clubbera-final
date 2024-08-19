import style from './BackHeaderSke.module.css';


export default function BackHeaderSke() {
    return (
        <header className={style.backHeader}>
            <button className={`${style.button} ${style.skeleton}`} aria-hidden="true"></button>
        </header>
    );
}