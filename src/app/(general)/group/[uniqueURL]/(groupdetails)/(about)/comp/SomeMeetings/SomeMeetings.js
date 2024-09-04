'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getGroupMeetings } from '@/app/actions/getGroupMeetings';
import ContainerTB from '@/components/layout/ContainerTB/ContainerTB';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CardFlex from '@/components/layout/CardFlex/CardFlex';
import MeetingCard from '@/components/cards/MeetingCard/MeetingCard';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import MeetingCardSkeleton from "@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton";


export default function SomeMeetings() {
    const params = useParams();
    const uniqueURL = params.uniqueURL;
    const [meetings, setMeetings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [upcoming, setUpcoming] = useState(true);

    useEffect(() => {
        loadMeetings();
    }, []);

    const loadMeetings = async () => {
        setLoading(true);
        try {
            const {meetings} = await getGroupMeetings(uniqueURL, currentPage, upcoming);
            setMeetings(meetings);
        } catch (error) {
            console.error('Error loading groups:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContainerTB>
            <ContainerInfo
                title="Upcoming activities"
                // description="Events you could attend"
                button="See more"
                link={`/group/${uniqueURL}/activities`} />
                
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