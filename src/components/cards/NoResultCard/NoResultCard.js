import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from './NoResultCard.module.css';


export default function NoResultCard({ message, type='grid', svgPath, btnText, btnLink, padding="24px" }) {
    return (
        <div style={{ padding }} className={`${style.noResults} ${type==='grid' ? style.noResultGrid : ''}`}>
            {svgPath && (
                <img src={svgPath} alt="No result" />
            )}
            <p className={style.noResultMessage}>{message}</p>
            {btnText && btnLink && (
                <CustomButton link destination={btnLink}>{btnText}</CustomButton>
            )}
        </div>
    );
}