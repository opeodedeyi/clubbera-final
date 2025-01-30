'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { trendingTopicsData } from "../Data";
import HelpHero from '../comp/HelpHero/HelpHero';
import ArticleCard from "../comp/ArticleCard/ArticleCard";
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';
import CenterCont from '@/components/layout/CenterCont/CenterCont';
import CardColumn from '@/components/layout/CardColumn/CardColumn';


export default function Help() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        if (pathname.startsWith('/help/search')) {
            const query = searchParams.get('q');
            if (query) {
                setSearchText(decodeURIComponent(query));
            }
        }
    }, [pathname, searchParams]);

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const onSubmit = (e) => {
        console.log("Search submitted");
        router.push(`/help/search?q=${encodeURIComponent(searchText.trim())}`);
    };

    return (
        <div className="centerPage">
            <HelpHero
                searchText={searchText}
                handleSearchChange={handleSearchChange}
                onSubmit={onSubmit} />
            <CenterCont>
                <ContainerInfo
                    title="Search results"
                    padding='32px 0' />
                <CardColumn
                    gap='24px'
                    padding='0 0 32px'
                    width="100%"
                    maxWidth="800px">
                    {trendingTopicsData.map((card, index) => (
                        <ArticleCard
                            key={card.id}
                            id={card.id}
                            subcategory={`How-to`}
                            category={`Guest`}
                            title={card.title}
                            description={card.content}/>
                    ))}
                </CardColumn>
            </CenterCont>
        </div>
    );
}