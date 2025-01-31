'use client';

import { useEffect, useState } from 'react';
import { searchGroup } from '@/app/actions/searchGroup';
import ContainerTB from '@/components/layout/ContainerTB/ContainerTB';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CardColumn from '@/components/layout/CardColumn/CardColumn';
import GroupCard from '@/components/cards/GroupCard/GroupCard';
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
            const { groups } = await searchGroup('a', 1, 8);
            setGroups(groups);
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
            <CardColumn>
                {loading ? (
                        Array(10).fill().map((_, index) => (
                            <GroupCardSkeleton key={index} type="flex" />
                        ))
                    ) : groups.length > 0 ? (
                        groups.map(group => (
                            <GroupCard
                                key={group.id}
                                type="flex"
                                group={group}/>
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