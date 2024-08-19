'use client';

import { useUser } from "@/app/context/UserContext";
import { truncateTextWithDot } from "@/utils/textUtils";
import ProfileTopCardSke from "@/components/skeleton/ProfileTopCardSke/ProfileTopCardSke";
import style from "./ProfileTopCard.module.css";


const ProfileTopCard = () => {
    const { user, loading } = useUser();

    if (loading) return <ProfileTopCardSke />;

    return (
        <div className={style.profileHero}>
            <div className={style.profileHeroCont}>
                    <p className={style.profileHeroName}>
                        Hi {truncateTextWithDot(user?.full_name, 24)},
                    </p>
                    <p className={style.profileHeroSpeech}>
                        Get started today with Clubbera
                    </p>
            </div>
        </div>
    );
};

export default ProfileTopCard;