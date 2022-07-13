import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleCompareProduct } from '../../../redux/productsRedux';
import { removeFromCompare } from '../../../redux/comparedProductsRedux';
import styles from './ComparedProductCard.module.scss';

const ComparedProductCard = props => {
  const dispatch = useDispatch();

  const removeCompare = e => {
    e.preventDefault();
    dispatch(toggleCompareProduct(props.id));
    dispatch(removeFromCompare(props.id));
  };

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={`https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100 + 100
        )}x${Math.floor(Math.random() * 100 + 100)}?random=${Math.random()}`}
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
};

export default ComparedProductCard;
