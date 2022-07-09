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
import { useDispatch } from 'react-redux';
import { toggleFavoriteProduct } from '../../../redux/productsRedux';

const ProductBox = ({ name, price, oldPrice, promo, stars, id, isFavorite }) => {
  const dispatch = useDispatch();
  const productId = id;
  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(productId));
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
          <Button variant='outline'>
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
};

export default ProductBox;
