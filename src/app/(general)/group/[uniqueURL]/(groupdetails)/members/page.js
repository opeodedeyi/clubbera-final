'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { fetchUsers } from '@/app/actions/groupMembers';
import CardGrid from "@/components/layout/CardGrid/CardGrid";
import MemberCard from "@/components/cards/MemberCard/MemberCard";
import MemberCardSke from "@/components/skeleton/MemberCardSke/MemberCardSke";
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import PaginationFull from '@/components/utility/Pagination/PaginationFull';
import style from './MemberSection.module.css';


export default function GroupDetailsMembers(){
    const params = useParams();
    const uniqueURL = params.uniqueURL;
    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        loadMembers();
    }, [currentPage]);

    const loadMembers = async () => {
        setIsLoading(true);
        try {
            const { members, pagination } = await fetchUsers(uniqueURL, currentPage, 30);
            setMembers(members);
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
        <div className={style.groupMembers}>
                <p className={style.groupMembersTitleText}>MEMBERS</p>

                <CardGrid cardWidth='280'>
                    {isLoading ? (
                        Array(10).fill().map((_, index) => (
                            <MemberCardSke key={index}/>
                        ))
                    ) : members.length > 0 ? (
                        members.map((person, index) => (
                            <MemberCard 
                                key={index}
                                avatar={person.avatar}
                                name={person.full_name} 
                                role={person.role} 
                                date={person.member_since}/>
                        ))
                    ) : (
                        <NoResultCard
                            type='grid'
                            message='You are yet to have any member' />
                    )}
                </CardGrid>

                <PaginationFull
                    totalPages={totalPages}
                    currentPage={currentPage}
                    goToNextPage={goToNextPage}
                    goToPreviousPage={goToPreviousPage}
                    goToPage={goToPage} />
        </div>
    );
};