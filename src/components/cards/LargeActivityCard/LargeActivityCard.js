'use client';

import { useEffect, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import Image from 'next/image';
import Link from "next/link";
import style from './LargeActivityCard.module.css';

export default function LargeActivityCard({ activity, goToNextEvent, goToPreviousEvent }) {
    const [isAnimating, setIsAnimating] = useState(false);
    
    useEffect(() => {
        setIsAnimating(true);
        const timeout = setTimeout(() => setIsAnimating(false), 200);
        return () => clearTimeout(timeout);
    }, [activity]);

    const bind = useGesture({
        onDrag: ({ direction: [xDir] }) => {
            if (xDir < 0) goToNextEvent();
            if (xDir > 0) goToPreviousEvent();
        },
        // onDragStart: () => goToNextEvent(),
        // onDragEnd: () => goToPreviousEvent(),
    });

    return (
        <Link {...bind()} href={`/meeting/${activity?.unique_url}` || '/'} className={style.cardWrapper} >
            <div className={style.cardContainer}>
                <div className={`${style.fadeOverlay} ${isAnimating ? style.fadeIn : ''}`}></div> {/* Overlay for darkening effect */}

                <Image
                    src={activity?.image || '/group.png'}
                    alt="Activity banner image"
                    fill={true}
                    quality={60}
                    className={style.meetingImage} />

                <div className={style.cardText}>
                    <div className={style.cardTextMain}>
                        <p className={style.activitySubtitle}>SAT, JULY 29, 2023, 4:00PM</p>
                        <p className={style.activityTitle}>Beach Hangout with Cool Kids</p>
                        <p className={style.activitySubtitle}>Leeds, UK</p>
                    </div>
                </div>

                {/* profile pictures */}
            </div>
        </Link>
    );
};