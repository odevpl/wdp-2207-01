import React, { useEffect, useState } from 'react';
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
import { useSelector } from 'react-redux';
import { getProductById } from '../../../redux/productsRedux';
import { getById } from '../../../redux/galleryRedux';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import {
  toggleFavoriteProduct,
  toggleCompareProduct,
} from '../../../redux/productsRedux';
import {
  removeFromCompare,
  addToCompare,
  getCountOfCompared,
} from '../../../redux/comparedProductsRedux';

const FurnitureGallery = () => {
  const galleryNavHeadings = ['Featured', 'Top Seller', 'Sale off', 'Top rated'];
  const [currentPageId, setCurrentPageId] = useState(1);
  const [{ productIds }] = useSelector(state => getById(state, currentPageId));
  const [currentProduct, setCurrentProduct] = useState(productIds[0]);
  const {
    id,
    image,
    name,
    price,
    oldPrice,
    isFavorite,
    isCompared,
  } = useSelector(state => getProductById(state, currentProduct));
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentProduct(productIds[0]);
  }, [productIds]);

  const [fade, setFade] = useState(false);

  const handleFade = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 500);
  };

  const handleClick = e => {
    e.preventDefault();
    dispatch(toggleFavoriteProduct(id));
  };
  const count = useSelector(state => getCountOfCompared(state));

  const handleCompare = e => {
    e.preventDefault();
    if (isCompared) {
      dispatch(toggleCompareProduct(id));
      dispatch(removeFromCompare(id));
    } else {
      if (count < 4) {
        dispatch(addToCompare(id));
        dispatch(toggleCompareProduct(id));
      } else {
        alert('Max number of compared products is 4'); // change to final alert modal
      }
    }
  };

  return (
    <div className={styles.root}>
      <div className='container row m-auto'>
        <div className='col-12 col-md-9 col-lg-6 px-0 pr-md-3'>
          <SectionHeading text={'Furniture gallery'} />
          <div>
            <div className={styles.galleryNav}>
              {galleryNavHeadings.map((heading, idx) => {
                return (
                  <button
                    type='button'
                    onClick={() => {
                      handleFade();
                      setTimeout(() => {
                        setCurrentPageId(idx);
                      }, 250);
                    }}
                    disabled={fade}
                    key={idx}
                    className={clsx(currentPageId === idx && styles.active)}
                  >
                    {heading}
                  </button>
                );
              })}
            </div>
            <div className={clsx(styles.galleryContent, fade && styles.fade)}>
              <img
                src={`${process.env.PUBLIC_URL}/images/image${image}.png`}
                alt='chair'
              />
              <div className={styles.buttonLayout}>
                <Button
                  onClick={handleClick}
                  active={isFavorite}
                  variant='outline'
                  extraInfo={'Add to favorites'}
                >
                  <FontAwesomeIcon icon={faHeart} />
                </Button>
                <Button
                  onClick={handleCompare}
                  active={isCompared}
                  variant='outline'
                  extraInfo={'Compare'}
                >
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
                  <p>{price}.00$</p>
                  {oldPrice && <p>{oldPrice}.00$</p>}
                </div>
                <h5>{name}</h5>
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
            <div className={clsx('col-12 px-0', fade && styles.fade)}>
              <Carousel
                products={productIds}
                action={setCurrentProduct}
                handleParentFade={handleFade}
                parentFade={fade}
              />
            </div>
          </div>
        </div>
        <div className={`col-3 col-lg-6 ${styles.promoSection}`}>
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
