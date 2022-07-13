import React from 'react';
import { shallow } from 'enzyme';
import FeedbackSection from './FeedbackSection';
import store from '../../../redux/store';
import { Provider } from 'react-redux';

describe('Component FeedbackSection', () => {
  it('should render properly', () => {
    const component = shallow(
      <Provider store={store}>
        <FeedbackSection />
      </Provider>
    );
    expect(component).toBeTruthy();
  });
});
