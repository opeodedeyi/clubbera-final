'use client';

import { createContext, useContext, useState, useCallback } from 'react';
// import { updateUser, changePassword, updateUserImage } from '@/app/actions/updateGroup';

const EditUserContext = createContext();

export const EditUserProvider = ({ children, user, activeTab }) => {
    const [userData, setUserData] = useState({
        id: user.id,
        unique_url: user.unique_url,
        fullName: user.full_name,
        bio: user.bio || '',
        city: user.location,
        lat: user.lat,
        lng: user.lng,
        gender: user.gender,
        birthday: user.birthday,
        oldPassword: '',
        newPassword: '',
        avatar: user.avatar,
    });
    const [isUpdatingUser, setIsUpdatingUser] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    const updateUserData = useCallback((newData) => {
        setUserData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const submitUserData = useCallback(async () => {
        setIsUpdatingUser(true);
        try {
            if (activeTab === 'basicInfo') {
                console.log('changing user data');
                // const result = await updateUser(user.unique_url, userData);
                // return result;
            } else if (activeTab === 'changePassword') {
                console.log('changing password');
                // const result = await changePassword(user.unique_url, userData);
                // return result;
            }
        } catch (error) {
            // console.error('Error saving user data:', error);
            // throw error;
        } finally {
            setIsUpdatingUser(false);
        }
    }, [userData, user.unique_url, activeTab]);

    const uploadUserImage = useCallback(async (imageData) => {
        setIsUploadingImage(true);
        try {
            console.log('uploading image');
            // const result = await updateUserImage(user.unique_url, { avatar: imageData });
            // updateUserData({ avatar: result.banner });
            // return result;
        } catch (error) {
            // console.error('Error uploading group image:', error);
            // throw error;
        } finally {
            setIsUploadingImage(false);
        }
    }, [user.unique_url, updateUserData]);

    return (
        <EditUserContext.Provider value={{
            userData,
            updateUserData,
            submitUserData,
            uploadUserImage,
            isUpdatingUser,
            isUploadingImage
        }}>
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