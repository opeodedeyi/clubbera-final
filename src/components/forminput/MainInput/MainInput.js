'use client';

import { useState, useEffect } from "react";
import style from "./MainInput.module.css";


const clampValue = (value, min, max) => {
    if (min !== undefined && value < min) return min;
    if (max !== undefined && value > max) return max;
    return value;
};

const MainInput = ( props ) => {
    const [charCount, setCharCount] = useState(0);
    const [numberValue, setNumberValue] = useState(() => {
        const initialValue = parseFloat(props.value) || 0;
        return clampValue(initialValue, props.min, props.max);
    });

    useEffect(() => {
        if (props.value) {
            setCharCount(props.value.length);
        }
    }, [props.value]);

    const handleNumberChange = (e) => {
        const newValue = clampValue(parseFloat(e.target.value) || 0, props.min, props.max);
        setNumberValue(newValue);

        if (props.onChange) {
            props.onChange({ target: { value: newValue, name: props.name } });
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
            const step = parseFloat(props.step) || 1;

            const newValue = clampValue(
                e.key === 'ArrowUp' ? numberValue + step : numberValue - step,
                props.min,
                props.max
            );

            setNumberValue(newValue);

            if (props.onChange) {
                props.onChange({ target: { value: newValue, name: props.name } });
            }
        }
    };

    if (props.type==='textarea') {
        return (
            <div className={style.formInputTextarea}>
                <div className={style.formLabelTextarea}>
                    <label className={style.formLabel} htmlFor={props.input}>{ props.input }</label>
                </div>

                <div className={style.textareaWrapper}>
                    <textarea
                        name={props.name}
                        placeholder={props.placeholder}
                        value={props.value}
                        onFocus={props.onFocus}
                        onChange={props.onChange}
                        maxLength={props.maxLength} />
                    {props.maxLength && (
                        <div className={style.charCount}>
                            {charCount}/{props.maxLength}
                        </div>
                    )}
                </div>
            </div>
        )
    } else if (props.type === 'number') {
        return (
            <div className={`${style.mainInputText} ${style.numberInput}`}>
                <div className={style.formLabelContainer}>
                    <label className={style.formLabel} htmlFor={props.input}>{props.input}</label>
                </div>
                <input
                    type="number"
                    name={props.name}
                    placeholder={props.placeholder}
                    value={numberValue}
                    onFocus={props.onFocus}
                    onChange={handleNumberChange}
                    onKeyDown={handleKeyDown}
                    step={props.step || 1}
                    min={props.min}
                    max={props.max}
                />
            </div>
        );
    } else {
        return (
            <div className={style.mainInputText}>
                <div className={style.formLabelContainer}>
                    <label className={style.formLabel} htmlFor={props.input}>{ props.input }</label>
                </div>
                
                <input
                    name={props.name}
                    placeholder={props.placeholder}
                    value={props.value}
                    onFocus={props.onFocus}
                    onChange={props.onChange}
                />
            </div>
        );
    }
}

export default MainInput
