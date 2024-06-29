import Link from "next/link";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import CheckboxInput from "@/components/forminput/CheckBoxInput/CheckBoxInput";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import style from "../Auth.module.css";

export default function SignupStepTwo({
  ageConsent,
  setAgeConsent,
  cityLocation,
  setCityLocation,
  setLatLocation,
  setLngLocation,
  buttonClicked,
  errors,
}) {
  return (
    <>
      <div className={style.authFormContent}>
        <div className={style.authFormContentMain}>
          <div className={style.authFormContentIntro}>
            <h3>Finish signing up</h3>
            <p className={style.authFormContentIntroText}>
              We just need a few information from you and your account will be
              all set up.
            </p>
          </div>
        </div>
      </div>
      <div className={style.authFormInputs}>
        <CityInput
          label="Location"
          placeholder="Enter city"
          cityLocation={cityLocation}
          setCityLocation={setCityLocation}
          setLatLocation={setLatLocation}
          setLngLocation={setLngLocation}
        />
        {errors.location && (
          <span className={style.errorMessage}>{errors.location}</span>
        )}
        <CheckboxInput
          label="Age"
          checked={ageConsent}
          onChange={() => setAgeConsent((prev) => !prev)}
        >
          I confirm I am 18 years of age or older
        </CheckboxInput>
        {errors.ageConsent && (
          <span className={style.errorMessage}>{errors.ageConsent}</span>
        )}
      </div>
      <div className={style.authFormActions}>
        <CustomButton size="fullwidthSize" onClick={buttonClicked}>
          Get started
        </CustomButton>
        <p className={style.authFormActionsPolicy}>
          By signing up, you agree to{" "}
          <Link href="/termsofservice" className="auth-dark-link">
            Terms of Service
          </Link>
          ,{" "}
          <Link href="/privacypolicy" className="auth-dark-link">
            Privacy Policy
          </Link>
          , and{" "}
          <Link href="/cookiepolicy" className="auth-dark-link">
            Cookie Policy
          </Link>
          .
        </p>
      </div>
    </>
  );
}
