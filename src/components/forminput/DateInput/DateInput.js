import { useRef } from 'react';
import { HiOutlineCalendar } from "react-icons/hi";
import style from "./DateInput.module.css";

const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toISOString().split('T')[0];
};

export default function DateInput({ label, name, value, onChange }) {
    const inputRef = useRef(null);

    const handleIconClick = () => {
        inputRef.current.showPicker();
    };

    const handleChange = (e) => {
        const selectedDate = new Date(e.target.value);
        onChange({ target: { name, value: selectedDate.toISOString() } });
    };

    return (
        <div className={style.dateInputContainer}>
            {label && <label htmlFor={name}>{label}</label>}

            <div className={style.dateInputWrapper}>
                <input
                    ref={inputRef}
                    type="date"
                    id={name}
                    name={name}
                    value={formatDate(value)}
                    onChange={handleChange}
                    className={style.dateInput} />

                <HiOutlineCalendar 
                    className={style.calendarIcon} 
                    onClick={handleIconClick} />
            </div>
        </div>
    );
};
