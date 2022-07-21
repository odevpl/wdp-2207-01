import React from 'react';
import { useSelector } from 'react-redux';
import getAll from '../../../redux/productsRedux';
import ProductBox from '../../common/ProductBox/ProductBox';
import styles from './FeaturedBox.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCaretSquareLeft,
  faCaretSquareRight,
} from '@fortawesome/free-regular-svg-icons';

const FeaturedBox = () => {
  const exampleProduct = useSelector(state => getAll(state.products)).slice(0, 1);

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={`col-4 ${styles.featuredProductBox}`}>
            <div className={styles.heading}>
              <h5>Hot deals</h5>
              <ul className={styles.dots}>
                <li>
                  <a className={styles.active} href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
                <li>
                  <a href='#'></a>
                </li>
              </ul>
            </div>
            <div className={styles.products}>
              {exampleProduct.map((item, idx) => (
                <ProductBox key={idx} {...item} isFeatured />
              ))}
            </div>
          </div>
          <div className={`col-12 col-lg-8 ${styles.carouselLayout}`}>
            <div className={styles.image}>
              <img
                src={`${process.env.PUBLIC_URL}/images/featureBox_sofa.jpg`}
                alt='sofa'
              />
            </div>
            <div className={styles.promoBanner}>
              <h2>
                <span>Indoor</span> Furniture
              </h2>
              <h3>Save up to 50% of all furniture</h3>
              <Button className={`btn-light rounded ${styles.bannerButton}`}>
                Shop now
              </Button>
            </div>
            <div className={styles.buttons}>
              <Button variant='small'>
                <FontAwesomeIcon icon={faCaretSquareLeft}></FontAwesomeIcon>
              </Button>
              <Button variant='small'>
                <FontAwesomeIcon icon={faCaretSquareRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedBox;
