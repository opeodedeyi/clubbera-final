import Link from "next/link";
import "./CustomButton.css";

const CustomButton = ({ type="button", size='default-size', coloring='default-coloring', link=false, destination, onClick, disabled, children }) => {
    return (
        link ? 
            <Link href={destination} className={`custom-button ${size} ${coloring}`}>
                { children }
            </Link>
        :
            <button type={type} className={`custom-button ${size} ${coloring}`} onClick={onClick} disabled={disabled}>
                { children }
            </button>
    );
};

export default CustomButton
