import HeaderWrapper from "../comp/HeaderWrapper/HeaderWrapper";
import style from "./HeaderLoading.module.css";

export default function HeaderLoading({ height }) {
    return (
        <HeaderWrapper height={height}>
            <div className={style.headerLoading}>
                <div className={`${style.skeleton} ${style.skeletonLogo}`}></div>

                <div className={`${style.skeleton} ${style.skeletonSearchBar} ${style.desktopOnlyShow}`}></div>

                <div className={`${style.skeleton} ${style.skeletonProfileSection}`}></div>
            </div>
        </HeaderWrapper>
    );
}