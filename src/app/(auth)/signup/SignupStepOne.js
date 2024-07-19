import Link from "next/link";
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/MainInput/MainInput";
import MainPasswordInput from "@/components/forminput/PasswordInput/PasswordInput";
import SocialLoginButton from "@/components/utility/SocialButton/SocialButton";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import MainTip from "@/components/utility/MainTip/MainTip";
import style from "../Auth.module.css";

export default function SignupStepOne({ email, fullName, password, errors, handleInputChange, moveToNextStep }) {
  return (
    <>
      <div className={style.authFormContent}>
        <Logo coloring="default-logo-coloring" size="normal-logo-size"></Logo>
        
        <div className={style.authFormContentMain}>
          <div className={style.authFormContentIntro}>
            <h3>Join the adventure</h3>
            <p className={style.authFormContentIntroText}>
              Sign up to connect with like-minded individuals and embark on
              exciting journeys together.
            </p>
          </div>
        </div>

        <SocialLoginButton imgSrc="/google_icon.svg" coloring="googleColoring" socialType="google">Login with Google</SocialLoginButton>
        
        <div className={style.authOrHorizontalLine}>
          <div className={style.horizontalLineHalf}></div>
          <p className={style.horizontalLineText}>or</p>
          <div className={style.horizontalLineHalf}></div>
        </div>

        {errors.general && ( <MainTip theme="dangerTheme">{errors.general}</MainTip> )}
        
        <div className={style.authFormInputs}>
          <MainInput type="text" name="fullName" placeholder="Enter full name" input="Full name" value={fullName} onChange={handleInputChange} />
          {errors.fullName && ( <span className={style.errorMessage}>{errors.fullName}</span> )}

          <MainInput type="email" name="email" placeholder="Enter email address" input="Email address" value={email} onChange={handleInputChange} />
          {errors.email && ( <span className={style.errorMessage}>{errors.email}</span> )}

          <MainPasswordInput type="password" name="password" placeholder="Enter password" input="Password" value={password} onChange={handleInputChange} />
          {errors.password && ( <span className={style.errorMessage}>{errors.password}</span> )}
        </div>
      </div>

      <div className={style.authFormActions}>
        <CustomButton size="fullwidthSize" onClick={moveToNextStep}>Continue</CustomButton>
        <p className={style.authFormActionsCta}>
          Already a member?<Link href="/login" className=""> Log in</Link>
        </p>
      </div>
    </>
  );
};