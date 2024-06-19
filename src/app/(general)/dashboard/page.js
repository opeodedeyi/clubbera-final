'use client';

import { useUserSession } from "@/hooks/useUserSession";
import CTABanner from "@/components/utility/CTABanner/CTABanner";
import DashboardContent from "@/app/(general)/dashboard/DashboardContent";


export default function Dashboard({ searchParams }) {
    const user = useUserSession();

    return (
        <>
            {user && <DashboardContent user={user} searchParams={searchParams} />}
            <CTABanner 
                title="Create your first community"
                description="Connecting people on Clubbera is exciting; the best part is that its completely free" 
                buttonText="Create new commuity"
                destination="/creategroup"/>

            {/* more to go here */}

            <CTABanner 
                title="Offer your support"
                description="Help communities get the items they require to thrive" 
                buttonText="Sponsor a community"
                destination="/sponsor"/>
        </>
    )
}