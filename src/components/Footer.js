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
            <p>Created by ELS d.o.o.</p>
            <div className="footer-links">
              <a href="https://www.linkedin.com/in/markgero" target="blank" id="linkedin-link" name="linkedin-link" rel="external">
                <FontAwesome 
                  className='icon-sm'
                  name='linkedin-square'
                  style={{ color: '#FFFFFF', fontSize: '3rem', margin: '10px' }}
                />
              </a>
              <a href="https://twitter.com/mark_gero" target="blank" id="twitter-link" name="twitter-link" rel="external">
                <FontAwesome 
                  className='icon-sm'
                  name='twitter-square'
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