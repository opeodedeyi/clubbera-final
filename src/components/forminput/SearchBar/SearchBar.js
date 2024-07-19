import { HiOutlineSearch } from "react-icons/hi";
import style from "./SearchBar.module.css";


const SearchBar = ({ type, placeholder, value, onChange }) => {
    return (
        <div className={style.mainSearchBar}>
            <HiOutlineSearch 
                size="16px" 
                color="var(--color-text-main)"
                className={style.mainSearchBarIcon}/>
            <input
                name={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"/>
        </div>
    );
}

export default SearchBar
