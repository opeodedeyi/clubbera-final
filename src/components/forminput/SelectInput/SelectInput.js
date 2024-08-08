import { HiOutlineChevronDown } from "react-icons/hi";
import style from "./SelectInput.module.css";


const SelectInput = ({ label, name, options, value, onChange }) => {
    return (
        <div className={style.selectInputContainer}>
            {label && <label htmlFor={name}>{label}</label>}
            <div className={style.selectWrapper}>
                <select
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={style.select} >
                        {options.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>

                <HiOutlineChevronDown className={style.arrow} />
            </div>
        </div>
    );
};

export default SelectInput;