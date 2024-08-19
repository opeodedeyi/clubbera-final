import React from 'react';
import styles from './TwoColumnLayout.module.css';

const TwoColumnLayout = ({ children, mobile, padding="0", gap="24px" }) => {
    const [leftChild, rightChild] = React.Children.toArray(children).slice(0, 2);

    return (
        <div
            className={`${styles.container} ${mobile ? styles.alwaysSplit: ''}`}
            style={{ padding, gap }}>
            <div className={styles.column}>{leftChild}</div>
            <div className={styles.column}>{rightChild}</div>
        </div>
    );
};

export default TwoColumnLayout;