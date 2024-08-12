import style from './EditGrpBDSke.module.css';

export default function EditGrpBDSke() {
    return (
        <div className={style.basicDetailsWrapper}>
            <div className={style.basicDetails}>
                <div className={style.basicDetailsTop}>
                    <div className={`${style.title} ${style.skeleton}`}></div>
                    <div className={`${style.tagline} ${style.skeleton}`}></div>
                </div>
                <div className={style.basicDetailsBottom}>
                    <div className={style.keyDetailItem}>
                        <div className={`${style.keyDetailIconRounded} ${style.skeleton}`}></div>
                        <div className={`${style.keyDetailItemText} ${style.skeleton}`}></div>
                    </div>
                    <div className={style.keyDetailItem}>
                        <div className={`${style.keyDetailIconRounded} ${style.skeleton}`}></div>
                        <div className={`${style.keyDetailItemText} ${style.skeleton}`}></div>
                    </div>
                </div>
            </div>
            <div className={`${style.button} ${style.skeleton}`}></div>
        </div>
    );
};
