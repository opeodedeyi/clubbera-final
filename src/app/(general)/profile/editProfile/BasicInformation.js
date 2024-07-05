"use client";
import React, { useState } from "react";
import MainInput from "@/components/forminput/MainInput/MainInput";
import AddressInput from "@/components/forminput/LocationInput/AddressInput";
import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import DateInput from "@/components/forminput/DateInput/DateInput";
import style from "./editProfile.module.css";

const BasicInformation = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedBirthday, setSelectedBirthday] = useState("");

  const handleGenderChange = (e) => {
    setSelectedGender(e.target.value);
  };
  const handleBirthdayChange = (e) => {
    setSelectedBirthday(e.target.value);
  };

  const options = [
    { value: "", label: "Select Your Gender" },
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];
  return (
    <div className={style.formContainer}>
      <form>
        <div>
          <label>Full Name</label>
          <MainInput />
        </div>
        <div>
          <label>Email Address</label>
          <MainInput />
        </div>
        <div>
          <label>Location</label>
          <AddressInput />
        </div>
        <div>
          <label>Gender</label>
          <SelectInput
            name="gender"
            options={options}
            value={selectedGender}
            onChange={handleGenderChange}
          />
        </div>
        <div>
          <label>Birthday</label>
          <DateInput
            name="birthday"
            value={selectedBirthday}
            onChange={handleBirthdayChange}
          />
        </div>
      </form>
    </div>
  );
};

export default BasicInformation;
