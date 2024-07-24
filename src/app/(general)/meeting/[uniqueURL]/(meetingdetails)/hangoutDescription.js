import meetingHeroImage from "../../../../../../public/meetingHeroImage.png";
import mobileHangoutHero from "../../../../../../public/mobileHangoutHero.png";
import { BsBook } from "react-icons/bs";
import Image from "next/image";
import style from "./hangoutDescription.module.css";
import { attendees } from "./data";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import { IoShareSocialOutline } from "react-icons/io5";
const HangoutDescription = () => {
  return (
    <>
      <div>
        <div>
          <Image
            src={meetingHeroImage}
            alt="Hero Image"
            height={"100%"}
            width={"100%"}
            className={style.heroImage}
          />
        </div>
        <div>
          <Image
            src={mobileHangoutHero}
            alt="Hero Image"
            height={"100%"}
            width={"100%"}
            className={style.MobileheroImage}
          />
        </div>
        <div className={style.hangoutContainer}>
          <div className={style.hangoutDetailsContainer}>
            <p className={style.hangoutTitle}>Basketbal Hangout</p>
            <div className={style.attendeeImages}>
              {attendees.map((attendee, index) => (
                <div key={index}>
                  <Image
                    src={attendee.attendeeImage}
                    alt="Attendee"
                    height={"100%"}
                    width={"100%"}
                  />
                </div>
              ))}
              <p className={style.totalAttendees}>12 Attendees</p>
            </div>
            <p className={style.hangoutDescription}>
              This is a Basketball group and a group for basketball lovers. We
              usually meet up at the London Basketball field, near Jameson Park,
              every Saturday.
            </p>
          </div>
          <div className={style.rsvpContainer}>
            <div>
              <p>Ensure to RSVP</p>
              <div className={style.rsvpButton}>
                <CustomButton>Attend Event</CustomButton>
              </div>
            </div>
            <hr className={style.horizontalLine} />
            <div className={style.share}>
              <div className={style.iconContainer}>
                <IoShareSocialOutline className={style.shareIcon} />
              </div>
              <div className={style.iconContainer}>
                <BsBook className={style.shareIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HangoutDescription;
