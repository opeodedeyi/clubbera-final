'use client'

import { useState, useEffect } from 'react';
import styles from './ProgressBar.module.css';


export default function ProgressBar() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 800);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className={styles.loadingContainer}>
            <div 
                className={styles.loadingBar} 
                style={{width: `${progress}%`}}>
            </div>
        </div>
    );
};