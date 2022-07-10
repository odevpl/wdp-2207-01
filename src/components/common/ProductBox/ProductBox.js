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
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
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

const ProductBox = ({ name, price, promo, stars, id, isFavorite, isCompared }) => {
  const dispatch = useDispatch();
  const productId = id;

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(productId));
  };
  const count = useSelector(state => getCountOfCompared(state));

  const handleCompare = e => {
    e.preventDefault();
    if (isCompared) {
      dispatch(toggleCompareProduct(productId));
      dispatch(removeFromCompare(productId));
    } else {
      if (count < 4) {
        dispatch(addToCompare(productId));
        dispatch(toggleCompareProduct(productId));
      } else {
        alert('Max number of compared products is 4'); // change to final alert modal
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        {promo && <div className={styles.sale}>{promo}</div>}
        <img
          className={styles.image}
          src={`https://source.unsplash.com/random/${Math.floor(
            Math.random() * 500 + 500
          )}x${Math.floor(Math.random() * 500 + 500)}?random=${Math.random()}`}
          alt='product'
        />
        <div className={styles.buttons}>
          <Button variant='small'>Quick View</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
      </div>
      <div className={styles.content}>
        <h5>{name}</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='#'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
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
        <div>
          <Button className={styles.price} noHover variant='small'>
            $ {price}
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
  promo: PropTypes.string,
  stars: PropTypes.number,
  id: PropTypes.string,
  isFavorite: PropTypes.bool,
  isCompared: PropTypes.bool,
};

export default ProductBox;
