import { useRouter, usePathname } from "next/navigation";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./CreateGroupHeader.module.css";


const DesktopTag = ({ children, isColored }) => {
    return (
        <>
            <div className={`${style.headerCreateheaderDesktopTag} ${isColored ? style.createheaderDesktopTagIscolored : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M9 16.5C13.125 16.5 16.5 13.125 16.5 9C16.5 4.875 13.125 1.5 9 1.5C4.875 1.5 1.5 4.875 1.5 9C1.5 13.125 4.875 16.5 9 16.5Z" stroke="#228B22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.8125 8.99994L7.935 11.1224L12.1875 6.87744" stroke="#228B22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <p>{children}</p>
                <div className={style.horizonLine}></div>
            </div>
        </>
    );
}

const MobileTag = ({ children, isColored }) => {
    return (
        <>
            <div className={`${style.headerCreateheaderMobileTag} ${isColored ? style.createheaderMobileTagIscolored : ''}`}>
                <p>{children}</p>
            </div>
        </>
    );
}

const MobileLineBar = ({ progress, targetNo }) => {
    return (
        <>
            <div className={style.createheaderMobileHorline}>
                <div className={`${style.createheaderMobileHorlineInner} ${progress===targetNo ? style.createheaderHalfbar : ''} ${progress>targetNo ? style.createheaderFullbar : ''}`}></div>
            </div>
        </>
    );
}


export default function CreateGroupHeader({ children, backButtonClicked, progress }) {
    const pathName = usePathname();

    return (
        <>
            <div className={style.headerCreate}>
                <header className={style.headerAlt}>
                    <CustomButton coloring="form-header-coloring" size="form-header-size" onClick={backButtonClicked}>
                        <img className={style.headerAltArrow} src="/back_direction.svg" alt="<" />
                        <span className={style.headerAltText}>{ children }</span>
                    </CustomButton>
                </header>
                {progress > 0 && progress < 5 &&
                    <div className={style.headerCreategroup}>
                        <div className={style.headerCreateheaderDesktop}>
                            <DesktopTag isColored={ progress>0 ? true : false }>Set location</DesktopTag>
                            <DesktopTag isColored={ progress>1 ? true : false }>Choose topic</DesktopTag>
                            <DesktopTag isColored={ progress>2 ? true : false }>Describe group</DesktopTag>
                            <DesktopTag isColored={ progress>3 ? true : false }>Complete setup</DesktopTag>
                        </div>
                        <div className={style.headerCreateheaderMobile}>
                            <MobileTag isColored={ progress>0 ? true : false }>1</MobileTag>
                                <MobileLineBar progress={progress} targetNo={1}/>
                            <MobileTag isColored={ progress>1 ? true : false }>2</MobileTag>
                                <MobileLineBar progress={progress} targetNo={2}/>
                            <MobileTag isColored={ progress>2 ? true : false }>3</MobileTag>
                                <MobileLineBar progress={progress} targetNo={3}/>
                            <MobileTag isColored={ progress>3 ? true : false }>4</MobileTag>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}

