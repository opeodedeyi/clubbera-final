import Link from "next/link";
import style from "./ProfileSection.module.css";
import { useLogout } from '@/hooks/useLogout';

const ProfileSection = ({ user }) => {
    const logout = useLogout();

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
                    <li><div onClick={logout} className={style.headerProfileDropdownLink}><span>Logout</span></div></li>
                    <li><Link href="/mygroups" className={style.headerProfileDropdownLink}><span>My groups</span></Link></li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSection;