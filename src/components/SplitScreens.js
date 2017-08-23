import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazyLoad from 'react-lazy-load';
import '../styles/modules/grid.css';
import '../styles/components/split-screens.css';
import mys from '../images/work-mys.png';
import ss from '../images/work-ss.png';
import ts from '../images/work-ts.png';
import cv from '../images/cv-webpage.png';

const SplitScreens = (props) => {
  return (
    <section>
      <div className="split-screens">
        <div className="container">
          {props.work.workItems.map((item, i) => {
            let image;
            if (item.image == 'mys') {
              image = mys;
            } else if ( item.image = 'ss') {
              image = ss;
            } else if ( item.image = 'ts') {
              image = ts;
            } else {
              image = cv;
            }

            return (
              <div key={i} className="split-screens-wrapper row">
                <div className="split-screens-item">
                  <h3 className="split-screens-title heading">{item.title}</h3>
                  <ul className="split-screens-tags">
                    {item.tags.map((tag, i) => {
                      return (
                        <li key={i}><FontAwesome 
                            className='icon-lrg'
                            name='certificate'
                            style={{ color: '#FFC107', fontSize: '1rem', marginLeft: '.5rem', marginRight: '.5rem' }} />
                            {tag}
                        </li>
                      )
                    })}
                  </ul>
                  <p className="split-screens-description">
                    {item.description}
                  </p>
                  <a href={item.link} target="_blank" rel="noopener">
                    <button className="button-standard button-light button-light--dark-text">Visit Website</button>
                  </a>
                </div>
                <div className="split-screens-item">
                  <img className="split-screens-image" alt="work sample website" src={image} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SplitScreens;