'use client';

import { useUser } from "@/app/context/UserContext";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import GroupPeopleIcon from '@/svg/GroupPeopleIcon';
import { capitalizeAndTruncateTextWithDot } from "@/utils/textUtils";
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
                Hi {capitalizeAndTruncateTextWithDot(user.full_name, 20)},
              </p>
            ) : (
              <p className={style.profileHeroName}>Welcome,</p>
            )}
            <p className={style.profileHeroSpeech}>
              Get started today with Clubbera
            </p>
          </div>
          <CustomButton link destination="/creategroup" size="defaultSize">
            <div className={style.profileHeroInnbtn}>
              <GroupPeopleIcon
                className="mobile-only-show"
                color="--color-on-brand"
              />
              Create <span className="desktop-only-show">new</span>
            </div>
          </CustomButton>
        </div>
      </>
    );
};

export default ProfileTopCard;