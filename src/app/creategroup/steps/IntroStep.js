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
                    <h3>You're About to Create Some Magic! </h3>
                    <p className={style.authFormContentIntroText}>Hey there, community builder! You're just a few steps away from bringing your vision to life. To start creating, simply choose a catchy name, select tags, set your preferences, and start inviting friends. Don't forget to follow our community guidelines to keep things friendly. We'll guide you through each step, so have fun!</p>
                </div>
            </div>

            <div className={style.authFormContentColumn}>
                <CustomButton size="fullwidthSize" onClick={onClick}>Start creating</CustomButton>
                <CustomButton link destination='/' coloring="buttonNobuttonColoring" size="buttonNobuttonSize">Go back</CustomButton>
            </div>
        </div>
    );
}