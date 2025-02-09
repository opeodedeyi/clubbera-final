'use client';

import { useState, useEffect } from 'react';
import { getUserCreatedGroups, getUserJoinedGroups } from '@/app/actions/getGroups';
import CardColumn from '@/components/layout/CardColumn/CardColumn';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CommunityCard from '@/components/cards/CommunityCard/CommunityCard';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';


export default function ProfileSec({ user }) {
    const [organizerOf, setOrganizerOf] = useState([]);
    const [memberOf, setMemberOf] = useState([]);
    const [organizerCount, setOrganizerCount] = useState(0);
    const [memberCount, setMemberCount] = useState(0);
    const [isLoadingOrganizerOf, setIsLoadingOrganizerOf] = useState(true);
    const [isLoadingMemberOf, setIsLoadingMemberOf] = useState(true);

    useEffect(() => {
        loadOrganizerOfGroups();
        loadMemberOfGroups();
    }, [user]);

    const loadOrganizerOfGroups = async () => {
        if (!user?.unique_url) return;
        setIsLoadingOrganizerOf(true);
        try {
            const {groups, pagination} = await getUserCreatedGroups(user.unique_url, 1);
            setOrganizerOf(groups);
            setOrganizerCount(pagination.totalItems);
        } catch (error) {
            console.error('Error loading users:', error);
        } finally {
            setIsLoadingOrganizerOf(false);
        }
    };

    const loadMemberOfGroups = async () => {
        if (!user?.unique_url) return;
        setIsLoadingMemberOf(true);
        try {
            const {groups, pagination} = await getUserJoinedGroups(user.unique_url, 1);
            setMemberOf(groups);
            setMemberCount(pagination.totalItems);
        } catch (error) {
            console.error('Error loading users:', error);
        } finally {
            setIsLoadingMemberOf(false);
        }
    };

    return (
        <CardColumn
            gap="24px"
            width="100%"
            maxWidth="1000px"
            padding="0">
            {/* Organizer Section */}
            <ContainerInfo
                title={`Organizer ${ organizerCount > 0 ? `(${organizerCount})` : '' }` }
                button="See all"
                link='/search?q=a'
                padding='0'
                fontSize="var(--title-font-profile)"
                color="var(--color-text-main)" />
                <CardColumn
                    gap="24px"
                    width="100%"
                    maxWidth="1000px"
                    padding="0 0 24px">
                    {isLoadingOrganizerOf ? (
                        <div>Loading organizer...</div>
                    ) : organizerOf.length > 0 ? (
                        organizerOf.map(group => (
                            <CommunityCard
                                addBorder
                                key={group.id}
                                cardType="small"
                                title={group.title}
                                location={group.location}
                                description={group.description}
                                link={group.unique_url}
                                bannerPhoto={group.image} />
                        ))
                    ) : (
                        <NoResultCard
                            type='flex'
                            svgPath='/svg/nocomm.svg'
                            message='Create your first community for free'
                            btnLink='/creategroup'
                            btnText='Create free community' />
                    )}
                </CardColumn>
            {/* Member Section */}
            <ContainerInfo
                title={`Member ${ memberCount > 0 ? `(${memberCount})` : '' }`}
                button="See all"
                link='/search?q=a'
                padding='0'
                fontSize="var(--title-font-profile)"
                color="var(--color-text-main)" />
                <CardColumn
                    gap="24px"
                    width="100%"
                    maxWidth="1000px"
                    padding="0 0 10px">
                    {isLoadingMemberOf ? (
                        <div>Loading memberships...</div>
                    ) : memberOf.length > 0 ? (
                        memberOf.map(group => (
                            <CommunityCard
                                addBorder
                                key={group.id}
                                cardType="small"
                                title={group.title}
                                location={group.location}
                                description={group.description}
                                link={group.unique_url}
                                bannerPhoto={group.image} />
                        ))
                    ) : (
                        <NoResultCard
                            type='flex'
                            svgPath='/svg/nocomm.svg'
                            message='Communities you join will appear here' />
                    )}
                </CardColumn>
        </CardColumn>
    )
}