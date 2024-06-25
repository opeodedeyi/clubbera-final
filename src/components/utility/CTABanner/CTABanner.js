import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from './CTABanner.module.css';

const CTABanner = ({title, description, buttonText, image, destination}) => {
    return (
        <div className={style.CTACont}>
            <div className={style.CTAContainer}>
                <div className={style.CTAContainerTop}>
                    {/* image goes here */}
                    <div className={style.CTAContainerText}>
                        <h1 className={style.CTAContainerTextTitle}>{title}</h1>
                        <p className={style.CTAContainerTextDescription}>{description}</p>
                    </div>
                </div>
                <CustomButton link destination={`${destination}`} size="defaultSize">{buttonText}</CustomButton>
            </div>
        </div>
    );
};

export default CTABanner;