'use client';

import { useState, useEffect } from 'react';
import { getUserJoinedGroups } from '@/app/actions/getGroups';
import CardGridContainer from '@/components/layout/CardGridContainer/CardGridContainer';
import GroupCard from '@/components/cards/GroupCard/GroupCard';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import GroupCardSkeleton from '@/components/cards/GroupCardSkeleton/GroupCardSkeleton';
import Pagination from '@/components/utility/Pagination/Pagination';


export default function JoinedGroups({user}) {
    const [groups, setGroups] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadGroups();
    }, [currentPage]);

    const loadGroups = async () => {
        setIsLoading(true);
        try {
            const {groups, pagination} = await getUserJoinedGroups(user.unique_url, currentPage);
            setGroups(groups);
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
            <CardGridContainer>
                {isLoading ? (
                    Array(10).fill().map((_, index) => (
                        <GroupCardSkeleton key={index} type="grid" />
                    ))
                ) : groups.length > 0 ? (
                    groups.map(group => (
                        <GroupCard
                            key={group.id}
                            type="grid"
                            group={group}/>
                    ))
                ) : (
                    <NoResultCard
                        type='grid'
                        message='You are not a member of any group'/>
                )}
            </CardGridContainer>

            <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                goToPage={goToPage}/>
        </>
    )
}