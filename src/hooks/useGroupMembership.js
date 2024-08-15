'use client';

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { joinGroup, leaveGroup } from '@/app/actions/joinLeaveGroup';


export function useGroupMembership(initialStatus, groupId, isPrivate) {
    const [membershipStatus, setMembershipStatus] = useState(initialStatus);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleMembershipAction = useCallback(async () => {
        setIsLoading(true);
        try {
            switch (membershipStatus) {
                case 'owner':
                    setIsLoading(false);
                    router.push(`/group/${groupId}/edit`);
                    return;
                case 'pending':
                case 'member':
                    await leaveGroup(groupId, `/group/${groupId}`);
                    setMembershipStatus('not-member');
                    break;
                default:
                    await joinGroup(groupId, `/group/${groupId}`);
                    if (isPrivate) {
                        setMembershipStatus('pending');
                    } else {
                        setMembershipStatus('member');
                    }
            }
        } catch (error) {
            console.error('Error in membership action:', error);
        } finally {
            setIsLoading(false);
        }
    }, [membershipStatus, groupId, isPrivate, router]);

    const ctaText = {
        'owner': 'Manage community',
        'pending': 'Requested',
        'member': 'Leave community',
        'not-member': 'Join community',
    }[membershipStatus];

    return { ctaText, handleMembershipAction, isLoading };
}