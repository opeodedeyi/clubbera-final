import React from 'react';
import styles from './TwoColumnLayout.module.css';

const TwoColRev = ({ children, firstWidth = 3, padding="0", gap="40px" }) => {
    const [leftChild, rightChild] = React.Children.toArray(children).slice(0, 2);

    return (
        <div className={styles.contRev} style={{ padding, gap }}>
            <div className={styles.col} style={{ flex: firstWidth }}>{leftChild}</div>
            <div className={styles.col} style={{ flex: 2 }}>{rightChild}</div>
        </div>
    );
};

export default TwoColRev;