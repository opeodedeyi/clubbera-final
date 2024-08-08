import Filters from "./comp/filters"
import SearchCard from "./comp/searchCard"
import style from "./search.module.css"
export default function search() {
    return (
        <>
        <div className={style.searchContainer}>
          <Filters/>
          <SearchCard/>
        </div>
        </>
    )
}
