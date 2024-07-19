'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { fetchUsers, acceptUser, rejectUser } from '@/app/actions/groupRequest';
import RequestsTable from "../../comp/RequestsTable/RequestsTable";
import LoadingSpinner from '@/components/animation/LoadingSpinner/LoadingSpinner';
import style from './RequestsSection.module.css';


const RequestsSection = () => {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [totalPages, setTotalPages] = useState(1);
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
            const users = await fetchUsers(uniqueURL, currentPage);
            setUsers(users);
            // setTotalPages(totalPages);
        } catch (error) {
            console.error('Error loading users:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAccept = async (userId) => {
        try {
            await acceptUser(userId);
            await loadUsers();
        } catch (error) {
            console.error('Error accepting user:', error);
        }
    };

    const handleReject = async (userId) => {
        try {
            await rejectUser(userId);
            router.refresh();
        } catch (error) {
            console.error('Error rejecting user:', error);
        }
    };


    return (
        <div className={style.editMembersContainer}>
            <div className={style.editMembersContainerMain}>
                <div className={style.editMembersHeader}>
                    <p className={style.editMembersHeaderTitle}>Pending requests</p>
                </div>

                {isLoading ? (
                    <div className={style.editMembersHeader}>
                        <div className={style.loadingContainer}>
                            <p className={style.editMembersHeaderText}>Loading</p>
                            <LoadingSpinner height='14px' backgroundColor='var(--color-text-main)' />
                        </div>
                    </div>
                ) : users.length ? (
                    <RequestsTable users={users} onAccept={handleAccept} onReject={handleReject} />
                ) : (
                    <div className={style.editMembersHeader}>
                        <p className={style.editMembersHeaderText}>No pending requests at this time.</p>
                    </div>
                )}
                
                {/* Pagination component goes here */}
            </div>
        </div>
    );
};

export default RequestsSection;