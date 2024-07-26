import CustomButton from "@/components/utility/CustomButton/CustomButton";
import attendee1 from "../../../../../../public/attendee1.png";
import style from "./hangoutInformation.module.css";
import { PiCalendarDotsThin } from "react-icons/pi";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";
import AnnouncementSection from "./announcementSection";
const HangoutInformation = () => {
  return (
    <>
      <div className={style.hangoutInformationContainer}>
        <div className={style.hangoutInformationWrapper}>
          <div className={style.hostInformationContainer}>
            <p>Host Information</p>
            <div className={style.hostProfileDetails}>
              <div className={style.hostProfile}>
                <div>
                  <Image
                    src={attendee1}
                    alt="Host Image"
                    height={"100%"}
                    width={"100%"}
                    className={style.hostImage}
                  />
                </div>
                <div>
                  <p className={style.hostProfileName}>Opeyemi Opeyemi</p>
                  <p className={style.hostProfileGmail}>opeyemi@gmail.com</p>
                </div>
              </div>

              <div className={style.hostProfileButton}>
                <CustomButton>View Profile</CustomButton>
              </div>
            </div>
          </div>
          <div className={style.hangoutLocation}>
            <div className={style.hangoutTime}>
              <div className={style.Icons}>
                <PiCalendarDotsThin className={style.mainIcons} />
              </div>
              <div>
                <p className={style.hangoutDateAndLocation}>Date</p>
                <p className={style.hangoutDateAndAddress}>
                  Saturday, July 24, 2024,
                </p>
                <p className={style.hangoutDateAndAddress}>4:00pm</p>
              </div>
            </div>
            <hr className={style.vertcalLine} />
            <hr className={style.horizontalLine} />
            <div className={style.hangoutTime}>
              <div className={style.Icons}>
                <CiLocationOn className={style.mainIcons} />
              </div>
              <div>
                <p className={style.hangoutDateAndLocation}>Location</p>
                <p className={style.hangoutDateAndAddress}>
                  82 Wenlock Terrace, Leeds, UK
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.AnnouncementSection}>
          <AnnouncementSection />
        </div>
      </div>
    </>
  );
};

export default HangoutInformation;
