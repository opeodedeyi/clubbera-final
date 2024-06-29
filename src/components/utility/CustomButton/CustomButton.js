import Link from "next/link";
import style from "./CustomButton.module.css";

const CustomButton = ({ type="button", size='defaultSize', coloring='defaultColoring', link=false, destination, onClick, disabled, children }) => {
    return (
        link ? 
            <Link href={destination} className={`${style.customButton} ${style[size]} ${style[coloring]}`}>
                { children }
            </Link>
        :
            <button type={type} className={`${style.customButton} ${style[size]} ${style[coloring]}`} onClick={onClick} disabled={disabled}>
                { children }
            </button>
    );
};

export default CustomButton;