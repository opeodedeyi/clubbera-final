import CTASideBanner from "@/components/utility/CTASideBanner/CTASideBanner";
import ProfileTopCard from "@/components/utility/ProfileTopCard/ProfileTopCard";
import Feed from "./comp/Feed/Feed";
import ExploreCommunities from "./comp/ExploreCommunities/ExploreCommunities";
import UpcomingMeeting from "./comp/UpcomingMeeting/UpcomingMeeting";


export default function Dashboard() {
    return (
        <>
            <ProfileTopCard/>
            <UpcomingMeeting />
            <Feed />
            <ExploreCommunities />
            <CTASideBanner
                title={<> Want to make an impact? <br /> Create a community now. </>}
                image="/dashboard/event.jpg"
                description="Begin making an impact at your location by creating a community" 
                buttonText="Create free community"
                destination="/creategroup"/>
        </>
    );
};