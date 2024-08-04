import { notFound } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import FullBanner from './comp/FullBanner/FullBanner';
import BasicDescription from './comp/BasicDescription/BasicDescription';
import HangoutInformation from './comp/HangoutInformation/HangoutInformation';
import style from './MeetingDetails.module.css';


const MeetingDetails = async ({ params }) => {
    return (
        <div className={style.meetingDetailsContainer}>
            <SecHeaderBack />
            <FullBanner />
            <BasicDescription />
            <HangoutInformation/>
        </div>
    );
};

export default MeetingDetails;