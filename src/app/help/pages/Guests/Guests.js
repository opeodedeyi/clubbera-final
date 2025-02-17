import { getStartedData, trendingTopicsData } from "../../Data";
import GuideCard from '../../comp/GuideCard/GuideCard';
import ArticleCard from "../../comp/ArticleCard/ArticleCard";
import CardGrid from '@/components/layout/CardGrid/CardGrid';
import CardColumn from '@/components/layout/CardColumn/CardColumn';
import ContainerInfo from '@/components/utility/ContainerInfo/ContainerInfo';

export default function Guests() {
    return (
        <>
            <ContainerInfo
                title="Guides for getting started"
                padding='var(--padding-cont) 0' />
            <CardGrid
                gap='var(--padding-cont)'
                padding='0 0 var(--padding-cont)'>
                {getStartedData.map((card, index) => (
                    <GuideCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        icon={card.icon}
                        description={card.content}
                        image={card.image} />
                ))}
            </CardGrid>
            <ContainerInfo
                title="Top articles"
                padding='var(--padding-cont) 0' />
            <CardColumn
                gap='24px'
                padding='0 0 var(--padding-cont)'
                width="100%"
                maxWidth="800px">
                {trendingTopicsData.map((card, index) => (
                    <ArticleCard
                        key={card.id}
                        id={card.id}
                        title={card.title}
                        description={card.content}/>
                ))}
            </CardColumn>
        </>
    );
}
