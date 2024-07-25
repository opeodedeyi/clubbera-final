"use client";

import { useState, useEffect } from "react";
import { useEditUser } from '@/app/context/EditUserContext';
import ProfilePhoto from "@/components/forminput/ProfilePhoto/ProfilePhoto";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import style from "./BasicInformation.module.css";

const BasicInformation = () => {
  const { 
    userData,
    updateUserData,
    uploadUserImage,
    isUploadingImage
  } = useEditUser();
  const [selectedImage, setSelectedImage] = useState(userData.banner);

  useEffect(() => {
    setSelectedImage(userData.banner);
  }, [userData.banner]);

  const options = [
    { value: "", label: "Select" },
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  const handleImageChange = (newImage) => {
    setSelectedImage(newImage);
    uploadUserImage(newImage);
  };

  return (
    <div className={style.formContainer}>
      <form className={style.formContainerInner}>
        <ProfilePhoto 
          initialImage={userData.avatar}
          isUploadingImage={isUploadingImage}
          selectedImage={selectedImage}
          setSelectedImage={handleImageChange} />

        <MainInput 
          input="Full name" 
          placeholder="Enter full name"
          value={userData.fullName}
          onChange={(e) => updateUserData({ fullName: e.target.value})}/>

        <MainInput
          type="textarea"
          placeholder="Tell People about yourself" 
          input="Bio"
          maxLength={150}
          value={userData.bio}
          onChange={(e) => updateUserData({ bio: e.target.value})}/>

        <CityInput
          label="Location"
          placeholder="Enter city"
          cityLocation={userData.city}
          setCityLocation={(city) => updateUserData({ city: city })}
          setLatLocation={(lat) => updateUserData({ lat: lat })}
          setLngLocation={(lng) => updateUserData({ lng: lng })} />

        <SelectInput
          label="Gender"
          name="gender"
          options={options}
          value={userData.gender}
          onChange={(e) => updateUserData({ gender: e.target.value})} />

        <DateInput
          label="Birthday"
          name="birthday"
          value={userData.birthday}
          onChange={(e) => updateUserData({ birthday: e.target.value})} />
      </form>
    </div>
  );
};

export default BasicInformation;
