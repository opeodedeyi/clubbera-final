import MainPasswordInput from "@/components/forminput/PasswordInput/PasswordInput"
import style from "./ChangePassword.module.css"


const ChangePassword = () => {
  return (
    <div className={style.formContainer}>
      <form className={style.formContainerInner}>
        <MainPasswordInput placeholder="Enter old password" input="Old password" />
        <MainPasswordInput placeholder="Enter new password" input="New password" />
        <MainPasswordInput placeholder="Re-enter new password" input="Confirm new password" />
      </form>
    </div>
  );
}

export default ChangePassword
