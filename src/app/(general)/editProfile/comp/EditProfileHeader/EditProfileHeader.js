import CustomButton from '@/components/utility/CustomButton/CustomButton'
import { useEditUser } from '@/app/context/EditUserContext';
import style from "./EditProfileHeader.module.css"


export default function EditProfileHeader() {
    const { submitUserData } = useEditUser();

    return (
        <div className={style.editHeaderContainer}>
            <div className={style.editProfileText}>
                <h4>Edit Profile</h4>
                <p>Make changes to your profile</p>
            </div>

            <CustomButton size='defaultButtonSize' onClick={submitUserData}>
                Save <span className={style.desktopOnlyShow}>changes</span>
            </CustomButton>
        </div>
    );
};