import { CreateMeetingProvider } from '@/app/context/CreateMeetingContext';
import CreateMeetingHeader from './comp/Header/Header';
import CreateMeetingNavigation from './comp/Navigation/Navigation';
import CreateMeetingFooter from './comp/Footer/Footer';
import CreateMeetingContent from './CreateMeetingContent';


export default function CreateMeeting({uniqueUrl}) {
    return (
        <CreateMeetingProvider groupUniqueUrl={uniqueUrl}>
            <CreateMeetingHeader/>
            <CreateMeetingNavigation/>
            <CreateMeetingContent/>
            <CreateMeetingFooter/>
        </CreateMeetingProvider>
    );
}