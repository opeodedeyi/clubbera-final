import CTABanner from "@/components/utility/CTABanner/CTABanner";
import CTASideBanner from "@/components/utility/CTASideBanner/CTASideBanner";
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";
import CommCard from "./comp/CommCard/CommCard";
import MeetCard from "./comp/MeetCard/MeetCard";


export default function Dashboard() {
    return (
        <>
            <ProfileTopCard/>
            
            <CTASideBanner
                title="Create your community"
                image="/dashboard/groupp.jpg"
                description="Bring people together around your passion. Start building your community on Clubbera today, absolutely free!" 
                buttonText="Create new commuity"
                destination="/creategroup"
                reverse={true} />
            
            <CommCard />

            {/* <CTABanner 
                title="Community-building is your most valuable asset"
                image="/people-two.svg"
                description="Bring people together around your passion. Start building your community on Clubbera today, absolutely free!" 
                buttonText="Create new commuity"
                destination="/creategroup"/> */}

            <CTASideBanner
                title="Community-building is your most valuable asset"
                image="/dashboard/event.jpg"
                description="Begin your asset-building today by creating communities" 
                buttonText="Begin building"
                destination="/creategroup"/>

            <MeetCard />
        </>
    );
};