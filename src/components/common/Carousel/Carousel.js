import React from 'react';
import CarouselButton from '../CarouselButton/CarouselButton';
import styles from './Carousel.module.scss';

const Carousel = () => {
  return (
    <div className='d-flex flex-row justify-content-between'>
      <CarouselButton direction={'left'} />
      <div className={styles.images}>
        {[1, 2, 3, 4, 1, 2, 3, 4].map(elem => (
          <div className={styles.imageContainer} key={elem}>
            <img
              src={`${process.env.PUBLIC_URL}/images/gallery${elem}.png`}
              alt='carousel-preview'
            />
          </div>
        ))}
      </div>
      <CarouselButton direction={'right'} />
    </div>
  );
};

export default Carousel;
