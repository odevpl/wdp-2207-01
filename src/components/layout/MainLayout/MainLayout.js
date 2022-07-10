import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BrandsBox from '../../features/BrandsBox/BrandsBox';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <BrandsBox />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
