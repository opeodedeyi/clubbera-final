import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { formatDateLong, formatDateWithoutTime, extractTimeFromDate } from '@/utils/dateUtils';
import CustomButton from '@/components/utility/CustomButton/CustomButton';
import style from './MeetingCard.module.css';

export default function MeetingCard({ type, meeting, showButton=false }) {
    const router = useRouter();

    const goToMeeting = () => {
        router.push(`/meeting/${meeting.unique_url}`, { scroll: false });
    }

    console.log(meeting);
    
    
    return (
        <div
            className={type === "grid" ? style.gridMeetingCard : style.flexMeetingCard}
            onClick={goToMeeting}>
            <div className={style.cardImage}>
                <Image
                    src={meeting?.banner || "/group.png"}
                    alt='Meeting Image'
                    fill={true}
                    quality={60}
                />
            </div>
            <div className={style.cardContent}>
                <div className={style.cardContentBasic}>
                    <p className={style.cardDate}>{formatDateWithoutTime(meeting?.date_of_meeting)}, {extractTimeFromDate(meeting?.time_of_meeting)}</p>

                    <div className={style.cardContentText}>
                        <p className={style.cardTitle}>{meeting?.title}</p>
                        <p className={style.cardLocation}>
                            <HiOutlineLocationMarker className={style.locMarker}/>
                            {meeting?.location}
                        </p>
                    </div>
                </div>

                <p className={style.cardDescription}>{meeting?.description}</p>

                <div className={style.cardFooterMembers}>
                    {meeting?.attendees_avatar && meeting?.attendees_avatar.length > 0 && (
                        <div className={style.avatarWrapperMain}>
                            {meeting?.attendees_avatar.slice(0, 2).map((avatar, index) => (
                                <div key={index} className={style.avatarWrapper} style={{zIndex: index}}>
                                    <Image
                                        src={avatar}
                                        alt={`Member ${index + 1}`}
                                        width={40}
                                        height={40}
                                    />
                                </div>
                            ))}
                        </div>
                    )}

                    <p>{meeting?.attendee_count} people going</p>
                </div>
            </div>

            
            {showButton && (
                <div className={style.cardFooter}>
                    <CustomButton>Hello</CustomButton>
                </div>
            )}
        </div>
    )
}