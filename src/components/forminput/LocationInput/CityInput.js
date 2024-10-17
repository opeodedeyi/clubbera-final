"use client";

import React, { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, { getGeocode, getLatLng, } from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
import { HiOutlineLocationMarker } from "react-icons/hi";
import style from "./LocationInput.module.css";


export default function CityInput({
    label,
    placeholder,
    cityLocation,
    setCityLocation,
    setLatLocation,
    setLngLocation,
}) {
    const [libraries] = useState(["places"]);
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_PLACES_API_KEY,
        libraries,
    });

    if (!isLoaded) return "Loading...";
    return (
        <InnerInput
            label={label}
            placeholder={placeholder}
            cityLocation={cityLocation}
            setCityLocation={setCityLocation}
            setLatLocation={setLatLocation}
            setLngLocation={setLngLocation} />
    );
}

const InnerInput = ({
    onSelect,
    label,
    placeholder,
    cityLocation,
    setCityLocation,
    setLatLocation,
    setLngLocation,
}) => {
    const {
        ready,
        suggestions: { data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            types: ["(cities)"],
        },
        debounce: 300,
    });

    const [inputValue, setInputValue] = useState(cityLocation || "");

    useEffect(() => {
        if (inputValue === "" && cityLocation) {
            setInputValue(cityLocation);
        }
    }, [cityLocation]);

    onSelect = (address, lat, lng) => {
        setCityLocation(address);
        setLatLocation(lat);
        setLngLocation(lng);
        setInputValue(address);
    };

    const ref = useOnclickOutside(() => {
        clearSuggestions();
    });

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            console.log({
                lat,
                lng,
                address,
            });
            onSelect(address, lat, lng);
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value);
        setValue(e.target.value);
    };

    return (
        <div className={style.overallInputContainer}>
            <div className={style.mainInputSearch}>
                <div className={style.formLabelContainer}>
                    <label>{label}</label>
                </div>
                <div className={style.searchBox}>
                    <HiOutlineLocationMarker className={style.searchIcon} color="var(--color-text-main)" />
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleChange}
                        placeholder={placeholder}
                        disabled={!ready} />
                    {ready && data.length > 0 && (
                        <ul ref={ref}>
                            {data.map((suggestion) => {
                                const { place_id, description } = suggestion;
                                return (
                                    <li key={place_id} onClick={() => handleSelect(description)}>
                                        {description}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};
