import React, { useState, useContext, useEffect } from 'react';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Swipeable from '../../common/Swipeable/Swipeable';
import { WidthContext } from '../../layout/MainLayout/MainLayout';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew } from '../../../redux/productsRedux.js';
import { useSelector } from 'react-redux';

const NewFurniture = () => {
  const [activePage, setActivePage] = useState(0);
  const [activeCategory, setActiveCategory] = useState('bed');
  const [isFaded, setIsFaded] = useState(false);
  const categories = useSelector(state => getAll(state));
  const products = useSelector(state => getNew(state));
  const windowWidth = useContext(WidthContext);

  useEffect(() => {
    detectScreenWidth(windowWidth);
  }, [windowWidth]);

  const detectScreenWidth = width => {
    width <= 576
      ? setProductsPerPage(1)
      : width <= 768
      ? setProductsPerPage(2)
      : setProductsPerPage(8);
  };

  const [productsPerPage, setProductsPerPage] = useState(8);

  const categoryProducts = products.filter(item => item.category === activeCategory);
  const pagesCount = Math.ceil(categoryProducts.length / productsPerPage);

  const dots = [];
  for (let i = 0; i < pagesCount; i++) {
    dots.push(
      <li key={i}>
        <a
          onClick={() => {
            setIsFaded(true);
            setTimeout(() => setIsFaded(false), 1000);
            setTimeout(() => setActivePage(i), 500);
          }}
          className={`${i === activePage ? styles.active : ''} ${styles.dotButton} ${
            isFaded ? styles.disabled : ''
          }`}
        >
          page {i}
        </a>
      </li>
    );
  }

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters flex-column flex-wrap justify-space-between flex-md-row align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>New furniture</h3>
            </div>
            <div className={'col ' + styles.dropdownLayout}>
              <div className={'col ' + styles.menu}>
                <input id='categoryDropdown' type='checkbox' />
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={`${
                          item.id === activeCategory ? styles.active : ''
                        } ${isFaded ? styles.disabled : ''}`}
                        onClick={() => {
                          setIsFaded(true);
                          setTimeout(() => setIsFaded(false), 1000);
                          setTimeout(() => setActiveCategory(item.id), 500);
                        }}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
                <label className={styles.dropdownButton} htmlFor='categoryDropdown'>
                  <FontAwesomeIcon icon={faBars} />
                </label>
              </div>
            </div>
          </div>
        </div>
        <Swipeable action={setActivePage} page={activePage} pagesNumber={pagesCount}>
          <div className={`row ${isFaded ? styles.faded : ''}`}>
            {categoryProducts
              .slice(activePage * productsPerPage, (activePage + 1) * productsPerPage)
              .map(item => (
                <div key={item.id} className='col-3'>
                  <ProductBox {...item} />
                </div>
              ))}
          </div>
        </Swipeable>
      </div>
    </div>
  );
};

export default NewFurniture;
