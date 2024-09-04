import SelectInput from "@/components/forminput/SelectInput/SelectInput";
import styles from "./Filters.module.css";

export default function Filters({ upcoming, handleUpcomingChange }) {
    return (
        <div className={styles.filtersContainer}>
            <SelectInput
                name="upcoming"
                value={upcoming}
                onChange={handleUpcomingChange}
                borderRadius="1000px"
                minWidth="125px"
                options={[
                    { value: true, label: "Upcoming" },
                    { value: false, label: "Past" },
                ]} />
        </div>
    );
};
