"use client";

import { useState } from "react";
import MainInput from "@/components/forminput/MainInput/MainInput";
import CityInput from "@/components/forminput/LocationInput/CityInput";
import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import style from "./BasicInformation.module.css";

const BasicInformation = () => {
  const [cityLocation, setCityLocation] = useState("");
  const [bio, setBio] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBirthday, setSelectedBirthday] = useState("");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleBirthdayChange = (e) => {
    setSelectedBirthday(e.target.value);
  };

  const options = [
    { value: "", label: "Select" },
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  return (
    <div className={style.formContainer}>
      <form className={style.formContainerInner}>
        <MainInput 
          input="Full name" 
          placeholder="Enter full name"/>

        <MainInput
          type="textarea"
          placeholder="Tell People about yourself" 
          input="Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}/>

        <CityInput
          label="Location"
          placeholder="Enter city"
          cityLocation={cityLocation}
          setCityLocation={(value) => handleInputChange({ target: { name: 'cityLocation', value } })}
          setLatLocation={(value) => handleInputChange({ target: { name: 'latLocation', value } })}
          setLngLocation={(value) => handleInputChange({ target: { name: 'lngLocation', value } })}
        />

        <SelectInput
          label="Gender"
          name="gender"
          options={options}
          value={selectedGender}
          onChange={handleGenderChange}
        />

        <DateInput
          label="Birthday"
          name="birthday"
          value={selectedBirthday}
          onChange={handleBirthdayChange}
        />
      </form>
    </div>
  );
};

export default BasicInformation;
