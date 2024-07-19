import AboutSection from "./steps/AboutSection/AboutSection";
import EventSection from "@/components/pages/groupDetails/EventSection";
import DiscussionSection from "@/components/pages/groupDetails/DiscussionSection";
import MemberSection from "./steps/MemberSection/MemberSection";

export default function GroupPages({ group, activeTab }) {
    return (
        <>
            {activeTab === 'about' && <AboutSection group={group}/>}
            {activeTab === 'events' && <EventSection/>}
            {activeTab === 'discussions' && <DiscussionSection/>}
            {activeTab === 'members' && <MemberSection/>}
        </>
    );
}