import React from 'react';
import { shallow } from 'enzyme';
import Carousel from './Carousel';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component Carousel', () => {
  it('should render left button properly', () => {
    const component = shallow(
      <Provider store={store}>
        <Carousel />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
