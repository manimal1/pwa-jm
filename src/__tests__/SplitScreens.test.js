import React from 'react';
import { shallow } from 'enzyme';
import Work from '../components/SplitScreens';

const workProps = {
  headerTitle: 'My Work',
  headerText: 'Here are some samples of my work',
  workItems: [
    { 
      title: 'Suitsupply',
      link: 'http://eu.suitsupply.com/en/home',
      image: '/static/media/work-ss.349d4f52.png',
      tags: [
        'SDLC', 'Scrum', 'Custom Frontend Solutions', 'Testing'
      ],
      description: 'Worked in an integrated team that developed custom solutions for the e-commerce platform. Created custom widgets, JS libraries, targeted site tracking, ads, product solutions and more.'
    },
    { 
      title: 'Mr. GoodKnight',
      link: 'https://www.tvornica-snova.hr/',
      image: '/static/media/work-ts.0f9a2176.png',
      tags: [
        'UI', 'UX', 'Custom Styling'
      ],
      description: 'I built this site as part of a 3 person team while at Infinum d.o.o in Zagreb, Croatia. While I was the primary lead on the UI/UX implementation of this create-your-own children\'s book, I worked on all aspects of the frontend implementation.'
    },
    { 
      title: 'MYS Yachting',
      link: 'https:/mysyachting.com/',
      image: '/static/media/work-mys.10cb2a8d.png',
      tags: [
        'Ghost blog', 'Node', 'Sass', 'Site Hosting'
      ],
      description: 'I was the sole developer on this website, handling design (sketch), coding (Node, Sass, jQuery), and hosting (DigitalOcean, Ubuntu, Nginx). It\'s a simple solution that focuses on providing easy navigation through a lot of useful information for potential clients.'
    },
    { 
      title: 'This Website',
      link: '/',
      image: '/static/media/cv-webpage.958c2fda.png',
      tags: [
        'PWA (Progressive Web App)', 'React', 'Mock Up', 'Jest Tests'
      ],
      description: 'This site itself followed best practices. I started with a mockup created with balsamiq.  Then I set up a React App and started with Jest Tests that initially failed, which I made pass. Then I set up the HTML structure, styled with pure CSS, and used a JS scroller. The stateless functional components accept data stored in a state object, so it\'s very easy to make content changes.'
    }
  ]
};

describe('Splitscreen component', () => {
  const component = shallow(
    <Work work={workProps} />
  );
  
  it('should have a work class', () => {
    expect(component.find('.split-screens').exists()).toBe(true);
  });

  it('should have four split-screen titles', () => {
    expect(component.find('.split-screens-title').length).toEqual(4);
  });

  it('should have four split-screen descriptions', () => {
    expect(component.find('.split-screens-description').length).toEqual(4);
  });

  it('should have four split-screen images', () => {
    expect(component.find('.split-screens-image').length).toEqual(4);
  });

  it('should render title text from props', () => {
    expect(component.find('.split-screens-title').first().text()).toEqual('Suitsupply');
  });
});