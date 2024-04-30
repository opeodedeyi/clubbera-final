'use client';

import React, { useMemo } from 'react';
import { useUserSession } from "@/hooks/useUserSession";
import DashboardContent from "@/app/(general)/dashboard/DashboardContent";
import "@/app/style/homepage.css"


export default function Dashboard({ searchParams }) {
    const user = useUserSession();

    const memoizedSearchParams = useMemo(() => searchParams, [searchParams]);

    return (
        <>
            {user && <DashboardContent user={user} searchParams={memoizedSearchParams} />}
        </>
    )
}