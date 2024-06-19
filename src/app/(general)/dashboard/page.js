'use client';

import { useUserSession } from "@/hooks/useUserSession";
import DashboardContent from "@/app/(general)/dashboard/DashboardContent";


export default function Dashboard({ searchParams }) {
    const user = useUserSession();

    return (
        <>
            {user && <DashboardContent user={user} searchParams={searchParams} />}
        </>
    )
}