'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { fetchUsers } from '@/app/actions/groupMembers';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import MembersTable from "../../comp/MembersTable/MembersTable";
import Pagination from '@/components/utility/Pagination/Pagination';
import LoadingSpinner from '@/components/animation/LoadingSpinner/LoadingSpinner';
import style from './MemberSection.module.css';


const MemberSection = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const uniqueURL = params.uniqueURL;
    const router = useRouter();

    useEffect(() => {
        loadUsers();
    }, [currentPage]);

    const loadUsers = async () => {
        setIsLoading(true);
        try {
            const { members, pagination } = await fetchUsers(uniqueURL, currentPage);
            setUsers(members);
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
        <div className={style.editMembersContainer}>
            <div className={style.editMembersContainerMain}>
                <div className={style.editMembersHeader}>
                    <p className={style.editMembersHeaderTitle}>Members</p>
                    <CustomButton size="normalButtonSize">Invite user</CustomButton>
                </div>
                <div className={style.editMembersTableContainer}>
                    {isLoading ? (
                        <div className={style.editMembersOtherCont}>
                            <div className={style.loadingContainer}>
                                <p className={style.editMembersHeaderText}>Loading</p>
                                <LoadingSpinner height='14px' backgroundColor='var(--color-text-main)' />
                            </div>
                        </div>
                    ) : users.length ? (
                        <MembersTable 
                            users={users}/>
                    ) : (
                        <div className={style.editMembersOtherCont}>
                            <p className={style.editMembersHeaderText}>No members found</p>
                        </div>
                    )}
                </div>

                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    goToNextPage={goToNextPage}
                    goToPreviousPage={goToPreviousPage}
                    goToPage={goToPage}/>
            </div>
        </div>
    );
};

export default MemberSection;