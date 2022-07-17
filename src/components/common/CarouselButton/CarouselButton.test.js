import React from 'react';
import { shallow } from 'enzyme';
import CarouselButton from './CarouselButton';
import { text } from '@fortawesome/fontawesome-svg-core';

describe('Component CarouselButton', () => {
  it('should render left button properly', () => {
    const component = shallow(<CarouselButton direction='left' />);
    expect(component).toBeTruthy();
  });
  it('should have correct text content', () => {
    const component = shallow(<CarouselButton direction='left' />);
    expect(component.text().includes('<')).toBeTruthy();
  });
  it('should render right button properly', () => {
    const component = shallow(<CarouselButton direction='right' />);
    expect(component).toBeTruthy();
  });
  it('should have correct text content', () => {
    const component = shallow(<CarouselButton direction='right' />);
    expect(component.text().includes('>')).toBeTruthy();
  });
});
