import { notFound } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import FullBanner from './comp/FullBanner/FullBanner';
import BasicDescription from './comp/BasicDescription/BasicDescription';
import HangoutInformation from './comp/HangoutInformation/HangoutInformation';
import { getMeetingDetails } from "@/app/actions/getMeetingDetails";
import style from './MeetingDetails.module.css';


const MeetingDetails = async ({ params }) => {
    const { meeting } = await getMeetingDetails(params.uniqueURL);
    
    return (
        <div className={style.meetingDetailsContainer}>
            <SecHeaderBack />
            <FullBanner banner={meeting?.banner} />
            <BasicDescription meeting={meeting} />
            <HangoutInformation meeting={meeting}/>
        </div>
    );
};

export default MeetingDetails;