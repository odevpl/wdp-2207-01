import React from 'react';
import { shallow } from 'enzyme';
import ProductComparator from './ProductComparator';

describe('Component FeatureBoxes', () => {
  it('should render without crashing', () => {
    const component = shallow(<ProductComparator />);
    expect(component).toBeTruthy();
  });
});
