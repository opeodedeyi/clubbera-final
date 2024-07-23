import { notFound } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import style from './MeetingDetails.module.css';


const MeetingDetails = async ({ params }) => {
    return (
        <div className={style.meetingDetailsContainer}>
            <SecHeaderBack />
        </div>
    );
};

export default MeetingDetails;