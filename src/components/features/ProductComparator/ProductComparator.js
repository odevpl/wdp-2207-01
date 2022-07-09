import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductComparator.module.scss';

const ProductComparator = () => (
  <div className={styles.root}>
    <div className='container'>Compare products</div>
  </div>
);

ProductComparator.propTypes = {
  children: PropTypes.node,
};

export default ProductComparator;
