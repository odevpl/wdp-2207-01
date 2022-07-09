import React from 'react';
import PropTypes from 'prop-types';

import styles from './ComparedProductCard.module.scss';

const ComparedProductCard = props => {
  return <div className={styles.root}>{props.id}</div>;
};

ComparedProductCard.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
};

export default ComparedProductCard;
