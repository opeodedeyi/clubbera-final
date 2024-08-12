import { useRef, useState, useEffect } from 'react';
import { HiOutlineClock } from "react-icons/hi";
import style from "./TimeInput.module.css";

export default function TimeInput({ label, name, value, onChange }) {
    const inputRef = useRef(null);
    const [displayValue, setDisplayValue] = useState('');

    useEffect(() => {
        setDisplayValue(formatTime(value));
    }, [value]);

    const handleWrapperClick = () => {
        inputRef.current.showPicker();
    };

    const handleChange = (e) => {
        const newTime = e.target.value;
        const [hours, minutes] = newTime.split(':');
        
        // Create a new Date object with the current date and selected time
        const date = new Date();
        date.setHours(parseInt(hours, 10));
        date.setMinutes(parseInt(minutes, 10));
        date.setSeconds(0);
        date.setMilliseconds(0);

        setDisplayValue(formatTime(date));
        onChange({ target: { name, value: date.toISOString() } });
    };

    const formatTime = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const handleBlur = () => {
        setDisplayValue(formatTime(value));
    };

    return (
        <div className={style.timeInputContainer}>
            {label && <label htmlFor={name}>{label}</label>}

            <div className={style.timeInputWrapper} onClick={handleWrapperClick}>
                <input
                    ref={inputRef}
                    type="time"
                    id={name}
                    name={name}
                    value={displayValue}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={style.timeInput} />

                <HiOutlineClock 
                    className={style.clockIcon} />
            </div>
        </div>
    );
}