import SearchInfo from "./comp/SearchInfo/SearchInfo";
import Filters from "./comp/Filters/Filters";
import SearchResult from "./comp/SearchResult/SearchResult";


export default function SearchPage({ searchParams }) {
    const query = searchParams.q||'';
    const page = parseInt(searchParams.page || '1', 10);
    const limit = parseInt(searchParams.limit || '20', 10);
    const sortBy = searchParams.sortBy || 'relevance'; //or date
    const upcoming = searchParams.upcoming || true; //or false

    return (
        <>
            <Filters
              initialSortBy={sortBy}
              initialUpcoming={upcoming}
              initialLimit={limit}/>
            <SearchInfo
                text={query}/>
            <SearchResult 
                query={query}
                page={page}
                limit={limit}
                sortBy={sortBy}
                upcoming={upcoming}
            />
        </>
    )
}
