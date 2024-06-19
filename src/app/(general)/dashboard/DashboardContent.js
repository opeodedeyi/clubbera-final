import CustomButton from "@/components/utility/CustomButton/CustomButton";
import GroupPeopleIcon from '@/svg/GroupPeopleIcon';
import { capitalizeAndTruncateTextWithDot } from "@/utils/textUtils";
import CTABanner from "@/components/utility/CTABanner/CTABanner";
import style from "./Dashboard.module.css";


const DashboardContent = ({ user }) => {
    return (
        <>
            <div className={style.homepageProfileHero}>
                <div className={style.homepageProfileHeroCont}>
                    <p className={style.homepageProfileHeroName}>Hi {capitalizeAndTruncateTextWithDot(user?.full_name, 20)},</p>
                    <p className={style.homepageProfileHeroSpeech}>Get started today with Clubbera</p>
                </div>
                <CustomButton link destination="/creategroup" size="default-size">
                    <div className={style.homepageProfileHeroInnbtn}>
                    <GroupPeopleIcon className='mobile-only-show' color='--color-on-brand'/>
                    Create <span className="desktop-only-show">new</span>
                    </div>
                </CustomButton>
            </div>
            <CTABanner 
                title="Create your first community"
                description="Connecting people on Clubbera is exciting; the best part is that its completely free" 
                buttonText="Create new commuity"
                destination="/creategroup"/>

            {/* more to go here */}

            <CTABanner 
                title="Offer your support"
                description="Help communities get the items they require to thrive" 
                buttonText="Sponsor a community"
                destination="/sponsor"/>
        </>
    );
};

export default DashboardContent;