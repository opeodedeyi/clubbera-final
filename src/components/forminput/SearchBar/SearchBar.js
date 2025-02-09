import { HiOutlineArrowRight, HiOutlineSearch } from "react-icons/hi";
import style from "./SearchBar.module.css";


export default function SearchBar({ type, placeholder, value, onChange, onSubmit, maxWidth, screenType }) {
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
            className={`${style.mainSearchBar} ${screenType === "desktop" ? style.desktopOnlyShow : screenType === "mobile" ? style.mobileOnlyShow : ""}`}
            style={{ maxWidth }} >
            <HiOutlineSearch
                size="14px"
                color="var(--color-text-secondary)"
                className={style.mainSearchBarIcon} />
            <input
                name={type}
                type="search"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onKeyDown={handleKeyDown}
                autoComplete="off" />
            <button type="submit" style={{ display: "none" }}>
                <HiOutlineArrowRight />
            </button>
        </form>
    );
}
