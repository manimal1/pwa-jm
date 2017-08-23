import React from 'react';
import { shallow } from 'enzyme';
import SectionHeader from '../components/SectionHeader';

const headerProps = {
  headerTitle: 'Title',
  headerText: 'Subtitle'
}

describe('SectionHeader component', () => {
  const component = shallow(
    <SectionHeader section={headerProps} />
  );

  it('should have a title', () => {
    expect(component.find('.section-header-title').exists()).toBe(true);
  });

  it('should render title text from props', () => {
    expect(component.find('.section-header-title').text()).toEqual('Title');
  });

  it('should have a subtitle', () => {
    expect(component.find('.section-header-subtitle').exists()).toBe(true);
  });

  it('should render subtitle text from props', () => {
    expect(component.find('.section-header-subtitle').text()).toEqual('Subtitle');
  });
});