import { HiOutlineSearch } from "react-icons/hi";
import style from './HelpHero.module.css';

export default function HelpHero() {
    return (
      <div className={style.heroContainer}>
        <p className={style.heroTitle}>Hi, how can we help you?</p>
        <div className={style.searchBarContainer}>
          <input
            type="search"
            placeholder="Search how tos and more"
            className={style.searchBarInput}
          />
          <HiOutlineSearch
            size="16px"
            color="var(--color-text-main)"
            className={style.searchBarIcon}
          />
        </div>
      </div>
    );
}