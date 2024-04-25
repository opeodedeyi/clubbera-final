'use client';

import SignupStepOne from "@/app/(auth)/signup/SignupStepOne";
import SignupStepTwo from "@/app/(auth)/signup/SignupStepTwo";
import useSignupForm from "@/hooks/useSignupForm";
import "@/app/style/authentication.css";


export default function Signup({ searchParams }) {
    const { destination } = searchParams
    const {
        step,
        setStep,
        email,
        setEmail,
        fullName,
        setFullName,
        password,
        setPassword,
        cityLocation,
        setCityLocation,
        setLatLocation,
        setLngLocation,
        ageConsent,
        setAgeConsent,
        isDisabled,
        handleSignup
    } = useSignupForm(destination);

    return (
        <>
            <div className="auth-container">
                <form className="auth-container-main">
                    {step===1 ?
                        <SignupStepOne
                            email={email} 
                            setEmail={setEmail} 
                            fullName={fullName} 
                            setFullName={setFullName} 
                            password={password} 
                            setPassword={setPassword}
                            isDisabled={isDisabled}
                            buttonClicked={() => setStep(2)}/>
                    :
                        <SignupStepTwo
                            ageConsent={ageConsent} 
                            setAgeConsent={setAgeConsent}
                            cityLocation={cityLocation}
                            setCityLocation={setCityLocation} 
                            setLatLocation={setLatLocation}
                            setLngLocation={setLngLocation}
                            buttonClicked={handleSignup}/>
                    }
                </form>
            </div>
        </>
    )
}
  