'use client';

import { useRef } from 'react';
import { HiOutlineTrash, HiOutlinePhotograph } from "react-icons/hi";
import { useDragAndDrop } from "@/hooks/useDragAndDrop";
import { truncateTextWithDot } from '@/utils/textUtils';
import { processImage, convertFileSize } from "@/utils/imageUtils";
import LoadingSpinner from "@/components/animation/LoadingSpinner/LoadingSpinner";
import style from "./ImageUpload.module.css";


const SingleImageUpload = ({ children, hasChange, isUploadingImage, selectedImage, setSelectedImage, imageName, setImageName, imageSize, setImageSize }) => {
    const { isDragOver, handleDragOver, handleDragLeave, setIsDragOver } = useDragAndDrop();
    const fileInputRef = useRef();

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const { dataUrl, size } = await processImage(file);
        setImageName(file.name)
        setImageSize(convertFileSize(size));
        setSelectedImage(dataUrl);
    };

    const handleImageDelete = () => {
        setSelectedImage(null);
        setImageName('');
        fileInputRef.current.value = null;
    };

    const handleDrop = async (event) => {
        event.preventDefault();
        setIsDragOver(false);
        const file = event.dataTransfer.files[0];
        handleImageUpload({ target: { files: [file] } });
    };

    return (
        <div className={style.formInputTextarea}>
            {children &&
                <div className={style.formLabelTextarea}>
                    <label>{ children }</label>
                </div>
            }

            <div className={style.imageBox}>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                />

                {selectedImage ? (
                    <div className={style.imageResult}>
                        <div className={style.imageResultContent}>
                            <div className={style.imageResultContentLeft}>
                                <div className={style.imageResultContentLeftName}>{truncateTextWithDot(imageName, 30)}</div>
                                <div className={style.imageResultContentLeftSize}>{imageSize}</div>
                            </div>
                            {hasChange ? (
                                isUploadingImage ? (
                                    <LoadingSpinner />
                                ) : (
                                    <p onClick={() => fileInputRef.current.click()} className={style.imageResultContentChange}>
                                        Change
                                    </p>
                                ))
                            :
                                <div onClick={handleImageDelete} className={style.imageResultContentDelete}>
                                    <HiOutlineTrash color='var(--main-color-card-danger)' className={style.imageResultContentDeleteSvg} />
                                </div>
                            }
                        </div>
                        <img src={selectedImage} alt="Selected"/>
                    </div>
                ) : (
                    <div className={`${style.imageBoxInner} ${isDragOver ? style.boldenBorder : ''}`} onClick={() => fileInputRef.current.click()} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                        <HiOutlinePhotograph color='var(--color-text-main)' className={style.imageBoxInnerSvg} />
                        <span>Click to upload (max 10MB)</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleImageUpload
