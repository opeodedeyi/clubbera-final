'use client';

import "./forminput.css";
import { useState, useRef } from 'react';
import { readAndCompressImage } from 'browser-image-resizer';


const SingleImageUploadInput = ({ children }) => {
    const [isDragOver, setIsDragOver] = useState(false);
    const [selectedImage, setSelectedImage] = useState(false);
    const [imageName, setImageName] = useState('');
    const [imageSize, setImageSize] = useState('');
    const fileInputRef = useRef();

    function convertFileSize(size) {
        if (size < 1024) {
            return size + ' B';
        } else if (size < 1024 * 1024) {
            const kbSize = (size / 1024).toFixed(2);
            return kbSize + ' KB';
        } else {
            const mbSize = (size / (1024 * 1024)).toFixed(2);
            return mbSize + ' MB';
        }
    }

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setImageName(file.name)
        readImage(file).then(dataUrl => {
            setSelectedImage(dataUrl);
        });
    };

    const handleImageDelete = () => {
        setSelectedImage(null);
        setImageName('');
        fileInputRef.current.value = null;
    };

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        setImageName(file.name)
        readImage(file).then(dataUrl => {
            setSelectedImage(dataUrl);
        });
        setIsDragOver(false);
    };

    const readImage = async (file) => {
        const config = {
            quality: 0.7,
            maxWidth: 1920,
            maxHeight: 1080,
            mimeType: 'image/webp',
            debug: true,
        };
        
        try {
            const resizedImageFile = await readAndCompressImage(file, config);
            const reader = new FileReader();
            
            return new Promise((resolve, reject) => {
                reader.onloadend = () => {
                    resolve(reader.result);
                };
                reader.onerror = reject;
                reader.readAsDataURL(resizedImageFile);
                let resizedImgSize = resizedImageFile.size;
                setImageSize(convertFileSize(resizedImgSize));
            });
        } catch (error) {
            console.log('Failed to resize the image:', error);
        }
    };

    return (
        <div className="form-input-textarea">
            {children &&
                <div className="form-label-textarea">
                    <label className="form-label">{ children }</label>
                </div>
            }

            <div className="single-image-box">
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    ref={fileInputRef}
                />

                {selectedImage ? (
                    <div className='single-image-result'>
                        <div className='single-image-result-content'>
                            <div className='single-image-result-content-left'>
                                <div className='single-image-result-content-left-name'>{imageName}</div>
                                <div className='single-image-result-content-left-size'>{imageSize}</div>
                            </div>
                            <div onClick={handleImageDelete} className='single-image-result-content-delete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                    <path d="M17.5 5.48332C14.725 5.20832 11.9333 5.06665 9.15 5.06665C7.5 5.06665 5.85 5.14998 4.2 5.31665L2.5 5.48332" stroke="#FB5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.08301 4.64163L7.26634 3.54996C7.39967 2.75829 7.49967 2.16663 8.90801 2.16663H11.0913C12.4997 2.16663 12.608 2.79163 12.733 3.55829L12.9163 4.64163" stroke="#FB5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15.7087 8.1167L15.167 16.5084C15.0753 17.8167 15.0003 18.8334 12.6753 18.8334H7.32533C5.00033 18.8334 4.92533 17.8167 4.83366 16.5084L4.29199 8.1167" stroke="#FB5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M8.6084 14.25H11.3834" stroke="#FB5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M7.91699 10.9166H12.0837" stroke="#FB5E5E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                        <img src={selectedImage} alt="Selected"/>
                    </div>
                ) : (
                    <div className={`single-image-box-inner ${isDragOver ? 'bolden-border' : ''}`} onClick={() => fileInputRef.current.click()} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <path d="M14.9539 11.3067L12.8673 6.43334C12.1606 4.78 10.8606 4.71334 9.98727 6.28667L8.72727 8.56C8.08727 9.71334 6.89394 9.81334 6.06727 8.78L5.9206 8.59334C5.0606 7.51334 3.84727 7.64667 3.22727 8.88L2.0806 11.18C1.27393 12.78 2.4406 14.6667 4.22727 14.6667H12.7339C14.4673 14.6667 15.6339 12.9 14.9539 11.3067Z" stroke="#A19F9F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.14648 5.33337C6.25105 5.33337 7.14648 4.43794 7.14648 3.33337C7.14648 2.2288 6.25105 1.33337 5.14648 1.33337C4.04191 1.33337 3.14648 2.2288 3.14648 3.33337C3.14648 4.43794 4.04191 5.33337 5.14648 5.33337Z" stroke="#A19F9F" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className='single-image-innertext'>Click to upload (max 10MB)</span>
                    </div>
                )}
            </div>
        </div>
    )
}

export default SingleImageUploadInput
