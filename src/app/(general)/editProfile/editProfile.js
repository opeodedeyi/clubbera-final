'use client';

import { useEffect, useCallback, memo } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import { useQueryParams } from "@/hooks/useQueryParams";
import EditProfileHeader from "./comp/EditProfileHeader/EditProfileHeader";
import Navigation from "./comp/Navigation/Navigation";
import BasicInformation from './steps/BasicInformation/BasicInformation';
import ChangePassword from './steps/ChangePassword/ChangePassword';
import { EditUserProvider } from '@/app/context/EditUserContext';


const EditProfile = memo(({ user }) => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { createQueryString } = useQueryParams();

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
        <EditUserProvider user={user} activeTab={activeTab}>
            <EditProfileHeader />
            <Navigation activeTab={activeTab} handleTabClick={handleTabClick} />
            { activeTab === "basicInfo" && <BasicInformation/> }
            { activeTab === "changePassword" && <ChangePassword/>}
        </EditUserProvider>
    );
});

EditProfile.displayName = 'EditProfile';

export default EditProfile;
