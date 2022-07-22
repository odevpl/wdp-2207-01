import React from 'react';
import PropTypes from 'prop-types';
import styles from './SliderDots.module.scss';
import clsx from 'clsx';

const SliderDots = ({ currentPage, pagesNumber, action, isFaded }) => {
  const dots = [];

  for (let i = 0; i < pagesNumber; i++) {
    dots.push(
      <li key={i}>
        <button
          onClick={() => action(i)}
          className={clsx(i === currentPage && styles.active)}
          disabled={isFaded}
        ></button>
      </li>
    );
  }

  return <ul className={styles.root}>{dots}</ul>;
};

SliderDots.propTypes = {
  currentPage: PropTypes.number,
  pagesNumber: PropTypes.number,
  action: PropTypes.func,
  isFaded: PropTypes.bool,
};

export default SliderDots;
