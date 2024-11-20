'use client';

import { useUser } from "@/app/context/UserContext";
import GroupPeopleIcon from '@/svg/GroupPeopleIcon';
import { truncateTextWithDot } from "@/utils/textUtils";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
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

            <CustomButton link destination="/creategroup" size="defaultSize">
                <div className={style.profileHeroInnbtn}>
                    <GroupPeopleIcon
                        className={style.mobileOnlyShow}
                        color="--color-on-brand" />

                    Create <span className={style.desktopOnlyShow}>free community</span>
                </div>
            </CustomButton>
        </div>
    );
};

export default ProfileTopCard;