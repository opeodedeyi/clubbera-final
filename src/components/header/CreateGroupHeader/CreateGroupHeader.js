import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { HiOutlineChevronLeft, HiOutlineCheckCircle } from "react-icons/hi";
import style from "./CreateGroupHeader.module.css";


const DesktopTag = ({ children, isColored }) => {
    return (
        <div className={`${style.headerCreateheaderDesktopTag} ${isColored ? style.createheaderDesktopTagIscolored : ''}`}>
            <HiOutlineCheckCircle size={18}/>
            <p>{children}</p>
            <div className={style.horizonLine}></div>
        </div>
    );
}

const MobileTag = ({ children, isColored }) => {
    return (
        <div className={`${style.headerCreateheaderMobileTag} ${isColored ? style.createheaderMobileTagIscolored : ''}`}>
            <p>{children}</p>
        </div>
    );
}

const MobileLineBar = ({ progress, targetNo }) => {
    return (
        <div className={style.createheaderMobileHorline}>
            <div className={`${style.createheaderMobileHorlineInner} ${progress===targetNo ? style.createheaderHalfbar : ''} ${progress>targetNo ? style.createheaderFullbar : ''}`}></div>
        </div>
    );
}


export default function CreateGroupHeader({ children, backButtonClicked, progress }) {
    return (
        <div className={style.headerCreate}>
            <header className={style.headerAlt}>
                <CustomButton coloring="formHeaderColoring" size="formHeaderSize" onClick={backButtonClicked}>
                    <HiOutlineChevronLeft size={14} className={style.headerAltArrow}/>
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
    )
}

