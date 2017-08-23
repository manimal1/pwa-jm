import React from 'react';
import logo from '../images/JM-logo.png';
import FontAwesome from 'react-fontawesome';
import '../styles/modules/grid.css';
import '../styles/components/footer.css';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <img className="footer-logo" src={logo} alt="site-logo" />
            <p>Created by Jeremiah McCurdy</p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/jeremiah-mccurdy-25b4933/" target="blank">
                <FontAwesome 
                  className='icon-sm'
                  name='linkedin-square'
                  style={{ color: '#FFFFFF', fontSize: '3rem', margin: '10px' }}
                />
              </a>
              <a href="https://github.com/manimal1" target="blank">
                <FontAwesome 
                  className='icon-sm'
                  name='github-square'
                  style={{ color: '#FFFFFF', fontSize: '3rem', margin: '10px' }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;