import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurniture';
import PromotedBox from '../../features/PromotedBox/PromotedBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <PromotedBox />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
