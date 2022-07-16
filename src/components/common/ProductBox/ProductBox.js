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
import {
  useDispatch,
  // useSelector,
} from 'react-redux';
import {
  toggleFavoriteProduct,
  toggleCompareProduct,
} from '../../../redux/productsRedux';
// import {
//   addToCompare,
//   removeFromCompare,
//   getCountOfCompared,
// } from '../../../redux/comparedProductsRedux';

import { useRecoilState, useRecoilValue } from 'recoil';
import {
  comparedProductsState,
  getCountOfCompared,
} from '../../../recoilStore/comparedProductsState';

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
}) => {
  const dispatch = useDispatch();
  const productId = id;

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(productId));
  };

  const [comparedProducts, setComparedProducts] = useRecoilState(comparedProductsState);

  // const count = useSelector(state => getCountOfCompared(state));
  const count = useRecoilValue(getCountOfCompared);

  const payload = {
    id: id,
    image: image,
  };

  const handleCompare = e => {
    e.preventDefault();
    if (isCompared) {
      dispatch(toggleCompareProduct(productId));
      // dispatch(removeFromCompare(productId));
      setComparedProducts({
        ...comparedProducts,
        products: comparedProducts.products.filter(
          product => product.id !== payload.id
        ),
      });
    } else {
      if (count < 4) {
        // dispatch(addToCompare(productId));
        setComparedProducts({
          ...comparedProducts,
          products: [...comparedProducts.products, payload],
        });
        dispatch(toggleCompareProduct(productId));
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
};

export default ProductBox;
