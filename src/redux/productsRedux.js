/* selectors */
export const getAll = ({ products }) => products;
export const getCount = ({ products }) => products.length;
export const getProductById = ({ products }, id) =>
  products.find(product => product.id === id);
export const getProductsGroup = ({ products }, idArr) =>
  products.filter(product => idArr.indexOf(product.id) !== -1);

/* actions */
const createActionName = actionName => `app/products/${actionName}`;
const TOGGLE_FAVORITE_PRODUCT = createActionName('TOGGLE_FAVORITE_PRODUCT');
const TOGGLE_COMPARE_PRODUCT = createActionName('TOGGLE_COMPARE_PRODUCT');
const UPDATE_RATING = createActionName('UPDATE_RATING');
const DELETE_RATING = createActionName('DELETE_RATING');

/* action creators */
export const getNew = ({ products }) =>
  products.filter(item => item.newFurniture === true);
export const toggleFavoriteProduct = payload => ({
  type: TOGGLE_FAVORITE_PRODUCT,
  payload,
});

export const toggleCompareProduct = payload => ({
  type: TOGGLE_COMPARE_PRODUCT,
  payload,
});
export const updateRating = payload => ({
  type: UPDATE_RATING,
  payload,
});
export const deleteRating = payload => ({
  type: DELETE_RATING,
  payload,
});

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_FAVORITE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      );
    case TOGGLE_COMPARE_PRODUCT:
      return statePart.map(product =>
        product.id === action.payload
          ? { ...product, isCompared: !product.isCompared }
          : product
      );
    case UPDATE_RATING: {
      return statePart.map(product =>
        product.id === action.payload.productId
          ? { ...product, ownStars: action.payload.ownStars }
          : product
      );
    }
    case DELETE_RATING: {
      return statePart.map(product =>
        product.id === action.payload.productId
          ? { ...product, ownStars: null }
          : product
      );
    }
    default:
      return statePart;
  }
}
