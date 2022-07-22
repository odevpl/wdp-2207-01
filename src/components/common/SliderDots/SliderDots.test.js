import React from 'react';
import { shallow } from 'enzyme';
import SliderDots from './SliderDots';

describe('Component SliderDots', () => {
  it('should render properly', () => {
    const component = shallow(<SliderDots />);
    expect(component).toBeTruthy();
  });
  it('should render correct number of dots', () => {
    const component = shallow(<SliderDots pagesNumber={3} />);
    expect(component.find('li')).toHaveLength(3);
  });
});
