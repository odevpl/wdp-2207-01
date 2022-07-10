import React from 'react';
import styles from './BrandsBox.module.scss';

const BrandsBox = () => {
  return (
    <div className='container'>
      <hr />
      <div className={styles.brandsWrapper}>
        <div className={styles.button}>
          <span className={styles.arrow}>&lt;</span>
        </div>
        <div className={styles.imgSize}>
          <img src={`${process.env.PUBLIC_URL}/images/brand1.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand3.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand3.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand1.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand3.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand3.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand2.webp`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand3.png`} />
          <img src={`${process.env.PUBLIC_URL}/images/brand1.webp`} />
        </div>
        <div className={styles.button}>
          <span className={styles.arrow}>&gt;</span>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default BrandsBox;
