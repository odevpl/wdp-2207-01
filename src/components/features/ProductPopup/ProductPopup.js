import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductPopup.module.scss';
import StarRating from '../StarRating/StarRating';

const ProductPopup = props => {
  return (
    <div className={styles.popup_Box}>
      <div className={styles.box}>
        <div className='row'>
          <div className='col-6'>
            <div className={styles.productImage}>
              <img
                className={styles.image}
                src={`${process.env.PUBLIC_URL}` + props.image}
                alt='ProductImage'
              />
            </div>
          </div>
          <div className='col-6'>
            <div className={styles.content}>
              <h5>{props.name}</h5>
              <div className={styles.stars}>
                <StarRating
                  id={props.id}
                  ownStars={props.ownStars}
                  stars={props.stars}
                />
              </div>
            </div>
            <div className={styles.price}>
              $ {Number.parseFloat(props.price).toFixed(2)}
            </div>
          </div>
        </div>
        <span className={styles.close_icon} onClick={props.handleClose}>
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
