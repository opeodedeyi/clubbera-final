import TwoColMed from "@/components/layout/TwoColumnLayout/TwoColMed";
import TwoColRev from '@/components/layout/TwoColumnLayout/TwoColRev';
import SecHeaderBack from '@/components/header/SecHeaderBack/SecHeaderBack';
import FullBanner from './comp/FullBanner/FullBanner';
import BasicDescription from './comp/BasicDescription/BasicDescription';
import Attendees from './comp/Attendees/Attendees';
import GroupDet from './comp/GroupDet/GroupDet';
import ActionFooter from './comp/ActionFooter/ActionFooter';
import HangoutInformation from './comp/HangoutInformation/HangoutInformation';
import { getMeetingDetails } from "@/app/actions/getMeetingDetails";


export default async function MeetingDetails({ params }) {
    const { meeting } = await getMeetingDetails(params.uniqueURL);
    
    return (
        <>
            <SecHeaderBack />
            <TwoColMed padding='0 var(--container-padding) 30px'>
                <FullBanner banner={meeting?.banner} />
                
                <BasicDescription meeting={meeting} />
            </TwoColMed>

            {/* sponsors goes here in the future */}
            
            <TwoColRev padding='30px var(--container-padding) 30px' firstWidth={3}>
                <HangoutInformation meeting={meeting}/>

                <GroupDet group={meeting?.group}/>
            </TwoColRev>

            <TwoColMed padding='30px var(--container-padding) 30px' firstWidth={3} gap='40px'>
                <div>
                    <Attendees/>

                    {/* comments goes here */}
                </div>
            </TwoColMed>

            <ActionFooter meeting={meeting}/>
        </>
    );
};
