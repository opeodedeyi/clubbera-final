import EditMeetingContent from './EditMeetingContent';
import EditMeetingHeader from './comp/EditMeetingHeader/EditMeetingHeader';
import EditMeetingNavigation from './comp/EditMeetingNavigation/EditMeetingNavigation';
import { EditMeetingProvider } from '@/app/context/EditMeetingContext';


export default function EditMeeting({meeting}) {
    return (
        <EditMeetingProvider meeting={meeting}>
            <EditMeetingHeader />
            <EditMeetingNavigation />
            <EditMeetingContent />
        </EditMeetingProvider>
    );
}