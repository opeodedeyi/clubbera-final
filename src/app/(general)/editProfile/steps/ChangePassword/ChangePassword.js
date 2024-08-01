import { useEditUser } from '@/app/context/EditUserContext';
import MainPasswordInput from "@/components/forminput/PasswordInput/PasswordInput"
import style from "./ChangePassword.module.css"


export default function ChangePassword() {
  const { 
    userData,
    updateUserData,
  } = useEditUser();

  return (
    <div className={style.formContainer}>
      <form className={style.formContainerInner}>
        <MainPasswordInput
          placeholder="Enter old password" 
          input="Old password"
          value={userData.oldPassword}
          onChange={(e) => updateUserData({ oldPassword: e.target.value})}/>
        
        <MainPasswordInput
          placeholder="Enter new password"
          input="New password"
          value={userData.newPassword}
          onChange={(e) => updateUserData({ newPassword: e.target.value})}/>
      </form>
    </div>
  );
};
