import style from "./CenterCont.module.css";

export default function CenterCont({ children }) {
    return (
        <div className={style.centerPage}>
            {children}
        </div>
    );
}