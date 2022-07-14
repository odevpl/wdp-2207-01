import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
// import { useSelector } from 'react-redux';
// import { getAll } from '../../../redux/categoriesRedux';

const ProductSearch = () => {
  // const categories = useSelector(state => getAll(state));

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul className={styles.categoryList}>
          <li>Select a category</li>
          <ul className={styles.categoryDropdown}>
            {/* {categories.map(({ id, name }, idx) => (
              <li key={idx}>
                <input name='category' id={id} type='radio'></input>
                <label htmlFor={id}>{name}</label>
              </li>
            ))} */}
          </ul>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
