import ContactHero from './comp/ContactHero/ContactHero';
import ContactLogin from './comp/ContactLogin/ContactLogin';
import ContactForm from './comp/ContactForm/ContactForm';
import ContactLinks from './comp/ContactLinks/ContactLinks';
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import TwoColMed from "@/components/layout/TwoColumnLayout/TwoColMed";
import { getUserData } from "@/app/actions/getUserData";


export default async function ContactUs() {
    const user = await getUserData();

    return (
        <div className='centerPage'>
            <CenterCont>
                <ContactHero />
                <TwoColMed
                    firstWidth={3}
                    padding="0 0 100px"
                    gap='100px' >
                        {
                            user ? <ContactForm user={user} />
                            : <ContactLogin />
                        }
                        <ContactLinks />
                </TwoColMed>
            </CenterCont>
        </div>
    );
}