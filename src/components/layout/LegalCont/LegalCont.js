import style from "./LegalCont.module.css";

export default function LegalCont ({ children }) {
    return (
        <div className={style.legalContainer}>
            <div className={style.legalContent}>
                {children}
            </div>
        </div>
    );
}