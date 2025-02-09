import CardGrid from '@/components/layout/CardGrid/CardGrid';
import MeetingCardSkeleton from '@/components/skeleton/MeetingCardSkeleton/MeetingCardSkeleton';
import FilterSkeleton from '@/components/skeleton/FilterSkeleton/FilterSkeleton';
import SearchInfoSkeleton from '@/components/skeleton/SearchInfoSkeleton/SearchInfoSkeleton';


export default function SearchLoading({ searchParams }) {
    return (
        <>
            <FilterSkeleton/>
            <SearchInfoSkeleton/>
            <CardGrid cardWidth='330'>
                {Array(12).fill().map((_, index) => (
                    <MeetingCardSkeleton key={index} type='grid' />
                ))}
            </CardGrid>
        </>
    )
}