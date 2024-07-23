import ProfileHeader from "./comp/ProfileHeader/ProfileHeader";
import { getUserData } from "@/app/actions/getUserData";
import ProfileDetailsBar from "./comp/ProfileDetailsBar/ProfileDetailsBar";
import ProfileContent from "./ProfileContent";
import Style from "./Profile.module.css";

export default async function Profile(){
  const user = await getUserData();
    
  return (
    <div className={Style.profileContainer}>
      <ProfileHeader user={user} />
      <div className={Style.profileDetailsContainer}>
        <ProfileDetailsBar user={user} />
        <ProfileContent user={user} />
      </div>
    </div>
  );
}