"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from 'next/navigation';
import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import CustomButton from "@/components/utility/CustomButton/CustomButton";
import styles from "./Filters.module.css";

const Filters = ({ initialSortBy, initialUpcoming, initialLimit }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateSearch = useCallback((newParams) => {
        const current = new URLSearchParams(Array.from(searchParams.entries()));
        
        // Update or add new parameters
        Object.entries(newParams).forEach(([key, value]) => {
            if (value !== undefined && value !== null) {
                current.set(key, value);
            } else {
                current.delete(key);
            }
        });

        // Construct the new URL
        const search = current.toString();
        const query = search ? `?${search}` : "";

        router.push(`/search${query}`);
    }, [searchParams, router]);

    const handleSortByChange = (e) => {
        updateSearch({ sortBy: e.target.value, page: 1 });
    };

    const handleUpcomingChange = (e) => {
        updateSearch({ upcoming: e.target.value, page: 1 });
    };

    const handleLimitChange = (e) => {
        updateSearch({ limit: e.target.value, page: 1 });
    };

    const handleReset = () => {
        updateSearch({ sortBy: "relevance", upcoming: true, page: 1 });
    };

    return (
        <div className={styles.filtersContainer}>
            <SelectInput
                name="initialSortBy"
                value={initialSortBy}
                onChange={handleSortByChange}
                borderRadius="1000px"
                minWidth="120px"
                options={[
                    { value: "relevance", label: "Relevance" },
                    { value: "date", label: "Date" },
                ]} />
            {/* <SelectInput
                name="initialUpcoming"
                value={initialUpcoming}
                onChange={handleUpcomingChange}
                borderRadius="1000px"
                minWidth="125px"
                options={[
                    { value: true, label: "Upcoming" },
                    { value: false, label: "Past" },
                ]} /> */}
            <CustomButton
                coloring="buttonNobuttonColoring"
                size="buttonNobuttonSize"
                onClick={handleReset}>
                Reset Filters
            </CustomButton>
        </div>
    );
};

export default Filters;
