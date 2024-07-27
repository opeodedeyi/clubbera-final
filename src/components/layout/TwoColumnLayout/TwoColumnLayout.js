import React from 'react';
import styles from './TwoColumnLayout.module.css';

const TwoColumnLayout = ({ children }) => {
    const [leftChild, rightChild] = React.Children.toArray(children).slice(0, 2);

    return (
        <div className={styles.container}>
            <div className={styles.column}>{leftChild}</div>
            <div className={styles.column}>{rightChild}</div>
        </div>
    );
};

export default TwoColumnLayout;