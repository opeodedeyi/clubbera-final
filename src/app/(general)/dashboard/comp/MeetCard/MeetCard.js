'use client';

import { useEffect, useState } from 'react';
import { getSearchResults } from '@/app/actions/searchResults';
import ContainerTB from '@/components/layout/ContainerTB/ContainerTB';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CardFlex from '@/components/layout/CardFlex/CardFlex';
import MeetingCard from '@/components/cards/MeetingCard/MeetingCard';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import MeetingCardSkeleton from "@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton";


export default function MeetCard({children}) {
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadMeetings();
    }, []);

    const loadMeetings = async () => {
        setLoading(true);
        try {
            const { result } = await getSearchResults('a', 1, 8, 'relevance', true);
            setMeetings(result);
        } catch (error) {
            console.error('Error loading groups:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContainerTB>
            <ContainerInfo
                title="Some fun events"
                description="Events you could attend"
                button="See more"
                link='/search?q=a' />
            <CardFlex>
                {loading ? (
                        Array(10).fill().map((_, index) => (
                            <MeetingCardSkeleton key={index} type="flex" />
                        ))
                    ) : meetings.length > 0 ? (
                        meetings.map(meeting => (
                            <MeetingCard
                                key={meeting.id}
                                type="flex"
                                meeting={meeting}/>
                        ))
                    ) : (
                        <NoResultCard
                            type='grid'
                            message='Some fun ones will show up here' />
                    )
                }
            </CardFlex>
        </ContainerTB>
    )
}