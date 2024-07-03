import Link from "next/link";
import LoadingSpinner from "@/components/animation/LoadingSpinner/LoadingSpinner";
import style from "./CustomButton.module.css";

const CustomButton = ({ type="button", size='defaultSize', coloring='defaultColoring', loadingText, link=false, destination, onClick, disabled, loading, children }) => {
    return (
        link ? 
            <Link href={destination} className={`${style.customButton} ${style[size]} ${style[coloring]}`}>
                { children }
            </Link>
        :
            <button type={type} className={`${style.customButton} ${style[size]} ${style[coloring]}`} onClick={onClick} disabled={disabled || loading}>
                { loading ? loadingText : children } { loading && <LoadingSpinner /> }
            </button>
    );
};

export default CustomButton;