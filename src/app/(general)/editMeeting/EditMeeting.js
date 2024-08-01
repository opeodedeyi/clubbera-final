import EditMeetingContent from './EditMeetingContent';
import EditMeetingHeader from './comp/EditMeetingHeader/EditMeetingHeader';
import EditMeetingNavigation from './comp/EditMeetingNavigation/EditMeetingNavigation';
import { EditMeetingProvider } from '@/app/context/EditMeetingContext';


export default function EditMeeting() {
    const meeting = { // mock data
        id: 1,
        unique_url: "dslksdkdsldskkdslkds",
        title: 'Meeting title',
        description: 'Meeting description',
        date_of_meeting: '2021-09-01',
        time_of_meeting: '22:00',
        duration: '1:00',
        capacity: 10,
        location: 'Bradford, UK',
        lat: 0,
        lng: 0,
        banner: null,
    };

    return (
        <EditMeetingProvider meeting={meeting}>
            <EditMeetingHeader />
            <EditMeetingNavigation />
            <EditMeetingContent />
        </EditMeetingProvider>
    );
}