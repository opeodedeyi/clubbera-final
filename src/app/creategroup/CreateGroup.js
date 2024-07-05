'use client';

import { Fragment } from "react";
import { useRouter } from 'next/navigation';
import { useCreateGroup } from '@/app/context/CreateGroupContext';
import CreateGroupHeader from "@/components/header/CreateGroupHeader/CreateGroupHeader";
import IntroStep from './steps/IntroStep';
import CreateGroupStepOne from './steps/CreateGroupStepOne';
import CreateGroupStepTwo from './steps/CreateGroupStepTwo';
import CreateGroupStepThree from './steps/CreateGroupStepThree';
import CreateGroupStepFour from './steps/CreateGroupStepFour';
import FinishStep from './steps/FinishStep';
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import MainTip from "@/components/utility/MainTip/MainTip";
import { createGroup } from '@/app/actions/createGroupAction';
import style from "./CreateGroup.module.css";


export default function CreateGroup() {
    const router = useRouter();
    const {
        step, setStep, cityLocation, latLocation, lngLocation,
        groupTitle, groupDescription, selectedTopics, isPrivate, 
        selectedImage, setGroupLink, isLoading, setIsLoading,
        error, setError
    } = useCreateGroup();

    const handleNext = async (event) => {
        if (step < 4) {
            setStep(step + 1);
        } else if (step === 4) {
            setIsLoading(true);
            setError(null);
            try {
                const result = await createGroup({
                    cityLocation,
                    latLocation,
                    lngLocation,
                    groupTitle,
                    groupDescription,
                    selectedTopics,
                    isPrivate,
                    selectedImage
                });
                
                if (result.error) {
                    setError(result.error);
                } else {
                    setGroupLink(result.data.group.unique_url);
                    setStep(step + 1);
                }
            } catch (error) {
                console.error("Error creating group:", error);
                setError("An unexpected error occurred. Please try again.");
            } finally {
                setIsLoading(false);
            }
        } else {
            router.push('/');
        }
    };

    const disableNextPage = () => {
        switch (step) {
            case 1:
                return !cityLocation || !latLocation || !lngLocation;
            case 2:
                return selectedTopics.length === 0;
            case 3:
                return !groupTitle || !groupDescription;
            case 4:
                return isPrivate === null;
            default:
                return false;
        }
    };

    const backButtonClicked = () => {
        if (step < 2) {
            router.back();
        } else if (step === 5) {
            router.push('/');
        } else {
            setStep(prevStep => prevStep - 1);
        }
    };
  
    return (
        <Fragment>
            <CreateGroupHeader progress={step} backButtonClicked={backButtonClicked}>Back</CreateGroupHeader>

            <div className={`${style.authContainer} ${style.createGroupContainer}`}>
                <form className={style.authContainerMain}>
                    {error && ( <MainTip theme="dangerTheme">{error}</MainTip> )}

                    {step === 0 && <IntroStep onClick={handleNext}/>}
                    {step === 1 && <CreateGroupStepOne />}
                    {step === 2 && <CreateGroupStepTwo />}
                    {step === 3 && <CreateGroupStepThree />}
                    {step === 4 && <CreateGroupStepFour />}
                    {step === 5 && <FinishStep />}

                    {step > 0 && step < 5 &&
                        <div className={style.authFormActionsTwo}>
                            <CustomButton loading={isLoading} loadingText="Creating" size="normalSize" onClick={handleNext} disabled={disableNextPage()}>
                                {step < 4 ? 'Proceed' : 'Complete'}
                            </CustomButton>
                        </div>
                    }
                </form>
            </div>
        </Fragment>
    )
}