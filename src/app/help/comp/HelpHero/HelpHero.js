import HelpSearchBar from '../HelpSearchBar/HelpSearchBar';
import style from "./HelpHero.module.css";

export default function HelpHero({ searchText, handleSearchChange, onSubmit }) {
    return (
        <div className={style.heroContainer}>
            <p className={style.heroTitle}>Hi, how can we help you?</p>
            
            <HelpSearchBar
                type="search" 
                placeholder="Search how tos and more"
                value={searchText}
                onChange={handleSearchChange}
                width="325px" 
                onSubmit={onSubmit} />
        </div>
    );
}
