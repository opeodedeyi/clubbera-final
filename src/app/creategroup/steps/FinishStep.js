'use client';

import { useCreateGroup } from '@/app/context/CreateGroupContext';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "../CreateGroup.module.css";


export default function FinishStep() {
    const { groupTitle, groupLink } = useCreateGroup();

    return (
        <div className={style.authFormContentCenter}>
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>Your group is all set up 🎉</h3>
                    <p className={style.authFormContentIntroText}>Congratulations. You have successfully created a community group - &lsquo;{groupTitle}&rsquo;. Kindly proceed to your dashboard</p>
                </div>
            </div>

            <div className={style.authCommunityCreatedImage}>
                <img src="/community_created.svg" alt="community created" />
            </div>
            
            <CustomButton link destination={`/group/${groupLink}/edit`} size="fullwidthSize">See my Group</CustomButton>
        </div>
    );
}