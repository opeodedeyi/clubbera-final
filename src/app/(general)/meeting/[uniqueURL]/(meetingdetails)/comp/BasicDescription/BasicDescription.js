import { HiOutlineBookmark, HiOutlineShare } from "react-icons/hi";
import AvatarCards from "@/components/utility/AvatarCards/AvatarCards";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./BasicDescription.module.css";


export default function BasicDescription({ meeting }) {
    return (
        <div className={style.hangoutContainer}>
            <div className={style.hangoutDetailsContainer}>
                <div className={style.hangoutBasicInfo}>
                    <p className={style.hangoutTitle}>{meeting?.title}</p>

                    <AvatarCards
                        count={meeting?.attending_count}
                        images={meeting?.attending_avatars}
                        text="people going" />
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
