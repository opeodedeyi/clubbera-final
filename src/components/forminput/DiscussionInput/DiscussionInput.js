'use client';

import { useRef, useState, useEffect } from 'react';
import CustomButton from '@/components/utility/CustomButton/CustomButton';
import style from './DiscussionInput.module.css';


export default function DiscussionInput({ value, placeholder, onFocus, onChange, onClick }) {
    const textareaRef = useRef(null);
    const [showButtons, setShowButtons] = useState(false);
    
    const handleChange = (e) => {
        const newValue = e.target.value;
        onChange(newValue);
        setShowButtons(newValue.trim().length > 0);
        adjustHeight();
    };

    const adjustHeight = () => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
    };

    useEffect(() => {
        adjustHeight();
        setShowButtons(value.trim().length > 0);
    }, [value]);

    const handleCancel = () => {
        onChange('');
        setShowButtons(false);
        if (textareaRef.current) {
            textareaRef.current.blur();
        }
    };
    
    return (
        <>
            <div className={style.discussionInput}>
                <textarea
                    ref={textareaRef}
                    placeholder={placeholder || "Say something nice..."}
                    value={value}
                    onFocus={onFocus}
                    onChange={handleChange}
                    rows={1} />

                {showButtons && (
                    <div className={style.discussionButtons}>
                        <CustomButton
                            size='defaultSize'
                            coloring='inverseColoring'
                            onClick={handleCancel}>
                                Cancel
                        </CustomButton>
                        <CustomButton size='defaultSize' onClick={onClick}>Submit</CustomButton>
                    </div>
                )}
            </div>
        </>
    );
};