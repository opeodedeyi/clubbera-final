import style from './GrpKDSke.module.css';


export default function GrpKDSke() {
    return (
        <div className={style.groupDetailsKeydetails}>
            <div className={style.groupKeydetailsMajor}>
                <div className={`${style.groupKeydetailsMajorImage} ${style.skeleton}`} />
                <div className={style.groupKeydetailsMajorText}>
                    <div className={style.groupKeydetailsTextInner}>
                        <div className={style.groupKeydetailsTextGen}>
                            <div className={style.groupKeydetailsTitPub}>
                                {['groupTag', 'groupKeydetailsTitle', 'groupTagline'].map((item) => (
                                    <div key={item} className={`${style[item]} ${style.skeleton}`} />
                                ))}
                            </div>
                            <div className={style.groupKeydetailsLocMem}>
                                {['location', 'member'].map((item) => (
                                    <div key={item} className={style.grpKeydetLocItem}>
                                        <div className={`${style.grpKeydetIconRounded} ${style.skeleton}`} />
                                        <div className={`${style[`${item}Text`]} ${style.skeleton}`} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={style.groupKeydetailsTextButtons}>
                            {[0, 1].map((i) => (
                                <div key={i} className={`${style.button} ${style.skeleton}`} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}