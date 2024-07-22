import { HiOutlineLocationMarker } from "react-icons/hi";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import Style from "./ProfileHeader.module.css";
import Link from "next/link";


export default function ProfileHeader({user}){
  return (
    <div className={Style.profileHeader}>
      <div className={Style.profileHeaderDetails}>
        <div className={Style.profileHeaderDetailsPP}>
          <img src={user?.avatar || "/profile.png"} />
        </div>
        <div className={Style.profileHeaderDetailsText}>
          <h4>{user?.full_name}</h4>
          <p>
            <HiOutlineLocationMarker size="14px" color="var(--color-text-main)" />
            {user?.location || "not set"}
          </p>
        </div>
      </div>

      <CustomButton coloring="inverseColoring">Edit profile</CustomButton>
    </div>
  );
};
