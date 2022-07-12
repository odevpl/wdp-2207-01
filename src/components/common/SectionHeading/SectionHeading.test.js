import React from 'react';
import { shallow } from 'enzyme';
import SectionHeading from './SectionHeading';

describe('Component SectionHeading', () => {
  it('should render properly', () => {
    const component = shallow(<SectionHeading />);
    expect(component).toBeTruthy();
  });
  it('should display with a correct text', () => {
    const component = shallow(<SectionHeading text={'test'} />);
    expect(component.text()).toBe('test');
  });
});
