import Link from 'next/link';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Image from 'next/image';
import style from "./Attendees.module.css";


const AttendeesCard = ({}) => {
    return (
        <div className={style.attendeesCard}>
            <Image src="/profile.png" width={50} height={50} alt="attendee" className={style.attendeesCardImg}/>
            
            <div className={style.attendeesCardText}>
                <p className={style.attendeesCardName}>John Doe</p>
                <p className={style.attendeesCardRole}>Developer</p>
            </div>
        </div>
    );
}

export default function Attendees({ user }) {
    return (
        <div className={style.profileCont}>
            <div className={style.hostProfileHeader}>
                <p className={style.hostProfileHeaderTitle}>Attendees <span className={style.lighterText}>({'0'})</span></p>

                {/* <Link href={groupUrl} className={style.hostProfileLink}>View all</Link> */}
            </div>

            <div className={style.attendeesGrid}>
                <AttendeesCard/>
            </div>
        </div>
    );
};