'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSearchResults } from '@/app/actions/searchResults';
import CardGrid from '@/components/layout/CardGrid/CardGrid';
import MeetingCardSkeleton from '@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton';
import MeetingCard from "@/components/cards/MeetingCard/MeetingCard";
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import PaginationFull from '@/components/utility/Pagination/PaginationFull';


export default function SearchResult({ query, page, limit, sortBy, upcoming }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [results, setResults] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadResults = async () => {
            setIsLoading(true);
            try {
                console.log('query', query);
                console.log('page', page);
                console.log('limit', limit);
                console.log('sortBy', sortBy);
                console.log('upcoming', upcoming);
                
                const { result, pagination } = await getSearchResults(query, page, limit, sortBy, upcoming);
                setResults(result);
                setTotalPages(pagination.totalPages);
                setError(null);
            } catch (err) {
                setError('Failed to fetch search results');
                console.error(err);
            } finally {
                setIsLoading(false);
            }
        };

        loadResults();
    }, [query, page, limit, sortBy, upcoming]);

    const updatePage = useCallback((newPage) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        current.set('page', newPage.toString());
        const search = current.toString();
        const query = search ? `?${search}` : "";
        router.push(`/search${query}`);
    }, [searchParams, router]);

    const goToNextPage = useCallback(() => {
        if (page < totalPages) {
            updatePage(page + 1);
        }
    }, [page, totalPages, updatePage]);

    const goToPreviousPage = useCallback(() => {
        if (page > 1) {
            updatePage(page - 1);
        }
    }, [page, updatePage]);

    const goToPage = useCallback((pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            updatePage(pageNumber);
        }
    }, [totalPages, updatePage]);

    if (isLoading) return (
        <CardGrid cardWidth='330'>
            {Array(10).fill().map((_, index) => (
                <MeetingCardSkeleton key={index} type='grid' />
            ))}
        </CardGrid>
    )
    if (error) return <div>Error: {error}</div>;
    if (!results) return null;

    return (
        <>
            <CardGrid cardWidth='330'>
                {results.length > 0 ? (
                    results.map(meeting => (
                        <MeetingCard
                            key={meeting.id}
                            type='grid'
                            meeting={meeting} />
                    ))
                ) : (
                    <NoResultCard
                        message="Sorry, we could not find what you are looking for"/>
                )}
            </CardGrid>
            <PaginationFull
                totalPages={totalPages}
                currentPage={page}
                goToNextPage={goToNextPage}
                goToPreviousPage={goToPreviousPage}
                goToPage={goToPage} />
        </>
    );
};