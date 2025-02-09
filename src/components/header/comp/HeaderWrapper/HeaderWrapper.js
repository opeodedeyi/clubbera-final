import style from "./HeaderWrapper.module.css";

export default function HeaderWrapper({ children, borderBottom="1px solid var(--border-color)", maxWidth="100%", padding="0 var(--container-padding)", height="var(--header-height)", screenType }) {
    return (
        <div className={`${style.headerContainer} ${ screenType==="desktop" ? style.desktopOnlyShow : screenType==="mobile" ? style.mobileOnlyShow : ""}`} style={{ borderBottom }}>
            <div className={style.headerWrapper} style={{ maxWidth, padding, height }}>
                {children}
            </div>
        </div>
    );
}