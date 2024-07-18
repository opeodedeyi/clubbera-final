import CTABanner from "@/components/utility/CTABanner/CTABanner";
import CTASideBanner from "@/components/utility/CTASideBanner/CTASideBanner";
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";


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

            {/* more to go here */}

            <CTASideBanner
                title="Community-building is your most valuable asset"
                image="/group-of-people.png"
                description="Begin your asset-building today by creating communities" 
                buttonText="Begin building"
                destination="/creategroup"
                reverse={true}/>

            {/* more to go here */}

            <CTABanner 
                title="Offer your support"
                image="/support.svg"
                description="Help communities get the items they require to thrive" 
                buttonText="Sponsor a community"
                destination="/sponsor"/>
        </>
    );
};