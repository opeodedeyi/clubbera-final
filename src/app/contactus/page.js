import { redirect } from 'next/navigation';
import ContactHero from './comp/ContactHero/ContactHero';
import ContactForm from './comp/ContactForm/ContactForm';
import ContactLinks from './comp/ContactLinks/ContactLinks';
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import TwoColMed from "@/components/layout/TwoColumnLayout/TwoColMed";
import { getUserData } from "@/app/actions/getUserData";


export default async function ContactUs() {
    const user = await getUserData();

    if (!user) {
        redirect('/');
    }

    return (
        <div className='centerPage'>
            <CenterCont>
                <ContactHero />
                <TwoColMed
                    firstWidth={3}
                    padding="0 0 100px"
                    gap='100px' >
                        <ContactForm user={user} />
                        <ContactLinks />
                </TwoColMed>
            </CenterCont>
        </div>
    );
}