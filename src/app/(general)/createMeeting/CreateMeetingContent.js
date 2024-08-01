import { useCreateMeeting } from '@/app/context/CreateMeetingContext';
import BasicDetails from './steps/BasicDetails';
import EventSetup from './steps/EventSetup';


export default function CreateMeetingContent() {
    const {
        currentTab
    } = useCreateMeeting();

    return (
        <>
            {currentTab === 1 && <BasicDetails />}
            {currentTab === 2 && <EventSetup />}
        </>
    );
}