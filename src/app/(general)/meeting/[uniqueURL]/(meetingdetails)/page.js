import { notFound } from 'next/navigation';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import FullBanner from './comp/FullBanner/FullBanner';
import BasicDescription from './comp/BasicDescription/BasicDescription';
import HangoutInformation from './comp/HangoutInformation/HangoutInformation';
import { getMeetingDetails } from "@/app/actions/getMeetingDetails";


export default async function MeetingDetails({ params }) {
    const { meeting } = await getMeetingDetails(params.uniqueURL);
    
    return (
        <>
            <SecHeaderBack />
            <FullBanner banner={meeting?.banner} />
            <BasicDescription meeting={meeting} />
            <HangoutInformation meeting={meeting}/>
        </>
    );
};
