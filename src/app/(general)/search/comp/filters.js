"use client";
import { useState } from "react";
import styles from "./filters.module.css";
import SelectInput from "@/components/forminput/SelectInput/SelectInput";

const Filters = () => {
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const handleReset = () => {
    setCategory("");
    setStatus("");
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.selectWrapper}>
        <SelectInput
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={[
            { value: "", label: "Category" },
            { value: "category1", label: "Category 1" },
            { value: "category2", label: "Category 2" },
            { value: "category3", label: "Category 3" },
          ]}
        />
      </div>
      <div className={styles.selectWrapper}>
        <SelectInput
          name="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          options={[
            { value: "", label: "Status" },
            { value: "status1", label: "Status 1" },
            { value: "status2", label: "Status 2" },
            { value: "status3", label: "Status 3" },
          ]}
        />
      </div>
      <button className={styles.resetButton} onClick={handleReset}>
        Reset Filters
      </button>
    </div>
  );
};

export default Filters;
