'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { getGroupMeetings } from '@/app/actions/getGroupMeetings';
import CardGrid from "@/components/layout/CardGrid/CardGrid";
import MeetingCard from "@/components/cards/MeetingCard/MeetingCard";
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import MeetingCardSkeleton from '@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton';
import PaginationFull from '@/components/utility/Pagination/PaginationFull';


export default function EventsSection() {
    const params = useParams();
    const uniqueURL = params.uniqueURL;
    const [meetings, setMeetings] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [upcoming, setUpcoming] = useState(true);

    useEffect(() => {
        loadMeetings();
    }, [currentPage, upcoming]);

    const loadMeetings = async () => {
        setIsLoading(true);
        try {
            const {meetings, pagination} = await getGroupMeetings(uniqueURL, currentPage, upcoming);
            setMeetings(meetings);
            setTotalPages(pagination.totalPages);
        } catch (error) {
            console.error('Error loading users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const goToNextPage = () => {
        setCurrentPage((prev) => prev + 1);
    };

    const goToPreviousPage = () => {
        setCurrentPage((prev) => prev - 1);
    };

    const goToPage = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <CardGrid cardWidth='330'>
                {
                    isLoading ? (
                        Array(10).fill().map((_, index) => (
                            <MeetingCardSkeleton key={index} type='grid' />
                        ))
                    ) : meetings.length > 0 ? (
                        meetings.map(meeting => (
                            <MeetingCard
                                key={meeting.id}
                                type='grid'
                                meeting={meeting}
                                showButton={false}/>
                        ))
                    ) : (
                        <NoResultCard
                            message="The organizer is yet to create their first event"/>
                    )
                }
            </CardGrid>

            <PaginationFull
                totalPages={totalPages}
                currentPage={currentPage}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                goToPage={goToPage} />
        </>
    )
};
