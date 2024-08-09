"use client";

import { useRouter } from 'next/navigation';
import SignupStepOne from "@/app/(auth)/signup/SignupStepOne";
import SignupStepTwo from "@/app/(auth)/signup/SignupStepTwo";
import { useSignupForm } from "@/hooks/useSignupForm";
import style from "../Auth.module.css";


export default function Signup({ searchParams }) {
    const { destination, step = 'userDetails' } = searchParams;
    const router = useRouter();
    const {
        formData,
        handleInputChange,
        isDisabled,
        handleSignup,
        loading,
        errors,
        validateStepOne,
    } = useSignupForm(destination);

    const moveToNextStep = () => {
        if (step === 'userDetails') {
            const isValidStepOne = validateStepOne();
            if (isValidStepOne) {
                router.push(`/signup?step=locationDetails${destination ? `&destination=${destination}` : ''}`);
            }
        }
    };

    const moveToPreviousStep = () => {
        if (step === 'locationDetails') {
            router.push(`/signup?step=userDetails${destination ? `&destination=${destination}` : ''}`);
        }
    };
  

    return (
        <div className={style.authContainer}>
            <form className={style.authContainerMain}>
                {step === 'userDetails' ? (
                    <SignupStepOne
                        email={formData.email}
                        fullName={formData.fullName}
                        password={formData.password}
                        errors={errors}
                        isDisabled={isDisabled}
                        handleInputChange={handleInputChange}
                        moveToNextStep={moveToNextStep} />
                ) : (
                    <SignupStepTwo
                        ageConsent={formData.ageConsent}
                        cityLocation={formData.cityLocation}
                        handleInputChange={handleInputChange}
                        buttonClicked={handleSignup}
                        errors={errors}
                        loading={loading}
                        moveToPreviousStep={moveToPreviousStep} />
                )}
            </form>
        </div>
    );
}
