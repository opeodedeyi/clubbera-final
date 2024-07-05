"use client";
import React from "react";
import style from "./SelectInput.module.css";

const SelectInput = ({ label, name, options, value, onChange }) => {
  return (
    <div className={style.selectInputContainer}>
      {label && <label htmlFor={name}>{label}</label>}
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className={style.select}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default SelectInput;
