import React from 'react';
import SectionHeading from '../../common/SectionHeading/SectionHeading';
import styles from './FurnitureGallery.module.scss';
import Button from '../../common/Button/Button';
import Carousel from '../../common/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import {
  faExchangeAlt,
  faShoppingBasket,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const FurnitureGallery = () => {
  return (
    <div className={styles.root}>
      <div className='container row m-auto'>
        <div className='col-6 pl-0'>
          <SectionHeading text={'Furniture gallery'} />
          <div>
            <div className={styles.galleryNav}>
              <a href='#'>Featured</a>
              <a className={styles.active} href='#'>
                Top Seller
              </a>
              <a href='#'>Sale off</a>
              <a href='#'>Top Rated</a>
            </div>
            <div className={styles.galleryContent}>
              <img src={`${process.env.PUBLIC_URL}/images/gallery1.png`} alt='chair' />
              <div className={styles.buttonLayout}>
                <Button variant='outline' extraInfo={'Add to favorites'}>
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button variant='outline' extraInfo={'Compare'}>
                  <FontAwesomeIcon icon={faExchangeAlt} />
                </Button>
                <Button variant='outline' extraInfo={'See more'}>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button variant='outline' extraInfo={'Add to cart'}>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                </Button>
              </div>
              <div className={styles.productData}>
                <div className={styles.promotionInfo}>
                  <p>$120.00</p>
                  <p>$160.00</p>
                </div>
                <h5>Aenean Ru Bristique</h5>
                <div className={styles.stars}>
                  {[1, 2, 3, 4, 5].map(i => (
                    <a key={i} href='#'>
                      {i <= 2 ? (
                        <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                      ) : (
                        <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <Carousel />
            <div></div>
          </div>
        </div>
        <div className={`col-6 ${styles.promoSection}`}>
          <div className={styles.promoSectionContent}>
            <h2>
              <span>From </span>$50.80
            </h2>
            <h2>Bedroom Bed</h2>
            <Button variant='small' className={`rounded ${styles.button}`}>
              Shop now
            </Button>
          </div>
          <div className={styles.staticImageBox}>
            <img
              className={styles.image}
              src={`${process.env.PUBLIC_URL}/images/furniture_static.png`}
              alt='bed'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FurnitureGallery;
