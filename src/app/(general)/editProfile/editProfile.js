'use client';

import { useEffect } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import CustomButton from '@/components/utility/CustomButton/CustomButton'
import Navigation from "./comp/Navigation/Navigation";
import BasicInformation from './steps/BasicInformation/BasicInformation';
import ChangePassword from './steps/ChangePassword/ChangePassword';
import style from "./EditProfile.module.css"


const EditProfile = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { createQueryString, removeQueryParam } = useQueryParams();

  const activeTab = searchParams.get('currentEditTab');

  useEffect(() => {
    if (!activeTab) {
      router.push(`?${createQueryString('currentEditTab', 'basicInfo')}`, { scroll: false });
    }
  }, []);

  const handleTabClick = (link) => {
    router.push(`?${createQueryString('currentEditTab', link)}`, { scroll: false });
  };

  return (
    <>
      <div className={style.editHeaderContainer}>
        <div className={style.editProfileText}>
          <h4>Edit Profile</h4>
          <p>Make changes to your profile</p>
        </div>

        <CustomButton size='defaultButtonSize'>
          Save <span className={style.desktopOnlyShow}>changes</span>
        </CustomButton>
      </div>

      <Navigation activeTab={activeTab} handleTabClick={handleTabClick} />

      { activeTab === "basicInfo" && <BasicInformation/> }
      { activeTab === "changePassword" && <ChangePassword/>}
    </>
  );
};

export default EditProfile
