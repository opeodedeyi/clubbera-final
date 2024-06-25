import style from "./CustomTag.module.css";


const CustomTag = ({ selected="notSelected", onClick, children }) => {
    return (
        <button type="button" className={`${style.customTag} ${style[selected]}`} onClick={onClick}>
            { children }
        </button>
    );
};

export default CustomTag
