import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from './CTASideBanner.module.css';

const CTASideBanner = ({title, description, buttonText, image, destination, reverse=false }) => {
    return (
        <div className={style.CTASide}>
            <div className={`${style.CTASideContainer} ${ reverse ? style.normalFacing : style.reverseFacing }`}>
                {/* image goes here */}
                <div className={style.CTASideContainerMain}>
                    <div className={style.CTAContainerText}>
                        <h1 className={style.CTAContainerTextTitle}>{title}</h1>
                        <p className={style.CTAContainerTextDescription}>{description}</p>
                    </div>
                    { buttonText && <CustomButton link destination={`${destination}`} size="defaultSize">{buttonText}</CustomButton>}
                </div>
            </div>
        </div>
    );
};

export default CTASideBanner;