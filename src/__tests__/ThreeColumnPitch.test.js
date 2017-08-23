import React from 'react';
import { shallow } from 'enzyme';
import Pitch from '../components/ThreeColumnPitch';

const pitchProps = {
    headerTitle: 'My Experience',
    headerText: 'I cover everything Frontend, from concept to implementation',
    pitchItems: [
      {
        title: 'SDLC',
        icon: 'cogs',
        text: 'Worked in integrated teams of Frontend & Backend devs, Project Owners, and QA testers to implement complete SDLC solutions.',
      },
      {
        title: 'UI/UX',
        icon: 'magic',
        text: 'I mock up interfaces that focus on simplicity and intuitive UI patterns which lead to engaging minimalistic user experiences.',
      },
      {
        title: 'Code',
        icon: 'code',
        text: 'Vanilla JavaScript. Semantic HTML. CSS & Sass. Node, React, Webpack, Express, and any other frameworks/tools you might use.',
      }
    ]
  }

  describe('Pitch component', () => {
    const component = shallow(
      <Pitch pitch={pitchProps} />
    );

    it('should have a pitch class', () => {
      expect(component.find('.pitch').exists()).toBe(true);
    });

    it('should have three icons', () => {
      expect(component.find('.icon-lrg').length).toEqual(3);
    });

    it('should have three item headings', () => {
      expect(component.find('.pitch-title').length).toEqual(3);
    });

    it('should have three item descriptions', () => {
      expect(component.find('.pitch-text').length).toEqual(3);
    });

    it('should render text from props', () => {
      expect(component.find('.pitch-title').first().text()).toEqual('SDLC');
    });
  });