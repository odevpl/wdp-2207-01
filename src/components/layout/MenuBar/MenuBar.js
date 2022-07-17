import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './MenuBar.module.scss';

const MenuBar = ({ children }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className='row align-items-center'>
        <input id='dropdown' type='checkbox'></input>
        <div className={styles.searchLayout}>
          <ProductSearch />
          <label className={styles.dropdownButton} htmlFor='dropdown'>
            <FontAwesomeIcon icon={faBars} />
          </label>
        </div>
        <div className={'col-auto ' + styles.menu}>
          <ul>
            <li>
              {/* <a href='#' className={styles.active}>
                Home
              </a> */}
              <Link to={'/'} className={styles.active}>
                Home
              </Link>
            </li>
            <li>
              {/* <a href='#'>Furniture</a> */}
              <Link to={'/shop/furniture'}>Furniture</Link>
            </li>
            <li>
              <Link to={'/shop/chair'}>Chair</Link>
            </li>
            <li>
              <Link to={'/shop/table'}>Table</Link>
            </li>
            <li>
              <Link to={'/shop/sofa'}>Sofa</Link>
            </li>
            <li>
              <Link to={'/shop/bedroom'}>Bedroom</Link>
            </li>
            <li>
              <Link to={'/blog'}>Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
