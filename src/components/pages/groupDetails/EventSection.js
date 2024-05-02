'use client';

import { useState, useEffect } from 'react';
import '@/app/style/groupdetails.css';


const EventSection = ({ params }) => {
    const [events, setEvents] = useState(null);

    return (
        <div className="group-event">
            <div className="group-event-title">
                <p className="group-event-title-text">Upcoming events</p>
            </div>
        </div>
    )
};

export default EventSection;