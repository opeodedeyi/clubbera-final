'use client';

import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "../CreateGroup.module.css";


export default function IntroStep({ onClick }) {
    return (
        <div className={style.authFormContentCenter}>
            <div className={style.authCommunityCreatedImage}>
                <img src="/create_community.svg" alt="community created" />
            </div>
            
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>Welcome to Clubbera! Create your community now.</h3>
                    <p className={style.authFormContentIntroText}>Create your community in four (4) simple steps: Choose a location, select topics, add description and other key details, and you&apos;re done!</p>
                </div>
            </div>

            <div className={style.authFormContentColumn}>
                <CustomButton size="fullwidthSize" onClick={onClick}>Create now</CustomButton>
                <CustomButton link destination='/' coloring="buttonNobuttonColoring" size="buttonNobuttonSize">Go back</CustomButton>
            </div>
        </div>
    );
}