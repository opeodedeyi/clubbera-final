"use client";

import React, { useState, useEffect } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { useLoadScript } from "@react-google-maps/api";
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
      setLngLocation={setLngLocation}
    />
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
          <div className={style.searchIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M8.00004 9.45334C9.1488 9.45334 10.08 8.52209 10.08 7.37334C10.08 6.22458 9.1488 5.29333 8.00004 5.29333C6.85129 5.29333 5.92004 6.22458 5.92004 7.37334C5.92004 8.52209 6.85129 9.45334 8.00004 9.45334Z"
                stroke="#A19F9F"
                strokeWidth="1.3"
              />
              <path
                d="M2.4133 6.16004C3.72664 0.386709 12.28 0.393376 13.5866 6.16671C14.3533 9.55338 12.2466 12.42 10.4 14.1934C9.05997 15.4867 6.93997 15.4867 5.5933 14.1934C3.7533 12.42 1.64664 9.54671 2.4133 6.16004Z"
                stroke="#A19F9F"
                strokeWidth="1.3"
              />
            </svg>
          </div>
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={!ready}
          />
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
