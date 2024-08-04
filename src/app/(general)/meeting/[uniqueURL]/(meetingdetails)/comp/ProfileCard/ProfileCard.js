import Image from "next/image";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "./ProfileCard.module.css";


export default function ProfileCard() {
    return (
        <div className={style.hostProfileDetails}>
            <div className={style.hostProfile}>
                <div className={style.hostAvatar}>
                    <Image
                        src="/profile.png"
                        alt="Host Image"
                        height={50}
                        width={50}
                        className={style.hostImage} />
                </div>
                
                <div className={style.hostDetailsText}>
                    <p className={style.hostProfileName}>Opeyemi Opeyemi</p>
                    <p className={style.hostProfileGmail}>opeyemi@gmail.com</p>
                </div>
            </div>

            <CustomButton
                coloring="inverseColoring"
                size="defaultSize">
                View Profile
            </CustomButton>
        </div>
    );
};