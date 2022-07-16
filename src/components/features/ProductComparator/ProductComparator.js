import React from 'react';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import {
  getCountOfCompared,
  getAllCompared,
} from '../../../redux/comparedProductsRedux';
import Button from '../../common/Button/Button';
import ComparedProductCard from '../../features/ComparedProductCard/ComparedProductCard';

import styles from './ProductComparator.module.scss';

const ProductComparator = () => {
  const comparedProductsCount = useSelector(state => getCountOfCompared(state));

  const comparedProducts = useSelector(state => getAllCompared(state));

  return (
    <div className={clsx(styles.root, comparedProductsCount < 2 && styles.hidden)}>
      <div className={styles.container}>
        <div className={styles.comparedCards}>
          {comparedProducts.map(product => (
            <ComparedProductCard
              key={product.id}
              id={product.id}
              image={product.image}
            />
          ))}
        </div>
        <div className={styles.buttonWrapper}>
          <Button variant='main'>Compare</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductComparator;
