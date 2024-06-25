import style from "./SearchBar.module.css";

const SearchBar = ({ type, placeholder, value, onChange }) => {
    return (
        <div className={style.mainSearchBar}>
            <svg className={style.mainSearchBarIcon} width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M7.66665 14.5C3.89998 14.5 0.833313 11.4334 0.833313 7.66671C0.833313 3.90004 3.89998 0.833374 7.66665 0.833374C11.4333 0.833374 14.5 3.90004 14.5 7.66671C14.5 11.4334 11.4333 14.5 7.66665 14.5ZM7.66665 1.83337C4.44665 1.83337 1.83331 4.45337 1.83331 7.66671C1.83331 10.88 4.44665 13.5 7.66665 13.5C10.8866 13.5 13.5 10.88 13.5 7.66671C13.5 4.45337 10.8866 1.83337 7.66665 1.83337Z" fill="#625F5F"/>
                <path d="M14.6667 15.1666C14.54 15.1666 14.4134 15.12 14.3134 15.02L12.98 13.6866C12.7867 13.4933 12.7867 13.1733 12.98 12.98C13.1734 12.7866 13.4934 12.7866 13.6867 12.98L15.02 14.3133C15.2134 14.5066 15.2134 14.8266 15.02 15.02C14.92 15.12 14.7934 15.1666 14.6667 15.1666Z" fill="#625F5F"/>
            </svg>
            <input
                name={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                autoComplete="off"
            />
        </div>
    );
}

export default SearchBar
