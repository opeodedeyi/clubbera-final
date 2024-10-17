import React from 'react';
import styles from './TwoColumnLayout.module.css';

const TwoColMed = ({ children, firstWidth = 3, padding="0", gap="20px" }) => {
    const [leftChild, rightChild] = React.Children.toArray(children).slice(0, 2);

    return (
        <div className={styles.cont} style={{ padding, gap }}>
            <div className={styles.col} style={{ flex: firstWidth }}>{leftChild}</div>
            <div className={styles.col} style={{ flex: 2 }}>{rightChild}</div>
        </div>
    );
};

export default TwoColMed;