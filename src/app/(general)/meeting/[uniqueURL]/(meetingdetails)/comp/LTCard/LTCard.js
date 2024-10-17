import { HiOutlineClock, HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import style from "./LTCard.module.css";


export default function LTCard({ icon, title, content }) {
    return (
        <div className={style.hangoutLTContainer}>
            <div className={style.Icons}>
                {icon === "calendar" ? (
                    <HiOutlineCalendar size={14} color="var(--color-text-main)"/>
                ) : icon === "clock" ? (
                    <HiOutlineClock size={14} color="var(--color-text-main)"/>
                ) : (
                    <HiOutlineLocationMarker size={14} color="var(--color-text-main)"/>
                )}
            </div>

            <div className={style.hangoutLTText}>
                <p className={style.hangoutLTTitle}>{title}</p>
                <p className={style.hangoutLTContent}>{content}</p>
            </div>
        </div>
    );
};