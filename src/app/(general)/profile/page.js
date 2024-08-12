import { redirect } from 'next/navigation';
import ProfileHeader from "./comp/ProfileHeader/ProfileHeader";
import { getUserData } from "@/app/actions/getUserData";
import ProfileDetailsBar from "./comp/ProfileDetailsBar/ProfileDetailsBar";
import ProfileContent from "./ProfileContent";
import style from "./Profile.module.css";

export default async function Profile(){
    const user = await getUserData();

    if (!user) {
        redirect('/');
    }

    return (
        <>
            <ProfileHeader user={user} />
            <div className={style.profileDetailsContainer}>
                <ProfileDetailsBar user={user} />
                <ProfileContent user={user} />
            </div>
        </>
    );
}