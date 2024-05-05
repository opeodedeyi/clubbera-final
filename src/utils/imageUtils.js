let readAndCompressImage;
if (typeof window !== 'undefined') {
    readAndCompressImage = require('browser-image-resizer').readAndCompressImage;
}

export const convertFileSize = (size) => {
    if (size < 1024) return size + ' B';
    else if (size < 1024 * 1024) return (size / 1024).toFixed(2) + ' KB';
    else return (size / (1024 * 1024)).toFixed(2) + ' MB';
};

export const processImage = async (file) => {
    const config = {
        quality: 0.7,
        maxWidth: 1280,
        maxHeight: 720,
        mimeType: 'image/webp',
        debug: true,
    };

    try {
        const resizedImage = await readAndCompressImage(file, config);
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve({ dataUrl: reader.result, size: resizedImage.size });
            reader.onerror = reject;
            reader.readAsDataURL(resizedImage);
        });
    } catch (error) {
        console.error('Failed to resize the image:', error);
    }
};