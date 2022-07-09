import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { getCountOfCompared } from '../../../redux/comparedProductsRedux';

import styles from './ProductComparator.module.scss';

const ProductComparator = () => {
  const comparedProductsCount = useSelector(state => getCountOfCompared(state));

  return (
    <div className={clsx(styles.root, comparedProductsCount < 2 && styles.hidden)}>
      <div className='container'>Compare products</div>
    </div>
  );
};

ProductComparator.propTypes = {
  children: PropTypes.node,
};

export default ProductComparator;
