import { redirect } from 'next/navigation';
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import TwoColMed from "@/components/layout/TwoColumnLayout/TwoColMed";
import ProfileHeader from "./comp/ProfileHeader/ProfileHeader";
import ProfileMain from "./comp/ProfileMain/ProfileMain";
import ProfileSec from "./comp/ProfileSec/ProfileSec";
import { getUserData } from "@/app/actions/getUserData";

export default async function Profile(){
    const user = await getUserData();

    if (!user) {
        redirect('/');
    }

    return (
        <div className='centerPage'>
            <CenterCont>
                <ProfileHeader padding="24px 0" title="Personal info"/>
                <TwoColMed
                    firstWidth={1.8}
                    padding="0"
                    gap='72px' >
                    <ProfileMain user={user} />
                    <ProfileSec user={user} />
                </TwoColMed>
            </CenterCont>
        </div>
    );
}