'use client';

import { useEffect, useState } from 'react';
import { searchGroup } from '@/app/actions/searchGroup';
import ContainerTB from '@/components/layout/ContainerTB/ContainerTB';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CardColumn from '@/components/layout/CardColumn/CardColumn';
import CommunityCard from '@/components/cards/CommunityCard/CommunityCard';
import NoResultCard from '@/components/cards/NoResultCard/NoResultCard';
import GroupCardSkeleton from "@/components/skeleton/GroupCardSkeleton/GroupCardSkeleton";


export default function ExploreCommunities({children}) {
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadCommunities();
    }, []);

    const loadCommunities = async () => {
        setLoading(true);
        try {
            const { groups } = await searchGroup('a', 1, 5);
            setGroups(groups);
            console.log(groups);
        } catch (error) {
            console.error('Error loading groups:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <ContainerTB gap='40px' justifyContent='flex-start' alignItems='flex-start'>
            <ContainerInfo
                title="Explore communities"
                description="Find communities you could connect to"
                padding='0' />
            <CardColumn maxWidth='500px' gap='24px'>
                {loading ? (
                        Array(10).fill().map((_, index) => (
                            <GroupCardSkeleton key={index} type="flex" />
                        ))
                    ) : groups.length > 0 ? (
                        groups.map(group => (
                            <CommunityCard
                                addBorder
                                key={group.id}
                                cardType="small"
                                title={group.title}
                                location={group.location}
                                description={group.description || ''}
                                link={group.unique_url}
                                bannerPhoto={group.image} />
                        ))
                    ) : (
                        <NoResultCard
                            type='grid'
                            message='Some fun ones will show up here' />
                    )
                }
            </CardColumn>
        </ContainerTB>
    )
}