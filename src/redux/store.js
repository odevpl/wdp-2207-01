// import { combineReducers, createStore } from 'redux';
// import initialState from './initialState';

// import cartReducer from './cartRedux';
// import categoriesReducer from './categoriesRedux';
// import productsReducer from './productsRedux';
// import comparedProductsReducer from './comparedProductsRedux';
// import feedbackReducer from './feedbackRedux';

// // define reducers
// const reducers = {
//   cart: cartReducer,
//   categories: categoriesReducer,
//   products: productsReducer,
//   comparedProducts: comparedProductsReducer,
//   feedback: feedbackReducer,
// };

// // add blank reducers for initial state properties without reducers
// Object.keys(initialState).forEach(item => {
//   if (typeof reducers[item] == 'undefined') {
//     reducers[item] = (statePart = null) => statePart;
//   }
// });

// const combinedReducers = combineReducers(reducers);

// // create store
// const store = createStore(
//   combinedReducers,
//   initialState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsRedux';

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});
