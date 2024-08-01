import Image from "next/image";
import { announcements } from "./data";
import style from "./announcementSection.module.css"
import {PiSpeakerSimpleSlashThin} from "react-icons/pi"
const AnnouncementSection = () => {
  return (
    <>
      <div className={style.announcementContainer}>
        <p>Announcements</p>
        {announcements.length === 0 ? (
          <div className={style.noAnnouncementWrapper}>
            <div>
              <PiSpeakerSimpleSlashThin className={style.speakerIcon} />
              <p>There are no announcements for this event</p>
            </div>
          </div>
        ) : (
          <div className={style.announcementDetailsScroller}>
            {announcements.map((item, index) => (
              <div key={index} className={style.announcementDetails}>
                <div className={style.announcementDetailsHeader}>
                  <p className={style.announcementTitle}>{item.title}</p>
                  <div className={style.announcementDateAndTimeContainer}>
                    <p>{item.date}</p>
                    <div className={style.verticalLine}></div>
                    <p>{item.time}</p>
                  </div>
                </div>
                <hr className={style.announcmentDividerLine} />
                <div className={style.announcementInfo}>
                  <p>{item.information}</p>
                </div>
                <div className={style.announcementFooter}>
                  <div className={style.announcementFooterEmoji}>
                    <Image
                      src={item.reactionIcon}
                      alt="Attendee"
                      height={"100%"}
                      width={"100%"}
                      className={style.announcementFooterMainEmoji}
                    />
                  </div>
                  <div className={style.announcementFooterReply}>
                    <Image
                      src={item.replyIcon}
                      alt="Attendee"
                      height={"100%"}
                      width={"100%"}
                      className={style.announcementFooterReplyIcon}
                    />
                    <p>{item.reply}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AnnouncementSection
