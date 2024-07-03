'use client';

import React, { createContext, useContext, useState } from 'react';

const CreateGroupContext = createContext();

export const CreateGroupProvider = ({ children }) => {
  const [step, setStep] = useState(0);
  const [cityLocation, setCityLocation] = useState("");
  const [latLocation, setLatLocation] = useState("");
  const [lngLocation, setLngLocation] = useState("");
  const [groupTitle, setGroupTitle] = useState("");
  const [groupLink, setGroupLink] = useState("");
  const [groupDescription, setGroupDescription] = useState("");
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [isPrivate, setIsPrivate] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageName, setImageName] = useState('');
  const [imageSize, setImageSize] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <CreateGroupContext.Provider value={{
      step, setStep,
      cityLocation, setCityLocation,
      latLocation, setLatLocation,
      lngLocation, setLngLocation,
      groupTitle, setGroupTitle,
      groupLink, setGroupLink,
      groupDescription, setGroupDescription,
      selectedTopics, setSelectedTopics,
      isPrivate, setIsPrivate,
      selectedImage, setSelectedImage,
      imageName, setImageName,
      imageSize, setImageSize,
      isLoading, setIsLoading,
      error, setError
    }}>
      {children}
    </CreateGroupContext.Provider>
  );
};

export const useCreateGroup = () => useContext(CreateGroupContext);