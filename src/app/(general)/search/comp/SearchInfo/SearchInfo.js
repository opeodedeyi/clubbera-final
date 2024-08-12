import style from "./SearchInfo.module.css";


export default function SearchInfo({ text }) {
    return (
        <div className={style.searchInfo}>
            <h4>Showing result for {text}</h4>
            <p>Search for something you love or check out popular events in your area.</p>
        </div>
    );
};
