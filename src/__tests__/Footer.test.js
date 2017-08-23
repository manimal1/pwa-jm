import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../components/Footer';

describe('Footer component', () => {
  const component = shallow(
    <Footer />
  );

  it('should have one logo', () => {
    expect(component.find('.footer-logo').exists()).toBe(true);
  });

  it('should have two links', () => {
    expect(component.find('a').length).toBe(2);
  });
});