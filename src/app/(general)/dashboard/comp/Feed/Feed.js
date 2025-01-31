'use client';

import { useEffect, useState } from 'react';
// import { getUpcomingEvents } from '@/app/actions/upcomingEvents';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import FeedCard from '@/components/cards/FeedCard/FeedCard';
import style from './Feed.module.css';

export default function Feed() {
    const [post, setPost] = useState([]);
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

    return (
        <div className={style.feedWrapper}>
            <ContainerInfo
                title="Here is what's happening"
                description="Be a part of ongoing conversations"
                padding='0' />
            
            <div className={style.feed}>
                <FeedCard
                    contentType='activity' />

                <FeedCard
                    contentType='discussion' />
            </div>
        </div>
    );
};