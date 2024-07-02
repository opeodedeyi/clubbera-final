"use client";

import Link from "next/link";
import useLoginForm from "@/hooks/useLoginForm";
import Logo from "@/components/utility/logo";
import MainInput from "@/components/forminput/MainInput/MainInput";
import MainPasswordInput from "@/components/forminput/PasswordInput/PasswordInput";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import SocialLoginButton from "@/components/utility/SocialButton/SocialButton";
import style from "../Auth.module.css";


export default function Login({ searchParams }) {
  const { destination } = searchParams;
  const { email, setEmail, password, setPassword, submitLogin, loading, errors } =
    useLoginForm(destination);

  return (
    <>
      <div className={style.authContainer}>
        <form
          className={style.authContainerMain}
          onSubmit={(e) => {
            e.preventDefault();
            submitLogin();
          }}
        >
          <div className={style.authFormContent}>
            <Logo
              coloring="default-logo-coloring"
              size="normal-logo-size"
            ></Logo>
            <div className={style.authFormContentMain}>
              <div className={style.authFormContentIntro}>
                <h3>Welcome back</h3>
                <p className={style.authFormContentIntroText}>
                  Ready to reconnect with friends? Login to resume discovery of
                  new experiences together.
                </p>
              </div>
            </div>
            <SocialLoginButton
              imgSrc="/google_icon.svg"
              coloring="googleColoring"
              socialType="google"
            >
              Login with Google
            </SocialLoginButton>
            <div className={style.authOrHorizontalLine}>
              <div className={style.horizontalLineHalf}></div>
              <p className={style.horizontalLineText}>or</p>
              <div className={style.horizontalLineHalf}></div>
            </div>
            <div className={style.authFormInputs}>
              <MainInput
                type="email"
                placeholder="Enter email address"
                input="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className={style.errorMessage}>{errors.email}</span>
              )}

              <MainPasswordInput
                forgotpasswordinput
                type="password"
                placeholder="Enter password"
                input="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {errors.password && (
                <span className={style.errorMessage}>{errors.password}</span>
              )}
            </div>
          </div>
          <div className={style.authFormActions}>
            <CustomButton size="fullwidthSize" type="submit">
              Login
            </CustomButton>
            <p className={style.authFormActionsCta}>
              Not a member yet?{" "}
              <Link href="/signup">
                Sign up now
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
