import MainPasswordInput from "@/components/forminput/PasswordInput/PasswordInput"
import style from "./editProfile.module.css"
const ChangePassword = () => {
  return (
    <div className={style.formContainer}>
      <form>
        <div>
          <label>Old Password</label>
          <MainPasswordInput placeholder="Enter old password" />
        </div>
        <div>
          <label>New Password</label>
          <MainPasswordInput placeholder="Enter new password" />
        </div>
        <div>
          <label>Confrim New Password</label>
          <MainPasswordInput placeholder="Re-enter new password" />
        </div>
      </form>
    </div>
  );
}

export default ChangePassword
