import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BrandsBox from '../../features/BrandsBox/BrandsBox';
import FeedbackSection from '../../features/FeedbackSection/FeedbackSection';

export const WidthContext = createContext(null);

const MainLayout = ({ children }) => {
  const getCurrentWidth = () => {
    return window.innerWidth;
  };

  const [width, setWidth] = useState(getCurrentWidth());

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(getCurrentWidth));

    return () => {
      window.removeEventListener('resize', () => setWidth(getCurrentWidth));
    };
  }, [setWidth]);

  return (
    <div>
      <WidthContext.Provider value={width}>
        <Header />
        {children}
        <BrandsBox />
        <FeedbackSection />
        <Footer />
      </WidthContext.Provider>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
