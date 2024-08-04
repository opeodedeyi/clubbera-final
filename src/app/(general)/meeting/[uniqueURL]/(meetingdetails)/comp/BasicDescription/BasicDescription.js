import Image from "next/image";
import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import { attendees } from "../../data";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./BasicDescription.module.css";


export default function BasicDescription() {
    return (
        <div className={style.hangoutContainer}>
            <div className={style.hangoutDetailsContainer}>
                <div className={style.hangoutBasicInfo}>
                    <p className={style.hangoutTitle}>Basketball Hangout</p>
                    
                    <div className={style.attendeeInfo}>
                        <div className={style.attendeeImages}>
                            {attendees.map((attendee, index) => (
                                <Image
                                    key={index}
                                    src={attendee.attendeeImage}
                                    alt="Attendee"
                                    height={30}
                                    width={30} />
                            ))}
                        </div>
                    
                        <p className={style.totalAttendees}>12 Attendees</p>
                    </div>
                </div>

                <p className={style.hangoutDescription}>
                  This is a Basketball group and a group for basketball lovers. We
                  usually meet up at the London Basketball field, near Jameson Park,
                  every Saturday.
                </p>
            </div>

            <div className={style.rsvpContainer}>
                <div className={style.rsvpContainerTop}>
                    <p>Ensure to RSVP</p>
                    <CustomButton>Attend Event</CustomButton>
                </div>

                <div className={style.horizontalLine} />
                
                <div className={style.rsvpContainerBottom}>
                    <div className={style.iconContainer}>
                        <HiOutlineShare size={14} color="var(--color-text-main)" />
                    </div>
                    
                    <div className={style.iconContainer}>
                        <HiOutlineBookmark size={14} color="var(--color-text-main)" />
                    </div>
                </div>
            </div>
        </div>
    );
};
