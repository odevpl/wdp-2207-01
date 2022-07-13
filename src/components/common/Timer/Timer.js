import React from 'react';
import styles from './Timer.module.scss';

const Timer = () => {
  return (
    <div className={styles.root}>
      <div className={styles.dataContainer}>
        <p className={styles.number}>25</p>
        <p className={styles.text}>days</p>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.number}>10</p>
        <p className={styles.text}>hrs</p>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.number}>45</p>
        <p className={styles.text}>mins</p>
      </div>
      <div className={styles.dataContainer}>
        <p className={styles.number}>30</p>
        <p className={styles.text}>secs</p>
      </div>
    </div>
  );
};

export default Timer;
