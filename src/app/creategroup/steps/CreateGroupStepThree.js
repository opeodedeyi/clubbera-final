'use client';

import { useCreateGroup } from '@/app/context/CreateGroupContext';
import MainInput from "@/components/forminput/MainInput/MainInput";
import MainTip from "@/components/utility/MainTip/MainTip";
import style from "../CreateGroup.module.css";


export default function CreateGroupStepThree() {
    const { groupTitle, setGroupTitle, groupDescription, setGroupDescription } = useCreateGroup();

    return (
        <div className={style.authFormContent}>
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>Describe group</h3>
                    <p className={style.authFormContentIntroText}>Choose a name that will give people a clear idea of what the group is about. You can edit this later if you change your mind.</p>
                </div>
            </div>
            <MainTip theme="defaultTheme">We value human connection and review groups to ensure they meet our guidelines. Consider your group&apos;s goal, audience, and event activities.</MainTip>
            <div className={style.authFormInputs}>
                <MainInput
                    type="text"
                    placeholder="Enter name" 
                    input="Group name"
                    value={groupTitle}
                    onChange={(e) => setGroupTitle(e.target.value)}
                />

                <MainInput
                    type="textarea"
                    placeholder="Enter description" 
                    input="Description"
                    value={groupDescription}
                    onChange={(e) => setGroupDescription(e.target.value)}
                />
            </div>
        </div>
    );
}