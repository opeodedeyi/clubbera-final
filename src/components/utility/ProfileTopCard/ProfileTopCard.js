'use client';

import { useUser } from "@/app/context/UserContext";
import { truncateTextWithDot } from "@/utils/textUtils";
import style from "./ProfileTopCard.module.css";


const ProfileTopCard = () => {
    const { user, loading } = useUser();

    return (
        <>
            {/* animate the loading animation */}
            <div className={style.profileHero}>
                <div className={style.profileHeroCont}>
                    {loading ? (
                        <div className={style.profileHeroNameLoading}></div>
                    ) : user ? (
                        <p className={style.profileHeroName}>
                            Hi {truncateTextWithDot(user.full_name, 20)},
                        </p>
                    ) : (
                        <p className={style.profileHeroName}>Welcome,</p>
                    )}
                        <p className={style.profileHeroSpeech}>
                            Get started today with Clubbera
                        </p>
                </div>
            </div>
        </>
    );
};

export default ProfileTopCard;