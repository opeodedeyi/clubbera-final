'use client';

import { useCreateGroup } from '@/app/context/CreateGroupContext';
import CityInput from "@/components/forminput/LocationInput/CityInput";
import style from "../CreateGroup.module.css";


export default function CreateGroupStepOne() {
    const { cityLocation, setCityLocation, setLatLocation, setLngLocation } = useCreateGroup();

    return (
        <div className={style.authFormContent}>
            <div className={style.authFormContentMain}>
                <div className={style.authFormContentIntro}>
                    <h3>First, set your location for your group</h3>
                    <p className={style.authFormContentIntroText}>Begin with setting your location to help us connect with people in your area.</p>
                </div>
            </div>
            <div className={style.authFormInputs}>
                <CityInput 
                    label="Location" 
                    placeholder="Enter city" 
                    cityLocation={cityLocation} 
                    setCityLocation={setCityLocation} 
                    setLatLocation={setLatLocation}
                    setLngLocation={setLngLocation}/>
            </div>
        </div>
    );
}