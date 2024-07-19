import Image from "next/image";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from './CTASideBanner.module.css';

const CTASideBanner = ({title, description, buttonText, image, destination, reverse=false }) => {
    return (
        <div className={style.CTASide}>
            <div className={`${style.CTASideContainer} ${ reverse ? style.normalFacing : style.reverseFacing }`}>
                <div className={style.CTASideContainerImage}>
                    <Image 
                        src={image} 
                        alt={title}
                        layout="fill"
                        objectFit="cover" />
                </div>
                <div className={style.CTASideContainerMain}>
                    <div className={style.CTASideContainerText}>
                        <h1 className={style.CTASideContainerTextTitle}>{title}</h1>
                        <p className={style.CTASideContainerTextDescription}>{description}</p>
                    </div>
                    { buttonText && <CustomButton link destination={`${destination}`} size="defaultSize">{buttonText}</CustomButton>}
                </div>
            </div>
        </div>
    );
};

export default CTASideBanner;