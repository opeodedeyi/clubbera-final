"use client";

import { useCallback, useMemo, memo } from "react";
import { useEditUser } from '@/app/context/EditUserContext';
import ProfilePhoto from "@/components/forminput/ProfilePhoto/ProfilePhoto";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import style from "./BasicInformation.module.css";


const BasicInformation = memo(() => {
    const { 
        userData,
        updateUserData,
        uploadUserImage,
        isUploadingImage
    } = useEditUser();

    const options = useMemo(() => [
        { value: "", label: "Select" },
        { value: "female", label: "Female" },
        { value: "male", label: "Male" },
    ], []);

    const handleImageChange = useCallback((newImage) => {
        uploadUserImage(newImage);
    }, [uploadUserImage]);

    const handleFullNameChange = useCallback((e) => updateUserData({ fullName: e.target.value}), [updateUserData]);
    const handleBioChange = useCallback((e) => updateUserData({ bio: e.target.value}), [updateUserData]);
    const handleGenderChange = useCallback((e) => updateUserData({ gender: e.target.value}), [updateUserData]);
    const handleBirthdayChange = useCallback((e) => updateUserData({ birthday: e.target.value}), [updateUserData]);

    const handleCityChange = useCallback((city) => updateUserData({ city }), [updateUserData]);
    const handleLatChange = useCallback((lat) => updateUserData({ lat }), [updateUserData]);
    const handleLngChange = useCallback((lng) => updateUserData({ lng }), [updateUserData]);

    return (
        <div className={style.formContainer}>
            <form className={style.formContainerInner}>
                <ProfilePhoto 
                    initialImage={userData.avatar}
                    isUploadingImage={isUploadingImage}
                    selectedImage={userData.avatar}
                    setSelectedImage={handleImageChange} />

                <MainInput 
                    input="Full name" 
                    placeholder="Enter full name"
                    value={userData.fullName}
                    onChange={handleFullNameChange}/>

                <MainInput
                    type="textarea"
                    placeholder="Tell People about yourself" 
                    input="Bio"
                    maxLength={150}
                    value={userData.bio}
                    onChange={handleBioChange}/>

                <CityInput
                    label="Location"
                    placeholder="Enter city"
                    cityLocation={userData.city}
                    setCityLocation={handleCityChange}
                    setLatLocation={handleLatChange}
                    setLngLocation={handleLngChange} />

                <SelectInput
                    label="Gender"
                    name="gender"
                    options={options}
                    value={userData.gender}
                    onChange={handleGenderChange} />

                <DateInput
                    label="Birthday"
                    name="birthday"
                    value={userData.birthday}
                    onChange={handleBirthdayChange} />
            </form>
        </div>
    );
});

BasicInformation.displayName = 'BasicInformation';

export default BasicInformation;
