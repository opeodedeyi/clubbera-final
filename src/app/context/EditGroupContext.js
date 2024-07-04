'use client';

import { createContext, useContext, useState, useCallback } from 'react';
import { updateGroup, updateGroupImage } from '@/app/actions/updateGroup';

const EditGroupContext = createContext();

export function EditGroupProvider({ children, group }) {
    const [groupData, setGroupData] = useState({
        id: group.id,
        unique_url: group.unique_url,
        title: group.title,
        tagline: group.tagline || '',
        description: group.description,
        is_private: group.is_private,
        location: group.location,
        lat: group.lat,
        lng: group.lng,
        banner: group.banner,
        member_count: group.member_count,
        topics: group.topics,
        presetTopics: ["writing", "singing", "guitar lessons", "playstation", "chess", "architecture", "dancing", "new to town", "graphics design"]
    });
    const [isUpdatingDetails, setIsUpdatingDetails] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);

    const updateGroupData = useCallback((newData) => {
        setGroupData(prevData => ({ ...prevData, ...newData }));
    }, []);

    const saveGroupData = useCallback(async () => {
        setIsUpdatingDetails(true);
        try {
            const result = await updateGroup(group.unique_url, groupData);
            return result;
        } catch (error) {
            console.error('Error saving group data:', error);
            throw error;
        } finally {
            setIsUpdatingDetails(false);
        }
    }, [groupData, group.unique_url]);

    const uploadGroupImage = useCallback(async (imageData) => {
        setIsUploadingImage(true);
        try {
            const result = await updateGroupImage(group.unique_url, { banner: imageData });
            updateGroupData({ banner: result.banner });
            return result;
        } catch (error) {
            console.error('Error uploading group image:', error);
            throw error;
        } finally {
            setIsUploadingImage(false);
        }
    }, [group.unique_url, updateGroupData]);

    return (
        <EditGroupContext.Provider value={{ 
            groupData, 
            updateGroupData, 
            saveGroupData, 
            uploadGroupImage, 
            isUpdatingDetails, 
            isUploadingImage
        }}>
            {children}
        </EditGroupContext.Provider>
    );
}

export const useEditGroupContext = () => useContext(EditGroupContext);