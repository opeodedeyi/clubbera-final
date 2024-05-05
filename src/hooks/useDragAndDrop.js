import { useState } from 'react';

export const useDragAndDrop = () => {
    const [isDragOver, setIsDragOver] = useState(false);

    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        setIsDragOver(false);
    };

    return { isDragOver, handleDragOver, handleDragLeave, setIsDragOver };
};