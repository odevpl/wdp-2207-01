import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Swipeable = ({ action, children, page, pagesNumber, isFaded }) => {
  const [moveStart, setMoveStart] = useState(0);
  const [moveEnd, setMoveEnd] = useState(0);

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
      action(page + 1);
    }
    if (moveStart - moveEnd < -100 && page - 1 >= 0) {
      action(page - 1);
    }
  };

  return (
    <div
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
