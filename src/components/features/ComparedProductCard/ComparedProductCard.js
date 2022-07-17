import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleCompareProduct } from '../../../redux/productsRedux';
import { removeFromCompare } from '../../../redux/comparedProductsRedux';
import styles from './ComparedProductCard.module.scss';

const ComparedProductCard = ({ id, image }) => {
  const dispatch = useDispatch();

  const removeCompare = e => {
    e.preventDefault();
    dispatch(toggleCompareProduct(id));
    dispatch(removeFromCompare(id));
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={`${process.env.PUBLIC_URL}/images/image${image}.png`}
        alt='product'
      />
      <div className={styles.buttons}>
        <Button variant='outline' onClick={removeCompare}>
          <FontAwesomeIcon icon={faWindowClose} />
        </Button>
      </div>
    </div>
  );
};

ComparedProductCard.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  image: PropTypes.node,
};

export default ComparedProductCard;
