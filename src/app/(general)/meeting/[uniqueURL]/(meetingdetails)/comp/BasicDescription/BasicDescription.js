import Image from "next/image";
import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./BasicDescription.module.css";


export default function BasicDescription({ meeting }) {
    return (
        <div className={style.hangoutContainer}>
            <div className={style.hangoutDetailsContainer}>
                <div className={style.hangoutBasicInfo}>
                    <p className={style.hangoutTitle}>{meeting?.title}</p>
                    
                    <div className={style.attendeeInfo}>
                        { meeting?.attending_count?.length > 0 &&
                            <div className={style.attendeeImages}>
                                { meeting?.attending_avatars.map((image, index) => (
                                    <Image
                                        key={index}
                                        src={image}
                                        alt="Attendee"
                                        height={30}
                                        width={30} />
                                ))}
                            </div>
                        }
                    
                        <p className={style.totalAttendees}>{meeting?.attending_count} Attendee{ meeting?.attending_counts > 1 ? 's' : ''}</p>
                    </div>
                </div>

                <p className={style.hangoutDescription}>{meeting?.description}</p>
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
