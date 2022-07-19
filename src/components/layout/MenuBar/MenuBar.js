import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import styles from './MenuBar.module.scss';

const MenuBar = () => (
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
              <NavLink
                to='/'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop/furniture'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Furniture
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop/chair'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Chair
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop/table'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Table
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop/sofa'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Sofa
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/shop/bedroom'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Bedroom
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/blog'
                className={({ isActive }) => (isActive ? styles.active : undefined)}
              >
                Blog
              </NavLink>
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
