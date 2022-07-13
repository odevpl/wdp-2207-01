import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromotedBox from '../../features/PromotedBox/PromotedBox';
import FurnitureGallery from '../../features/FurnitureGallery/FurnitureGallery';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <PromotedBox />
    <NewFurniture />
    <FurnitureGallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
