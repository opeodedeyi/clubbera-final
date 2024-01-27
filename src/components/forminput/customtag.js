'use client';

import "@/components/forminput/forminput.css";


const CustomTag = ({ selected="not-selected", onClick, children }) => {
    return (
        <button type="button" className={`custom-tag ${selected}`} onClick={onClick}>
            { children }
        </button>
    );
};

export default CustomTag
