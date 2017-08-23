import React from 'react';
import { shallow } from 'enzyme';
import Hero from '../components/Hero';

const heroProps = {
    nav: [ 
      {
        text: 'My Work',
        link: 'work-section',
        icon: 'code-fork'
      },
      {
        text: 'Contact',
        link: 'contact-section',
        icon: 'envelope-o'
      }
    ],
    heading: 'Hi, I\'m Jeremiah. ',
    revealText: 'I build modern Web Apps!',
    buttonText: 'Yes, I\'m available for hire'
  };

describe('Hero component', () => {
  const component = shallow(
    <Hero info={heroProps} />
  );

  it('should have a hero class', () => {
    expect(component.find('.hero').exists()).toBe(true);
  });

  it('should have one logo at top', () => {
    expect(component.find('.hero-logo-top').exists()).toBe(true);
  })

  it('should have two nav links', () => {
    expect(component.find('.hero-nav a').length).toEqual(2);
  });

  it('should have one button', () => {
    expect(component.find('button').length).toEqual(1);
  });
});