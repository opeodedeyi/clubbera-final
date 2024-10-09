import { formatBirthday } from "@/utils/dateUtils";
import style from "./ProfileDetailsBar.module.css";
export default function ProfileDetailsBar({user}){
    return (
        <div className={style.profileDetailsBar}>
            <div className={style.profileDetailsBarItem}>
                <h4>Gender</h4>
                <p>{user?.gender || 'not set'}</p>
            </div>

            <div className={style.profileDetailsBarItem}>
                <h4>Birthday</h4>
                <p>{formatBirthday(user?.birthday)}</p>
            </div>

            <div className={style.profileDetailsBarItem}>
                <h4>Location</h4>
                <p>{user?.location || "not set"}</p>
            </div>
        </div>
    );
};