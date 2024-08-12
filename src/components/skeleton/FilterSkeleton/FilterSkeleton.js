import styles from './FilterSkeleton.module.css';

export default function FilterSkeleton() {
    return (
        <div className={styles.filtersContainer}>
            <div className={`${styles.selectSkeleton} ${styles.skeleton}`}></div>
            <div className={`${styles.buttonSkeleton} ${styles.skeleton}`}></div>
        </div>
    );
};