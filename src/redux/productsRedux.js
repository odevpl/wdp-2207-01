// /* selectors */
// export const getAll = ({ products }) => products;
// export const getCount = ({ products }) => products.length;

// /* actions */
// const createActionName = actionName => `app/products/${actionName}`;
// const TOGGLE_FAVORITE_PRODUCT = createActionName('TOGGLE_FAVORITE_PRODUCT');
// const TOGGLE_COMPARE_PRODUCT = createActionName('TOGGLE_COMPARE_PRODUCT');

// /* action creators */
// export const getNew = ({ products }) =>
//   products.filter(item => item.newFurniture === true);
// export const toggleFavoriteProduct = payload => ({
//   type: TOGGLE_FAVORITE_PRODUCT,
//   payload,
// });
// export const toggleCompareProduct = payload => ({
//   type: TOGGLE_COMPARE_PRODUCT,
//   payload,
// });

// /* reducer */
// export default function reducer(statePart = [], action = {}) {
//   switch (action.type) {
//     case TOGGLE_FAVORITE_PRODUCT:
//       return statePart.map(product =>
//         product.id === action.payload
//           ? { ...product, isFavorite: !product.isFavorite }
//           : product
//       );
//     case TOGGLE_COMPARE_PRODUCT:
//       return statePart.map(product =>
//         product.id === action.payload
//           ? { ...product, isCompared: !product.isCompared }
//           : product
//       );
//     default:
//       return statePart;
//   }
// }

import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 'aenean-ru-bristique-1',
    name: 'Aenean Ru Bristique 1',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: true,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-2',
    name: 'Aenean Ru Bristique 2',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: true,
  },
  {
    id: 'aenean-ru-bristique-3',
    name: 'Aenean Ru Bristique 3',
    category: 'bed',
    price: 30,
    oldPrice: 40,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-4',
    name: 'Aenean Ru Bristique 4',
    category: 'bed',
    price: 30,
    oldPrice: 40,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-5',
    name: 'Aenean Ru Bristique 5',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: true,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-6',
    name: 'Aenean Ru Bristique 6',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-7',
    name: 'Aenean Ru Bristique 7',
    category: 'bed',
    price: 30,
    oldPrice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-8',
    name: 'Aenean Ru Bristique 8',
    category: 'bed',
    price: 30,
    oldPrice: 35,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-9',
    name: 'Aenean Ru Bristique 9',
    category: 'bed',
    price: 30,
    oldPrice: 40,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-10',
    name: 'Aenean Ru Bristique 10',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-11',
    name: 'Aenean Ru Bristique 11',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-12',
    name: 'Aenean Ru Bristique 12',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-13',
    name: 'Aenean Ru Bristique 13',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-14',
    name: 'Aenean Ru Bristique 14',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-15',
    name: 'Aenean Ru Bristique 15',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-16',
    name: 'Aenean Ru Bristique 16',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-17',
    name: 'Aenean Ru Bristique 17',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-18',
    name: 'Aenean Ru Bristique 18',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-19',
    name: 'Aenean Ru Bristique 19',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-20',
    name: 'Aenean Ru Bristique 20',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-21',
    name: 'Aenean Ru Bristique 21',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-22',
    name: 'Aenean Ru Bristique 22',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-23',
    name: 'Aenean Ru Bristique 23',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
  {
    id: 'aenean-ru-bristique-24',
    name: 'Aenean Ru Bristique 24',
    category: 'bed',
    price: 30,
    stars: 2,
    promo: 'sale',
    newFurniture: true,
    isFavorite: false,
    isCompared: false,
  },
];

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      return state.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    },
  },
});

export const { toggleFavorite } = productsSlice.actions;

export const getAllProducts = state => state.products;
export const getNewProducts = state =>
  state.products.filter(product => product.newFurniture === true);
export default productsSlice.reducer;
