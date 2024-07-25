import { useState, useEffect } from "react";
import style from "./MainInput.module.css";


const MainInput = ( props ) => {
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        if (props.value) {
            setCharCount(props.value.length);
        }
    }, [props.value]);

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (props.maxLength && inputValue.length > props.maxLength) {
            e.target.value = inputValue.slice(0, props.maxLength);
        }
        setCharCount(e.target.value.length);
        if (props.onChange) {
            props.onChange(e);
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
