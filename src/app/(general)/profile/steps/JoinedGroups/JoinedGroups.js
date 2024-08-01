'use client';

import { useState, useEffect } from 'react';
import { getUserJoinedGroups } from '@/app/actions/getGroups';
import Style from "./JoinedGroups.module.css";


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
  
    return (
        <div>
        </div>
    )
}