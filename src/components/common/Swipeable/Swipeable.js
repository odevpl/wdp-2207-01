import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Swipeable.module.scss';
import clsx from 'clsx';

const Swipeable = ({ action, children, page, pagesNumber }) => {
  const [moveStart, setMoveStart] = useState(0);
  const [moveEnd, setMoveEnd] = useState(0);
  const [isFaded, setIsFaded] = useState(false);

  const handleTouchStart = e => {
    setMoveStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = e => {
    setMoveEnd(e.targetTouches[0].clientX);
  };

  const handleMouseStart = e => {
    setMoveStart(e.clientX);
  };

  const handleMouseMove = e => {
    setMoveEnd(e.clientX);
  };

  const handleMoveEnd = () => {
    if (moveStart - moveEnd > 100 && page + 1 <= pagesNumber - 1) {
      setIsFaded(true);
      setTimeout(() => action(page + 1), 500);
      setTimeout(() => setIsFaded(false), 1000);
    }
    if (moveStart - moveEnd < -100 && page - 1 >= 0) {
      setIsFaded(true);
      setTimeout(() => action(page - 1), 500);
      setTimeout(() => setIsFaded(false), 1000);
    }
  };

  return (
    <div
      className={clsx('w-100', styles.container, isFaded && styles.faded)}
      onTouchStart={e => handleTouchStart(e)}
      onTouchMove={e => handleTouchMove(e)}
      onTouchEnd={() => handleMoveEnd()}
      onMouseDown={e => handleMouseStart(e)}
      onMouseMove={e => handleMouseMove(e)}
      onMouseUp={() => handleMoveEnd()}
    >
      {children}
    </div>
  );
};

Swipeable.propTypes = {
  action: PropTypes.func,
  children: PropTypes.node,
  page: PropTypes.number,
  pagesNumber: PropTypes.number,
  isFaded: PropTypes.bool,
};

export default Swipeable;
