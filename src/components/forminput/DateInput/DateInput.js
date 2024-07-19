"use client";

import React from "react";
import style from "./DateInput.module.css";

const DateInput = ({ label, name, value, onChange }) => {
  return (
    <div className={style.dateInputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type="date"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={style.dateInput}
      />
    </div>
  );
};
export default DateInput;
