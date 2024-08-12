import style from './ProfileHeaderSke.module.css';

export default function ProfileHeaderSke() {
    return (
        <div className={style.profileHeader}>
            <div className={style.profileHeaderDetails}>
                <div className={`${style.profileHeaderDetailsPP} ${style.skeleton}`}></div>
                <div className={style.profileHeaderDetailsText}>
                    <div className={`${style.nameSkeletonDesktop} ${style.skeleton}`}></div>
                    <div className={`${style.nameSkeletonMobile} ${style.skeleton}`}></div>
                    <div className={`${style.bioSkeleton} ${style.skeleton}`}></div>
                </div>
            </div>
            <div className={`${style.buttonSkeleton} ${style.skeleton}`}></div>
        </div>
    );
};