import style from './CTABannerSkeleton.module.css';

export default function CTABannerSkeleton() {
    return (
        <div className={style.CTACont}>
            <div className={style.CTAContainer}>
                <div className={style.CTAContainerTop}>
                    <div className={`${style.CTAContainerImage} ${style.skeleton}`}></div>
                    <div className={style.CTAContainerText}>
                        <div className={`${style.CTAContainerTextTitle} ${style.skeleton}`}></div>
                        <div className={`${style.CTAContainerTextDescription} ${style.skeleton}`}></div>
                    </div>
                </div>
                <div className={`${style.CTAButton} ${style.skeleton}`}></div>
            </div>
        </div>
    );
};