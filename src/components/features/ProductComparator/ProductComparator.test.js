import React from 'react';
import { shallow } from 'enzyme';
import ProductComparator from './ProductComparator';
import { Provider } from 'react-redux';
import store from '../../../redux/store';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(
      <Provider store={store}>
        <ProductComparator />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
