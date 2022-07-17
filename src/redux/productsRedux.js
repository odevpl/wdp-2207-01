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
    default:
      return statePart;
  }
}
