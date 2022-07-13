import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselButton.module.scss';

const CarouselButton = ({ direction }) => {
  if (direction === 'left') {
    return (
      <div className={styles.button}>
        <span className={styles.arrow}>&lt;</span>
      </div>
    );
  }
  return (
    <div className={styles.button}>
      <span className={styles.arrow}>&gt;</span>
    </div>
  );
};

CarouselButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
};

export default CarouselButton;
