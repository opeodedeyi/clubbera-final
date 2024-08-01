import { useRef, useState, useEffect } from 'react';
import { HiOutlineClock } from "react-icons/hi";
import style from "./TimeInput.module.css";

export default function TimeInput({ label, name, value, onChange }) {
    const inputRef = useRef(null);
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        setDisplayValue(formatTime(value));
    }, [value]);

    const handleIconClick = () => {
        inputRef.current.showPicker();
    };

    const handleChange = (e) => {
        const newTime = e.target.value;
        setDisplayValue(formatTime(newTime));
        onChange({ target: { name, value: newTime } });
    };

    const formatTime = (time) => {
        if (!time) return '';
        const [hours, minutes] = time.split(':');
        return `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')}`;
    };

    const handleBlur = () => {
        setDisplayValue(formatTime(value));
    };

    return (
        <div className={style.timeInputContainer}>
            {label && <label htmlFor={name}>{label}</label>}

            <div className={style.timeInputWrapper}>
                <input
                    ref={inputRef}
                    type="time"
                    id={name}
                    name={name}
                    value={displayValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.timeInput}
                    />

                <HiOutlineClock 
                    className={style.clockIcon} 
                    onClick={handleIconClick}
                    />
            </div>
        </div>
    );
}