'use client';

import { useState, useEffect } from 'react';
import { getUserCreatedGroups } from '@/app/actions/getGroups';
import Style from "./FormedGroups.module.css";


export default function FormedGroups({user}) {
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
            const {groups, pagination} = await getUserCreatedGroups(user.unique_url, currentPage);
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