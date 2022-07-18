import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { updateRating } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';
import { deleteRating } from '../../../redux/productsRedux';

const StarRating = ({ id, ownStars, stars }) => {
  const dispatch = useDispatch();
  const [hover, setHover] = useState(0);

  const updateStars = ({ e, id, star }) => {
    e.preventDefault();
    if (ownStars === star) {
      dispatch(deleteRating({ productId: id, ownStars: star }));
    } else dispatch(updateRating({ productId: id, ownStars: star }));
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <Button key={star} onClick={e => updateStars({ e, id, star })}>
          <FontAwesomeIcon
            icon={star <= (hover || ownStars || stars) ? faStar : farStar}
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(0)}
            className={
              ownStars || hover === star || (hover && stars)
                ? styles.ownStars
                : styles.stars
            }
          ></FontAwesomeIcon>
        </Button>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  id: PropTypes.string,
  ownStars: PropTypes.number,
  stars: PropTypes.number,
};

export default StarRating;
