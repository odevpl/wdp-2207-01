import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';
import StarRating from '../StarRating/StarRating';

const ProductPopup = ({ image, name, id, ownStars, stars, price, handleClose }) => {
  return (
    <div className={styles.popup_Box}>
      <div className={styles.box}>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.productImage}>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}` + image}
                alt='ProductImage'
              />
            </div>
          </div>
          <div className='col-6'>
            <div className={styles.content}>
              <h5>{name}</h5>
              <div className={styles.stars}>
                <StarRating id={id} ownStars={ownStars} stars={stars} />
              </div>
            </div>
            <div className={styles.price}>$ {Number.parseFloat(price).toFixed(2)}</div>
          </div>
        </div>
        <span className={styles.close_icon} onClick={handleClose}>
          x
        </span>
      </div>
    </div>
  );
};

ProductPopup.propTypes = {
  image: PropTypes.string,
  handleClose: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  ownStars: PropTypes.number,
  stars: PropTypes.number,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default ProductPopup;
