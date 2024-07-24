import { useRef } from 'react';
import { HiOutlineCalendar } from "react-icons/hi";
import style from "./DateInput.module.css";


const DateInput = ({ label, name, value, onChange }) => {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.showPicker();
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
          value={value}
          onChange={onChange}
          className={style.dateInput}
        />

        <HiOutlineCalendar 
          className={style.calendarIcon} 
          onClick={handleIconClick} />
      </div>
    </div>
  );
};

export default DateInput;
