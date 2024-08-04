import { announcements } from "../../data";
import { HiOutlineSpeakerXMark } from "react-icons/hi2";
import style from "./Comments.module.css";

const NoAnnouncement = () => {
    return (
        <div className={style.noAnnouncementWrapper}>
            <HiOutlineSpeakerXMark color="var(--color-text-main)" className={style.speakerIcon} />
            <p>There are no announcements for this event</p>
        </div>
    );
}

const AnnouncementCard = ({ item }) => {
    return (
        <div className={style.announcementCard}>
            <div className={style.announcementCardHeader}>
                <p>{item.time}</p>
            </div>
            <div className={style.announcementCardDivider}></div>
            <p>{item.information}</p>
            {/* reply */}
        </div>
    );
}

export default function Comments() {
    return (
        <div className={style.announcementContainer}>
            <p>COMMENTS</p>
            <NoAnnouncement />
            {/* <div className={style.announcementDetailsScroller}>
                { announcements.map((item, index) => 
                    (
                        <AnnouncementCard key={index} item={item} />
                    ))
                }
            </div> */}
        </div>
    )
}