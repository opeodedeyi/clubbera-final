import { HiOutlineArrowRight, HiOutlineSearch } from "react-icons/hi";
import style from "./HelpSearchBar.module.css";


export default function HelpSearchBar({ type, placeholder, value, onChange, onSubmit, width }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (value.trim()) {
            onSubmit();
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            if (value.trim()) {
                onSubmit();
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={style.mainSearchBar}
            style={{ width}}>
            <input
                name={type}
                type="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                autoComplete="off" />
            <HiOutlineSearch
                size="16px"
                color="var(--color-text-main)"
                className={style.mainSearchBarIcon} />
        </form>
    );
}
