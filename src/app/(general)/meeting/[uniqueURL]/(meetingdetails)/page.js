import { notFound } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import style from './MeetingDetails.module.css';
import HangoutDescription from './hangoutDescription';
import HangoutInformation from './hangoutInformation';


const MeetingDetails = async ({ params }) => {
    return (
        <div className={style.meetingDetailsContainer}>
            <SecHeaderBack />
            <HangoutDescription />
            <HangoutInformation/>
        </div>
    );
};

export default MeetingDetails;