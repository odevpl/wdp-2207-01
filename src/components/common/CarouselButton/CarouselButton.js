import React from 'react';
import PropTypes from 'prop-types';
import styles from './CarouselButton.module.scss';

const CarouselButton = ({
  direction,
  action,
  currentPage,
  lastPageIndex,
  parentFade,
  handleParentFade,
  infinite,
}) => {
  const changePageUp = pageIdx => {
    if (pageIdx < lastPageIndex) {
      action(currentPage + 1);
    } else if (infinite) {
      action(0);
    }
  };

  const changePageDown = pageIdx => {
    if (pageIdx > 0) {
      action(currentPage - 1);
    } else if (infinite) {
      action(lastPageIndex);
    }
  };

  if (direction === 'left') {
    return (
      <button
        disabled={parentFade}
        onClick={() => {
          handleParentFade();
          setTimeout(() => {
            changePageDown(currentPage);
          }, 500);
        }}
        className={styles.button}
      >
        <span className={styles.arrow}>&lt;</span>
      </button>
    );
  }
  return (
    <button
      disabled={parentFade}
      onClick={() => {
        handleParentFade();
        setTimeout(() => {
          changePageUp(currentPage);
        }, 500);
      }}
      className={styles.button}
    >
      <span className={styles.arrow}>&gt;</span>
    </button>
  );
};

CarouselButton.propTypes = {
  direction: PropTypes.oneOf(['left', 'right']).isRequired,
  action: PropTypes.func,
  currentPage: PropTypes.number,
  lastPageIndex: PropTypes.number,
  parentFade: PropTypes.bool,
  handleParentFade: PropTypes.func,
  infinite: PropTypes.bool,
};

export default CarouselButton;
