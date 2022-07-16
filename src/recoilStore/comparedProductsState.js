import { atom, selector } from 'recoil';

export const comparedProductsState = atom({
  key: 'comparedProductsState',
  default: {
    products: [],
  },
});

export const getCountOfCompared = selector({
  key: 'getCountOfCompared',
  get: ({ get }) => {
    const comparedProducts = get(comparedProductsState);

    return comparedProducts.products.length;
  },
});
