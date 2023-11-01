'use client';

import "./forminput.css";

const MainInput = ( props ) => {
    if (props.type==='textarea') {
        return (
            <div className="form-input-textarea">
            </div>
        )
    } else {
        return (
            <div className="main-input-text">
                <div className="form-label-container">
                    <label className="form-label" htmlFor={props.input}>{ props.input }</label>
                </div>
                
                <input
                    name={props.type}
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
