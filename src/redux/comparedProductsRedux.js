/* selectors */
export const getAll = ({ comparedProducts }) => comparedProducts.products;
export const getCount = ({ comparedProducts }) => comparedProducts.products.length;

/* action name creator */
const reducerName = 'comparedProducts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_COMPARE = createActionName('ADD_TO_COMPARE');

/* action creators */
export const addToCompare = payload => ({ type: ADD_TO_COMPARE, payload });

/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_TO_COMPARE: {
      return {
        ...statePart,
        products: [...statePart.products, action.payload],
      };
    }
    default:
      return statePart;
  }
}
