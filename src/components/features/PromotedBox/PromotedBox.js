import React from 'react';
import styles from './PromotedBox.module.scss';

const PromotedBox = () => {
  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.wrapper}>
          <div className={styles.imgLeft}>
            <div className={styles.shadow}>
              <div className={styles.description}>
                <span className={styles.smallFont}>GUEST ROOM</span>
                <br />
                <span>SOFA</span>
                <br />
                <span className={styles.percent}>-20%</span>
              </div>
            </div>
            <img
              src={`${process.env.PUBLIC_URL}/images/promotedBox_sofa.png`}
              alt='promotedBox_sofa'
            />
          </div>

          <div className={styles.imgRight}>
            <div className={styles.chairWrapper}>
              <div className={styles.chairDescriptionWrapper}>
                <span className={styles.chairDescription}>
                  <strong>OFFICE</strong> CHAIR
                </span>
                <span className={styles.chairDescription2}>COLLECTION</span>
                <span className={styles.chairPrice}>$200.00</span>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/promotedBox_chair.jpeg`}
                alt='promotedBox_chair'
              />
            </div>
            <div className={styles.bedWrapper}>
              <div className={styles.bedDescriptionWrapper}>
                <span className={styles.bedDescription}>
                  <strong>SPECIAL</strong> COLLECTION
                </span>
                <span className={styles.bedDescription2}>SAVE UP 45% OF FURNITURE</span>
              </div>
              <img
                src={`${process.env.PUBLIC_URL}/images/promotedBox_bed.jpeg`}
                alt='promotedBox_bed'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotedBox;
