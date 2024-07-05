import React from 'react'
import style from "./editProfile.module.css"
import CustomButton from '@/components/utility/CustomButton/CustomButton'
import Tabs from "@/components/tabs/Tabs";
import BasicInformation from './BasicInformation';
import ChangePassword from './ChangePassword';

const EditProfile = () => {
  const Grouptabs = [
    {
      index: 1,
      label: "Basic Information",
      content: <BasicInformation />,
    },
    {
      index: 2,
      label: "Change Password",
      content: <ChangePassword />,
    },
  ];
  return (
    <>
      <div className={style.editContainer}>
        <div className={style.editHeaderContainer}>
          <div className={style.editProfile}>
            <h4>Edit Profile</h4>
            <p>Make changes to your profile</p>
          </div>
          <div className={style.editButton}>
            <CustomButton>Save changes</CustomButton>
          </div>
        </div>
        <div>
          <Tabs tabs={Grouptabs} />
        </div>
      </div>
    </>
  );
};

export default EditProfile
