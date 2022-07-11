import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer component', () => {
  it('should render properly', () => {
    const component = shallow(<Timer />);
    expect(component).toBeTruthy();
  });
});
