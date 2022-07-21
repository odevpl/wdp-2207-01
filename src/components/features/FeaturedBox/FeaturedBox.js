import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './FeaturedBox.module.scss';
import Button from '../../common/Button/Button';
import { getAll } from '../../../redux/featuredRedux';
import { getProductById } from '../../../redux/productsRedux';
import clsx from 'clsx';
import Swipeable from '../../common/Swipeable/Swipeable';
import CarouselButton from '../../common/CarouselButton/CarouselButton';

const FeaturedBox = () => {
  const featuredProductIds = useSelector(state => getAll(state));
  const featuredPages = featuredProductIds.length;
  const [currentFeatured, setCurrentFeatured] = useState(0);
  const currentProduct = useSelector(state =>
    getProductById(state, featuredProductIds[currentFeatured])
  );
  const [autoplayStatus, setAutoplayStatus] = useState(true);
  const [featuredFade, setFeaturedFade] = useState(false);

  const promoImageIdxs = [1, 2];
  const promoPages = promoImageIdxs.length;
  const lastPromoPageIdx = promoImageIdxs.length - 1;
  const [promoFade, setPromoFade] = useState(false);
  const [currentPromoPage, setCurrentPromoPage] = useState(0);

  const changeSlide = useCallback(() => {
    const lastItemIndex = featuredPages - 1;
    if (autoplayStatus) {
      setFeaturedFade(true);
      setTimeout(() => {
        setFeaturedFade(false);
      }, 1000);
      setTimeout(() => {
        setCurrentFeatured(currentProduct => {
          if (currentProduct === lastItemIndex) {
            setCurrentFeatured(0);
          }
          return (currentProduct += 1);
        });
      }, 500);
    }
  }, [autoplayStatus, featuredPages]);

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide();
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  }, [autoplayStatus, changeSlide]);

  const manageAutoplay = () => {
    setAutoplayStatus(false);
    setTimeout(() => setAutoplayStatus(true), 10000);
  };

  const manageFeaturedFade = () => {
    setFeaturedFade(true);
    setTimeout(() => {
      setFeaturedFade(false);
    }, 1000);
  };

  const managePromoFade = () => {
    setPromoFade(true);
    setTimeout(() => {
      setPromoFade(false);
    }, 1000);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4 ${styles.featuredProductBox}`}>
            <div className={styles.heading}>
              <h5>Hot deals</h5>
              <ul className={styles.dots}>
                {featuredProductIds.map(elem => (
                  <li key={elem}>
                    <button
                      type='button'
                      onClick={() => {
                        manageAutoplay();
                        manageFeaturedFade();
                        setTimeout(() => {
                          setCurrentFeatured(featuredProductIds.indexOf(elem));
                        }, 500);
                      }}
                      className={clsx(
                        currentFeatured === featuredProductIds.indexOf(elem) &&
                          styles.active
                      )}
                    ></button>
                  </li>
                ))}
              </ul>
            </div>
            <div
              onTouchStart={() => manageAutoplay()}
              className={featuredFade ? styles.fade : ''}
            >
              <Swipeable
                page={currentFeatured}
                action={setCurrentFeatured}
                pagesNumber={featuredPages}
              >
                <ProductBox {...currentProduct} isFeatured />
              </Swipeable>
            </div>
          </div>

          <div className={clsx('col-8', styles.carouselLayout)}>
            <Swipeable
              page={currentPromoPage}
              action={setCurrentPromoPage}
              pagesNumber={promoPages}
            >
              <div className={clsx(styles.image, promoFade && styles.fade)}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/featureBox${promoImageIdxs[currentPromoPage]}.jpg`}
                  alt='sofa'
                />
              </div>
              <div className={clsx(styles.promoBanner, promoFade && styles.fade)}>
                <h2>
                  <span>Indoor</span> Furniture
                </h2>
                <h3>Save up to 50% of all furniture</h3>
                <Button className={`btn-light rounded ${styles.bannerButton}`}>
                  Shop now
                </Button>
              </div>
            </Swipeable>
            <div className={styles.buttons}>
              <CarouselButton
                action={setCurrentPromoPage}
                parentFade={promoFade}
                handleParentFade={managePromoFade}
                lastPageIndex={lastPromoPageIdx}
                currentPage={currentPromoPage}
                infinite
                direction='left'
              />
              <CarouselButton
                direction='right'
                action={setCurrentPromoPage}
                parentFade={promoFade}
                handleParentFade={managePromoFade}
                lastPageIndex={lastPromoPageIdx}
                infinite
                currentPage={currentPromoPage}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
