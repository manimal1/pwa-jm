import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/modules/buttons.css';
import '../styles/components/hero.css';
import logo from '../images/els-top-logo.png';
import ReactRevealText from 'react-reveal-text';

export default class HeaderHero extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: !this.state.show });
    }, 500);
  }

  render() {
    return (
      <header className="hero hero-home">
        <div className="hero-container">
          <div className="hero-content">
            {/* <div className="hero-logo-top">
              <img src={logo} alt="jm-logo" />
            </div> */}
            <div className="hero-nav">
              {this.props.info.nav.map((nav, i) => {
                const link = nav.link;
                return (
                  <a key={i} onClick={() => {this.props.scroll(link)}}>
                    <FontAwesome 
                      className='icon-sm'
                      name={nav.icon}
                      style={{ color: '#FFFFFF' }}
                    />
                    <span className="hero-nav-text">{nav.text}</span>
                  </a>
                )
              })}
            </div>
            <div style={{ textAlign: 'center' }}>
              <h1 className="hero-text heading">
                {this.props.info.heading}
                <ReactRevealText show={this.state.show}>
                  {this.props.info.revealText}
                </ReactRevealText>
              </h1>
            </div>
            <button onClick={() => {this.props.scroll('contact-section')}} className="button-standard button-light">{this.props.info.buttonText}</button>
            <a className="hero-logo-bottom" onClick={() => {this.props.scroll('pitch-section')}}>
              <div>scroll down</div>
              <FontAwesome 
                className='icon-sm'
                name='chevron-down'
                style={{ color: '#FFFFFF' }}
              />
            </a>
          </div>
        </div>
      </header>
    )
  }
}