import style from "./MainHeader.module.css";

export default function HeaderSkeleton() {
    return (
        <>
            <div>
                <div className={`${style.desktopOnlyShow} ${style.skeleton} ${style.skeletonLogo}`}></div>
                <div className={`${style.headerToggleBar} ${style.mobileOnlyShow} ${style.skeleton} ${style.skeletonMenuButton}`}></div>
            </div>

            <div className={style.flexC}>
                <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.mobileOnlyShow}`}>
                    <div className={`${style.skeleton} ${style.skeletonSearchButton} ${style.mobileOnlyShow}`}></div>
                    <div className={`${style.skeleton} ${style.skeletonProfileSection}`}></div>
                </div>

                <div className={`${style.flexC} ${style.headerButtonsAlt} ${style.desktopOnlyShow}`}>
                    <div className={`${style.skeleton} ${style.skeletonSearchBar} ${style.desktopOnlyShow}`}></div>
                    <div className={style.headerVertiLine}></div>
                    <div className={`${style.skeleton} ${style.skeletonProfileSection}`}></div>
                </div>
            </div>
        </>
    );
};