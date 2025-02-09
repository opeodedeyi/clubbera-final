import { redirect } from 'next/navigation';
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import TwoColMed from "@/components/layout/TwoColumnLayout/TwoColMed";
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
                <TwoColMed
                    firstWidth={1.8}
                    padding="var(--padding-cont) 0"
                    gap='var(--gap-comp)' >
                    <ProfileMain user={user} />
                    <ProfileSec user={user} />
                </TwoColMed>
            </CenterCont>
        </div>
    );
}