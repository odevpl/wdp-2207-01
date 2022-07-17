import React from 'react';
import { shallow } from 'enzyme';
import store from '../../../redux/store';
import { Provider } from 'react-redux';
import FurnitureGallery from './FurnitureGallery';

describe('Component FurnitureGallery', () => {
  it('should render properly', () => {
    const component = shallow(
      <Provider store={store}>
        <FurnitureGallery />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
