'use client';

import { useState, useRef, useEffect } from 'react';

const ExpandableDescription = ({ description, maxLines = 4, hideLess = false }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            const lineHeight = parseInt(window.getComputedStyle(textRef.current).lineHeight);
            const maxHeight = lineHeight * maxLines;
            setShowButton(textRef.current.scrollHeight > maxHeight);
        }
    }, [description, maxLines]);

    return (
        <div>
            <p
                ref={textRef}
                style={{
                    maxHeight: isExpanded ? 'none' : `${maxLines * 1.39}em`,
                    overflow: 'hidden',
                    transition: 'max-height 0.3s ease',
                    whiteSpace: 'pre-wrap',
                }} >
                {description}
            </p>
            {showButton && (
                <div
                    onClick={() => setIsExpanded(!isExpanded)}
                    style={{
                        cursor: 'pointer',
                        color: 'var(--main-color)',
                        overflow: 'hidden',
                        transition: 'max-height 0.3s ease',
                    }}>
                    {isExpanded && hideLess ? null : isExpanded ? 'Read less' : 'Read more'}
                </div>
            )}
        </div>
    );
};

export default ExpandableDescription;