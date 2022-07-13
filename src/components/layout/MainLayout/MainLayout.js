import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BrandsBox from '../../features/BrandsBox/BrandsBox';
import FeedbackSection from '../../features/FeedbackSection/FeedbackSection';

const MainLayout = ({ children }) => (
  <div>
    <Header />
    {children}
    <BrandsBox />
    <FeedbackSection />
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
