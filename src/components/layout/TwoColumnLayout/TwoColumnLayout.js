import React from 'react';
import styles from './TwoColumnLayout.module.css';

const TwoColumnLayout = ({ children, mobile }) => {
    const [leftChild, rightChild] = React.Children.toArray(children).slice(0, 2);

    return (
        <div className={`${styles.container} ${mobile ? styles.alwaysSplit: ''}`}>
            <div className={styles.column}>{leftChild}</div>
            <div className={styles.column}>{rightChild}</div>
        </div>
    );
};

export default TwoColumnLayout;