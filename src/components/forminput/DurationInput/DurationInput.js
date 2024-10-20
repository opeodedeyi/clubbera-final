'use client'

import { useState, useEffect } from 'react';
import { HiOutlineChevronDown } from "react-icons/hi";
import CustomButton from '@/components/utility/CustomButton/CustomButton'
import TwoColumnLayout from "@/components/layout/TwoColumnLayout/TwoColumnLayout";
import style from "./DurationInput.module.css";


const INITIAL_PRESET_OPTIONS = [
    { label: 'no duration set', value: '0:00' },
    { label: '15 minutes', value: '0:15' },
    { label: '30 minutes', value: '0:30' },
    { label: '45 minutes', value: '0:45' },
    { label: '1 hour', value: '1:00' },
    { label: '1 hour 30 minutes', value: '1:30' },
    { label: '2 hours', value: '2:00' },
    { label: 'Custom', value: 'custom' }
];

const DurationInput = ({ label, name, value, onChange }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [customDurationValue, setCustomDurationValue] = useState('');
    const [customDurationUnit, setCustomDurationUnit] = useState('minutes');
    const [options, setOptions] = useState(INITIAL_PRESET_OPTIONS);

    useEffect(() => {
        initializeSelectedOption(value);
    }, [value]);

    const initializeSelectedOption = (inputValue) => {
        const option = options.find(opt => opt.value === inputValue);
        if (option) {
            setSelectedOption(option.label);
        } else if (inputValue) {
            const newOption = createCustomOption(inputValue);
            updateOptionsWithCustom(newOption);
            setSelectedOption(newOption.label);
        } else {
            setSelectedOption('');
        }
    };

    const createCustomOption = (durationValue) => {
        const [hours, minutes] = durationValue.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        const label = totalMinutes >= 60
            ? `${Math.floor(totalMinutes / 60)} hour${Math.floor(totalMinutes / 60) !== 1 ? 's' : ''}${minutes % 60 ? ` ${minutes % 60} minute${minutes % 60 !== 1 ? 's' : ''}` : ''}`
            : `${totalMinutes} minute${totalMinutes !== 1 ? 's' : ''}`;
        return { label, value: durationValue };
    };

    const updateOptionsWithCustom = (newOption) => {
        setOptions(prevOptions => {
            const filteredOptions = prevOptions.filter(opt => 
                opt.value !== 'custom' && 
                !INITIAL_PRESET_OPTIONS.find(initial => initial.value === opt.value)
            );
            return [...INITIAL_PRESET_OPTIONS.slice(0, -1), newOption, { label: 'Custom', value: 'custom' }];
        });
    };

    const handleChange = (e) => {
        const newLabel = e.target.value;
        
        if (newLabel === 'Custom') {
            setIsModalOpen(true);
        } else {
            setSelectedOption(newLabel);
            const option = options.find(opt => opt.label === newLabel);
            onChange(option.value);
        }
    };

    const handleCustomDurationValueChange = (e) => {
        const inputValue = e.target.value;
        if (inputValue === '' || /^\d+$/.test(inputValue)) {
            const numValue = parseInt(inputValue, 10);
            if (customDurationUnit === 'hours' && numValue <= 23) {
                setCustomDurationValue(inputValue);
            } else if (customDurationUnit === 'minutes' && numValue <= 2439) {
                setCustomDurationValue(inputValue);
            } else if (inputValue === '') {
                setCustomDurationValue('');
            }
        }
    };

    const handleCustomDurationUnitChange = (e) => {
        const newUnit = e.target.value;
        setCustomDurationUnit(newUnit);
        setCustomDurationValue('');
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setCustomDurationValue('');
    };

    const handleCustomDurationSet = () => {
        if (customDurationValue) {
            let totalMinutes;
            if (customDurationUnit === 'hours') {
                totalMinutes = Math.min(parseInt(customDurationValue, 10), 23) * 60;
            } else {
                totalMinutes = Math.min(parseInt(customDurationValue, 10), 2439);
            }

            const hours = Math.floor(totalMinutes / 60);
            const minutes = totalMinutes % 60;
            const formattedDuration = `${hours}:${minutes.toString().padStart(2, '0')}`;
            
            const existingOption = INITIAL_PRESET_OPTIONS.find(opt => opt.value === formattedDuration);
            if (existingOption) {
                setSelectedOption(existingOption.label);
                onChange(existingOption.value);
            } else {
                const newOption = createCustomOption(formattedDuration);
                updateOptionsWithCustom(newOption);
                setSelectedOption(newOption.label);
                onChange(newOption.value);
            }
        }
        setIsModalOpen(false);
        setCustomDurationValue('');
    };

    return (
        <div className={style.durationInputContainer}>
            {label && <label htmlFor={name}>{label}</label>}

            <div className={style.selectWrapper}>
                <select
                    id={name}
                    name={name}
                    value={selectedOption}
                    onChange={handleChange}
                    className={style.select}
                >
                    {options.map(option => (
                        <option key={option.label} value={option.label}>
                            {option.label}
                        </option>
                    ))}
                </select>

                <HiOutlineChevronDown className={style.selectIcon} />
            </div>

            {isModalOpen && (
                <div className={style.modal} onClick={handleModalClose}>
                    <div className={style.modalContent} onClick={e => e.stopPropagation()}>
                        <div className={style.modalContentTop}>
                            <h4 className={style.modalContentText}>Set duration</h4>

                            <div className={style.customDurationInputs}>
                                <TwoColumnLayout mobile={true}>
                                    <input
                                        type="text"
                                        value={customDurationValue}
                                        onChange={handleCustomDurationValueChange}
                                        className={style.customInput}
                                    />

                                    <div className={style.selectWrapper}>
                                        <select
                                            value={customDurationUnit}
                                            onChange={handleCustomDurationUnitChange}
                                            className={style.customUnitSelect}>
                                            <option value="minutes">minutes</option>
                                            <option value="hours">hours</option>
                                        </select>
                                        <HiOutlineChevronDown className={style.selectIcon} />
                                    </div>
                                </TwoColumnLayout>
                            </div>
                        </div>

                        <div className={style.modalButtons}>
                            <CustomButton onClick={handleModalClose} size='buttonNobuttonSize' coloring='buttonNobuttonColoring'>
                                Cancel
                            </CustomButton>
                            <CustomButton onClick={handleCustomDurationSet} size='defaultButtonSize' disabled={!customDurationValue}>
                                Set
                            </CustomButton>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DurationInput;