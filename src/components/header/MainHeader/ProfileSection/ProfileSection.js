import Link from "next/link";
import style from "./ProfileSection.module.css";

const ProfileSection = ({ user }) => {
    return (
        <div className={style.headerProfilePhotoCard}>
            <Link href="/profile" className={style.headerProfilePhotoMain}>
                <div className={style.headerProfilePhotoCardImg}>
                    <img src={user?.avatar || "/profile.png"} />
                </div>
                
                {/* add down arrow */}
            </Link>

            <div className={style.headerProfileDropdown}>
                <div className={style.headerProfileDropdownSpace}></div>
                <ul>
                    <li><Link href="/logout" className={style.headerProfileDropdownLink}><span>Logout</span></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSection;