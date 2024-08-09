import style from './BackHeaderSke.module.css';

export default function BackHeaderSke() {
    return (
        <div className={style.backHeader}>
            <div className={`${style.button} ${style.skeleton}`}></div>
        </div>
    );
};
