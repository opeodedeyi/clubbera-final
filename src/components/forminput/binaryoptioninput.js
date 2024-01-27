'use client';

import "@/components/forminput/forminput.css";

const BinaryOptionInput = ({ children, truthyPlaceholder, falseyPlaceholder, boolValue, setBoolValue }) => {
    const handleTrueButtonClick = () => {
        setBoolValue(true);
    };

    const handleFalseButtonClick = () => {
        setBoolValue(false);
    };

    return (
        <div className="form-input-textarea">
            {children &&
                <div className="form-label-textarea">
                    <label className="form-label">{ children }</label>
                </div>
            }

            <div className="binary-option-input">
                <button onClick={handleTrueButtonClick} type="button" className={`btn-option ${boolValue===true ? 'btn-option-selected' : ''}`}>{truthyPlaceholder}</button>
                <button onClick={handleFalseButtonClick} type="button" className={`btn-option ${boolValue===false ? 'btn-option-selected' : ''}`}>{falseyPlaceholder}</button>
            </div>
        </div>
    )
}

export default BinaryOptionInput
