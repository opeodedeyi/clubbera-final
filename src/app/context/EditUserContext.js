'use client';

import { useRouter } from 'next/navigation';
import { createContext, useContext, useState, useCallback, useEffect, useMemo } from 'react';
import { useQueryParams } from "@/hooks/useQueryParams";
import { useUser } from './UserContext';
import { updateUser, updateUserImage, changePassword } from '@/app/actions/updateUser';

const EditUserContext = createContext();

export const EditUserProvider = ({ children, user, activeTab }) => {
    const { updateUser: updateGlobalUser } = useUser();
    const router = useRouter();
    const { removeQueryParam } = useQueryParams();
    const [userData, setUserData] = useState({
        id: user?.id,
        unique_url: user?.unique_url,
        fullName: user?.full_name,
        bio: user?.bio || '',
        city: user?.location,
        lat: user?.lat,
        lng: user?.lng,
        gender: user?.gender,
        birthday: user?.birthday,
        oldPassword: '',
        newPassword: '',
        avatar: user?.avatar,
    });
    const [isUpdatingUser, setIsUpdatingUser] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    useEffect(() => {
        setUserData(prevData => ({
            ...prevData,
            id: user?.id,
            unique_url: user?.unique_url,
            fullName: user?.full_name,
            bio: user?.bio || '',
            city: user?.location,
            lat: user?.lat,
            lng: user?.lng,
            gender: user?.gender,
            birthday: user?.birthday,
            avatar: user?.avatar,
        }));
    }, [user]);

    const closeModal = useCallback(() => {
        router.push(`?${removeQueryParam('edit')}`, { scroll: false });
    }, [router, removeQueryParam]);

    const updateUserData = useCallback((newData) => {
        setUserData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const submitUserData = useCallback(async () => {
        setIsUpdatingUser(true);
        try {
            let result;
            if (activeTab === 'basicInfo') {
                result = await updateUser(userData);
                // Optimistic update
                setUserData(prevData => ({
                    ...prevData,
                    fullName: result.full_name,
                    bio: result.bio,
                    city: result.location,
                    lat: result.lat,
                    lng: result.lng,
                    gender: result.gender,
                    birthday: result.birthday,
                }));

                updateGlobalUser(result);
            } else if (activeTab === 'changePassword') {
                result = await changePassword(userData);
                setUserData(prevData => ({
                    ...prevData,
                    oldPassword: '',
                    newPassword: '',
                }));
            }
            closeModal();
            return result;
        } catch (error) {
            console.error('Error saving user data:', error);
            throw error;
        } finally {
            setIsUpdatingUser(false);
        }
    }, [userData, activeTab, closeModal, updateGlobalUser]);

    const uploadUserImage = useCallback(async (imageData) => {
        setIsUploadingImage(true);
        try {
            const result = await updateUserImage({ avatar: imageData });
            setUserData(prevData => ({ ...prevData, avatar: result.avatar }));
            updateGlobalUser({ avatar: result.avatar });
            return result;
        } catch (error) {
            console.error('Error uploading user image:', error);
            throw error;
        } finally {
            setIsUploadingImage(false);
        }
    }, [updateGlobalUser]);

    const contextValue = useMemo(() => ({
        userData,
        updateUserData,
        submitUserData,
        uploadUserImage,
        isUpdatingUser,
        isUploadingImage
    }), [userData, updateUserData, submitUserData, uploadUserImage, isUpdatingUser, isUploadingImage]);

    return (
        <EditUserContext.Provider value={contextValue}>
            {children}
        </EditUserContext.Provider>
    );
};

export const useEditUser = () => {
    const context = useContext(EditUserContext);

    if (!context) {
        throw new Error('useEditUser must be used within an EditUserProvider');
    }
    
    return context;
}