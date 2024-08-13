import CTABanner from "@/components/utility/CTABanner/CTABanner";
import CTASideBanner from "@/components/utility/CTASideBanner/CTASideBanner";
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";
import CommCard from "./comp/CommCard/CommCard";
import MeetCard from "./comp/MeetCard/MeetCard";


export default function Dashboard() {
    return (
        <>
            <ProfileTopCard/>
            
            <CTABanner 
                title="Create your first community"
                image="/people-two.svg"
                description="Connecting people on Clubbera is exciting; the best part is that its completely free" 
                buttonText="Create new commuity"
                destination="/creategroup"/>
            
            <CommCard />

            <CTASideBanner
                title="Community-building is your most valuable asset"
                image="/group-of-people.png"
                description="Begin your asset-building today by creating communities" 
                buttonText="Begin building"
                destination="/creategroup"
                reverse={true}/>

            <MeetCard />
        </>
    );
};