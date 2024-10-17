'use client';

import Link from 'next/link';
import { useCallback, useState, useEffect } from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


const MapSkeleton = ({ height }) => (
    <div 
        style={{
            height: height,
            width: "100%",
            borderRadius: "8px",
            backgroundColor: "var(--border-color)",
            animation: "pulse 1.5s infinite ease-in-out",
        }} />
);

const Map = ({ lat='53.7965485', lng='-1.7651882', height="400px" }) => {
    const [mapHeight, setMapHeight] = useState(height);
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY
    });

    useEffect(() => {
        const updateHeight = () => {
            setMapHeight(window.innerWidth <= 768 ? '200px' : height);
        };

        updateHeight();
        window.addEventListener('resize', updateHeight);
        return () => window.removeEventListener('resize', updateHeight);
    }, [height]);

    const mapStyles = {
        height: typeof window !== 'undefined' && window.innerWidth <= 768 ? '200px' : height,
        width: "100%",
        borderRadius: "8px",
        overflow: "hidden"
    };
    
    const defaultCenter = {
        lat: parseFloat(lat),
        lng: parseFloat(lng)
    };

    const mapOptions = {
        disableDefaultUI: true,
        zoomControl: false,
        gestureHandling: 'none',
        cursor: 'pointer'
    };
    
    const MapComponent = useCallback(() => (
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter} 
                options={mapOptions}>
                <Marker position={defaultCenter} />
            </GoogleMap>
    ), [mapStyles, defaultCenter, mapOptions]);

    const mapUrl = `https://www.google.com/maps/search/?api=1&query=${defaultCenter.lat},${defaultCenter.lng}`;

    return (
        <Link href={mapUrl} target="_blank" rel="noopener noreferrer">
            <div style={{ cursor: 'pointer' }}>
                {isLoaded ? <MapComponent /> : <MapSkeleton height={mapHeight} />}
            </div>
        </Link>
    );
}

export default Map;