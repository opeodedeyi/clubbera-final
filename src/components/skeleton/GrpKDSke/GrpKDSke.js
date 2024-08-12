import style from './GrpKDSke.module.css';

export default function GrpKDSke() {
    return (
        <div className={style.groupDetailsKeydetails}>
            <div className={style.groupKeydetailsMajor}>
                <div className={`${style.groupKeydetailsMajorImage} ${style.skeleton}`}></div>
                <div className={style.groupKeydetailsMajorText}>
                    <div className={style.groupKeydetailsTextInner}>
                        <div className={style.groupKeydetailsTextGen}>
                            <div className={style.groupKeydetailsTitPub}>
                                <div className={`${style.groupTag} ${style.skeleton}`}></div>
                                <div className={`${style.groupKeydetailsTitle} ${style.skeleton}`}></div>
                                <div className={`${style.groupTagline} ${style.skeleton}`}></div>
                            </div>
                            <div className={style.groupKeydetailsLocMem}>
                                <div className={style.grpKeydetLocItem}>
                                    <div className={`${style.grpKeydetIconRounded} ${style.skeleton}`}></div>
                                    <div className={`${style.locationText} ${style.skeleton}`}></div>
                                </div>
                                <div className={style.grpKeydetLocItem}>
                                    <div className={`${style.grpKeydetIconRounded} ${style.skeleton}`}></div>
                                    <div className={`${style.memberText} ${style.skeleton}`}></div>
                                </div>
                            </div>
                        </div>
                        <div className={style.groupKeydetailsTextButtons}>
                            <div className={`${style.button} ${style.skeleton}`}></div>
                            <div className={`${style.button} ${style.skeleton}`}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};