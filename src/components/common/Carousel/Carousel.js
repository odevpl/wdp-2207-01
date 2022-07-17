import React, { useEffect, useState } from 'react';
import CarouselButton from '../CarouselButton/CarouselButton';
import styles from './Carousel.module.scss';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProductsGroup } from '../../../redux/productsRedux';
import Swipeable from '../Swipeable/Swipeable';
import clsx from 'clsx';

const Carousel = ({ products, action, parentFade, handleParentFade }) => {
  const productsToDisplay = useSelector(state => getProductsGroup(state, products));
  const productsPerPage = 7;
  const pagesNumber = Math.ceil(productsToDisplay.length / productsPerPage);
  const [currentPage, setCurrentPage] = useState(0);

  const [fade, setFade] = useState(false);

  const handleFade = () => {
    setFade(true);
    setTimeout(() => {
      setFade(false);
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(0);
  }, [products]);

  return (
    <div className='d-flex flex-row justify-content-between'>
      <CarouselButton
        parentFade={fade}
        handleParentFade={handleFade}
        action={setCurrentPage}
        currentPage={currentPage}
        lastPageIndex={pagesNumber - 1}
        direction={'left'}
      />
      <Swipeable action={setCurrentPage} page={currentPage} pagesNumber={pagesNumber}>
        <div className={clsx(styles.images, fade && styles.fade)}>
          {productsToDisplay
            .slice(productsPerPage * currentPage, productsPerPage * (currentPage + 1))
            .map(elem => (
              <button
                onClick={() => {
                  handleParentFade();
                  setTimeout(() => {
                    action(elem.id);
                  }, 250);
                }}
                disabled={parentFade}
                className={styles.imageContainer}
                key={elem.id}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/image${elem.image}.png`}
                  alt='carousel-preview'
                />
              </button>
            ))}
        </div>
      </Swipeable>
      <CarouselButton
        parentFade={fade}
        handleParentFade={handleFade}
        action={setCurrentPage}
        currentPage={currentPage}
        lastPageIndex={pagesNumber - 1}
        direction={'right'}
      />
    </div>
  );
};

Carousel.propTypes = {
  products: PropTypes.arrayOf(PropTypes.string),
  action: PropTypes.func,
  parentFade: PropTypes.bool,
  handleParentFade: PropTypes.func,
};

export default Carousel;
