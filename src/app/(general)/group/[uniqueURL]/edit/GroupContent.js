import DetailsSection from './steps/DetailsSection/DetailsSection';
import MemberSection from './steps/MemberSection/MemberSection';
import RequestsSection from './steps/RequestsSection/RequestsSection';
import EventsSection from './steps/EventsSection/EventsSection';
import AnalyticsSection from './steps/AnalyticsSection/AnalyticsSection';

const GroupContent = ({ activeTab }) => {
    return (
        <>
            {activeTab === 'details' && <DetailsSection />}
            {activeTab === 'members' && <MemberSection />}
            {activeTab === 'requests' && <RequestsSection />}
            {activeTab === 'events' && <EventsSection />}
            {activeTab === 'analytics' && <AnalyticsSection />}
        </>
    );
}

export default GroupContent;