import style from "./TitleBar.module.css";

const TitleBar = ({ title }) => {
    return (
        <div className={style.titleBar}>
            <h1 className={style.titleBarText}>{title}</h1>
        </div>
    );
};

export default TitleBar;