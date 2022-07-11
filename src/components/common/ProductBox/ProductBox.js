import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import StarRating from '../../features/StarRating/StarRating';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleFavoriteProduct,
  toggleCompareProduct,
} from '../../../redux/productsRedux';
import {
  addToCompare,
  removeFromCompare,
  getCountOfCompared,
} from '../../../redux/comparedProductsRedux';
import Timer from '../Timer/Timer';

const ProductBox = ({
  name,
  price,
  oldPrice,
  promo,
  stars,
  id,
  isFeatured,
  isFavorite,
  isCompared,
  image,
  ownStars,
}) => {

  const dispatch = useDispatch();

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(id));
  };
  const count = useSelector(state => getCountOfCompared(state));

  const payload = {
    id: id,
    image: image,
  };

  const handleCompare = e => {
    e.preventDefault();
    if (isCompared) {
      dispatch(toggleCompareProduct(id));
      dispatch(removeFromCompare(id));
    } else {
      if (count < 4) {
        dispatch(addToCompare(payload));
        dispatch(toggleCompareProduct(payload.id));
      } else {
        alert('Max number of compared products is 4'); // change to final alert modal
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && !isFeatured && <div className={styles.sale}>{promo}</div>}
        <img
          className={styles.image}
          src={`${process.env.PUBLIC_URL}/images/image${image}.png`}
          alt='product'
        />
        {isFeatured && (
          <div className={styles.additionalInfo}>
            <Button variant='medium'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
            <div className={styles.timerLayout}>
              <Timer />
            </div>
          </div>
        )}
        {!isFeatured && (
          <div className={styles.buttons}>
            <Button variant='small'>Quick View</Button>
            <Button variant='small'>
              <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
            </Button>
          </div>
        )}
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          <StarRating id={id} ownStars={ownStars} stars={stars} />
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          {isFeatured && (
            <Button variant='outline'>
              <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
            </Button>
          )}
          <Button
            onClick={handleClick}
            className={clsx(styles.buttonHover, isFavorite && styles.isActive)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button
            onClick={handleCompare}
            className={clsx(styles.buttonHover, isCompared && styles.isActive)}
            variant='outline'
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.price}>
          <Button
            noHover
            variant='small'
            className={clsx(styles.oldPrice, !oldPrice && styles.hidden)}
          >
            $ {Number.parseFloat(oldPrice).toFixed(2)}
          </Button>
          <Button noHover variant='small'>
            $ {Number.parseFloat(price).toFixed(2)}

          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  isFeatured: PropTypes.bool,
  isCompared: PropTypes.bool,
  image: PropTypes.number,
  ownStars: PropTypes.number,
};

export default ProductBox;
