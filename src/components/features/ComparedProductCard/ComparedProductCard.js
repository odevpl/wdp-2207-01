import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleCompareProduct } from '../../../redux/productsRedux';
// import { removeFromCompare } from '../../../redux/comparedProductsRedux';
import { useRecoilState } from 'recoil';
import { comparedProductsState } from '../../../recoilStore/comparedProductsState';
import styles from './ComparedProductCard.module.scss';

const ComparedProductCard = ({ id, image }) => {
  const dispatch = useDispatch();

  const [comparedProducts, setComparedProducts] = useRecoilState(comparedProductsState);

  const payload = {
    id: id,
    image: image,
  };

  const removeCompare = e => {
    e.preventDefault();
    dispatch(toggleCompareProduct(id));
    // dispatch(removeFromCompare(props.id));
    setComparedProducts({
      ...comparedProducts,
      products: comparedProducts.products.filter(product => product.id !== payload.id),
    });
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
  image: PropTypes.number,
};

export default ComparedProductCard;
