'use client';

import "./forminput.css";

const CheckboxInput = ({ label, children, checked, onChange }) => {
    return (
        <div className="checkbox-input-text">
            {label &&
                <div className="form-label-container checkbox-label-container">
                    <label className="form-label">{ label }</label>
                </div>
            }
            
            <label className="checkbox-main-container">
                <input
                    type="checkbox"
                    checked={checked} 
                    onChange={onChange} />
                <span></span>
                <p className="checkbox-text">{children}</p>
            </label>
        </div>
    );
}

export default CheckboxInput
