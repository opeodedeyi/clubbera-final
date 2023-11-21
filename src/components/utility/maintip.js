'use client';

import "./maintip.css";

const MainTip = ({ theme="default-theme", children }) => {
    return (
        <div className={`tip-container ${theme}`}>
            <div className="tip-container-image">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className="tip-svg">
                    <path d="M7.99967 14.6667C11.6663 14.6667 14.6663 11.6667 14.6663 8.00004C14.6663 4.33337 11.6663 1.33337 7.99967 1.33337C4.33301 1.33337 1.33301 4.33337 1.33301 8.00004C1.33301 11.6667 4.33301 14.6667 7.99967 14.6667Z" stroke="#1E7B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 5.33337V8.66671" stroke="#1E7B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7.99609 10.6666H8.00208" stroke="#1E7B1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>
            <p>{children}</p>
        </div>
    );
}

export default MainTip