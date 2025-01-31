'use client';

import { useEffect, useState } from 'react';
// import { getUpcomingEvents } from '@/app/actions/upcomingEvents';
import ContainerTB from '@/components/layout/ContainerTB/ContainerTB';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import LargeActivityCard from '@/components/cards/LargeActivityCard/LargeActivityCard';
import ActivityNavigation from '@/components/Navigation/ActivityNavigation/ActivityNavigation';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import MeetingCardSkeleton from "@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton";
import style from './UpcomingMeeting.module.css';

export default function UpcomingMeeting() {
    const [events, setEvents] = useState([]);
    const [currentEvent, setCurrentEvent] = useState(0);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     loadMeetings();
    // }, []);

    // const loadMeetings = async () => {
    //     setLoading(true);
    //     try {
    //         const { result } = await getSearchResults('a', 1, 4, 'relevance', true);
    //         setEvents(result);
    //     } catch (error) {
    //         console.error('Error loading groups:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const goToNextEvent = () => {
        if (currentEvent < events.length - 1) {
            setCurrentEvent(currentEvent + 1);
        }
    }

    const goToPreviousEvent = () => {
        if (currentEvent > 0) {
            setCurrentEvent(currentEvent - 1);
        }
    }

    const goToEvent = (index) => {
        console.log('goToEvent', index);
        
        setCurrentEvent(index);
    }

    return (
        <ContainerTB>
            <ContainerInfo
                title="Upcoming activities"
                button="See more"
                link='/search?q=a' />
            
            <div className={style.meetingContainer}>
                <LargeActivityCard
                    activity={events[currentEvent]}
                    goToNextEvent={goToNextEvent}
                    goToPreviousEvent={goToPreviousEvent} />

                <ActivityNavigation
                    length={4}
                    currentStep={currentEvent}
                    goToEvent={goToEvent} />
            </div>
        </ContainerTB>
    );
};