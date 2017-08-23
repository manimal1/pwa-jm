import React, { Component } from 'react';
import Scroll from 'react-scroll';
import Hero from './Hero';
import SectionHeader from './SectionHeader';
import Pitch from './ThreeColumnPitch';
import Work from './SplitScreens';
import Contact from './Contact';
import Footer from './Footer';
import data from '../data';

const Element    = Scroll.Element;
// const Events     = Scroll.Events;
// const scrollSpy  = Scroll.scrollSpy;
const scroller   = Scroll.scroller;

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: data
    }
  }

  componentDidMount() {
    // Events.scrollEvent.register('begin', function(to, element) {
    //   console.log("begin", arguments);
    // });
 
    // Events.scrollEvent.register('end', function(to, element) {
    //   console.log("end", arguments);
    // });
 
    // scrollSpy.update();
  }

  componentWillUnmount() {
    // Events.scrollEvent.remove('begin');
    // Events.scrollEvent.remove('end');
  }

  scrollToEl(element) {
    scroller.scrollTo(element, {
      duration: 1500,
      delay: 100,
      smooth: true
    });
  }

  render() {
    return (
      <div className="App">
        <Hero scroll={this.scrollToEl.bind(this)} info={this.state.data.hero} />
        <Element name="pitch-section" id="pitch">
          <SectionHeader section={this.state.data.pitch} />
          <Pitch pitch={this.state.data.pitch} />
        </Element>
        <Element name="work-section" id="work">
          <SectionHeader section={this.state.data.work} />
          <Work work={this.state.data.work} />
        </Element>
        <Element name="contact-section" id="contact">
          <SectionHeader section={this.state.data.contact} />
          <Contact contact={this.state.data.contact} />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;
