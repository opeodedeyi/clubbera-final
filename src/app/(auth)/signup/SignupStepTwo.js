'use client';

import Link from "next/link";
import CityInput from "@/components/forminput/cityinput";
import CheckboxInput from "@/components/forminput/checkboxinput";
import CustomButton from "@/components/utility/custombutton";
import "@/app/style/authentication.css";


export default function SignupStepTwo ({ ageConsent, setAgeConsent, cityLocation, setCityLocation, setLatLocation, setLngLocation, buttonClicked }) {
    return (
        <>
            <div className="auth-form-content">
                <div className="auth-form-content-main">
                    <div className="auth-form-content-intro">
                        <h3>Finish signing up</h3>
                        <p className="auth-form-content-intro-text">We just need a few information from you and your account will be all set up.</p>
                    </div>
                </div>
            </div>
            <div className="auth-form-inputs">
                <CityInput 
                    label="Location" 
                    placeholder="Enter city" 
                    cityLocation={cityLocation} 
                    setCityLocation={setCityLocation} 
                    setLatLocation={setLatLocation}
                    setLngLocation={setLngLocation}/>
                <CheckboxInput
                    label="Age"
                    checked={ageConsent} 
                    onChange={() => setAgeConsent(prev => !prev)}>
                    I confirm I am 18 years of age or older
                </CheckboxInput>
            </div>
            <div className="auth-form-actions">
                <CustomButton size="fullwidth-size" disabled={!ageConsent} onClick={buttonClicked}>Get started</CustomButton>
                <p className="auth-form-actions-policy">By signing up, you agree to <Link href="/termsofservice" className="auth-dark-link">Terms of Service</Link>, <Link href="/privacypolicy" className="auth-dark-link">Privacy Policy</Link>, and <Link href="/cookiepolicy" className="auth-dark-link">Cookie Policy</Link>.</p>
            </div>
        </>
    );
}