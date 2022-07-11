import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotedBox from '../../features/PromotedBox/PromotedBox';
import FeaturedBox from '../../features/FeaturedBox/FeaturedBox';

const Homepage = () => (
  <div className={styles.root}>
    <FeaturedBox />
    <FeatureBoxes />
    <PromotedBox />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
