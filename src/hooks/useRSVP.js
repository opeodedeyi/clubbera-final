'use client';

import { useState, useCallback } from 'react';
import { useQueryParams } from "@/hooks/useQueryParams";
import { useRouter } from 'next/navigation';
import { attendEvent, unattendEvent } from '@/app/actions/attendUnattendEvent';


export function useRSVP(initialStatus, uniqueURL, isRestricted) {
    const router = useRouter();
    const { createQueryString } = useQueryParams();
    const [RSVPStatus, setRSVPStatus] = useState(initialStatus);
    const [isLoading, setIsLoading] = useState(false);

    const handleRSVPAction = useCallback(async () => {
        setIsLoading(true);
        try {
            switch (RSVPStatus) {
                case 'owner':
                    setIsLoading(false);
                    router.push(`?${createQueryString('editMeeting', 'true')}`, { scroll: false });
                    return;
                case 'waitlisted':
                case 'attending':
                    await unattendEvent(uniqueURL, `/meeting/${uniqueURL}`);
                    setRSVPStatus('not attending');
                    break;
                default:
                    const {status} = await attendEvent(uniqueURL, `/meeting/${uniqueURL}`);
                    setRSVPStatus(status);
                    break;
            }
        } catch (error) {
            console.error('Error in RSVP action:', error);
        } finally {
            setIsLoading(false);
        }
    }, [RSVPStatus, uniqueURL, router]);

    const ctaText = {
        'owner': 'Edit activity',
        'attending': 'Edit RSVP',
        'waitlisted': 'waitlisted',
        'not attending': 'Attend',
    }[RSVPStatus];

    return { ctaText, handleRSVPAction, isLoading };
}