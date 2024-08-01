'use client';

import { useCreateMeeting } from '@/app/context/CreateMeetingContext';
import { HiOutlineCheckCircle } from "react-icons/hi";
import style from './Navigation.module.css';


const DesktopTag = ({ children, isColored }) => {
    return (
        <div className={`${style.headerCreateheaderDesktopTag} ${isColored ? style.createheaderDesktopTagIscolored : ''}`}>
            <HiOutlineCheckCircle size={18}/>
            <p>{children}</p>
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

export default function CreateMeetingNavigation() {
    const { currentTab } = useCreateMeeting();

    return (
        <div className={style.headerCreategroup}>
            <div className={style.headerCreateheaderDesktop}>
                <DesktopTag isColored={ currentTab>0 ? true : false }>Basic details</DesktopTag>
                <DesktopTag isColored={ currentTab>1 ? true : false }>Event setup</DesktopTag>
            </div>
            <div className={style.headerCreateheaderMobile}>
                <MobileTag isColored={ currentTab>0 ? true : false }>1</MobileTag>
                    <MobileLineBar progress={currentTab} targetNo={1}/>
                <MobileTag isColored={ currentTab>1 ? true : false }>2</MobileTag>
            </div>
        </div>
    );
};