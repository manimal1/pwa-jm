import React from 'react';
import FontAwesome from 'react-fontawesome';
import LazyLoad from 'react-lazy-load';
import '../styles/modules/grid.css';
import '../styles/components/split-screens.css';
import co2cut from '../images/co2cut-desktop.png';
import banko from '../images/work-banko.jpg';
import gea from '../images/work-gea.jpg';
import cv from '../images/cv-webpage.png';

const SplitScreens = (props) => {
  return (
    <section>
      <div className="split-screens">
        <div className="container">
          {props.work.workItems.map((item, i) => {
            let image;
            item.image === 'banko' ? image = banko : item.image === 'gea' ? image = gea : item.image === 'co2cut' ? image = co2cut : image = cv;

            return (
              <div key={i} className="split-screens-wrapper row">
                <div className="split-screens-item">
                  <h2 className="split-screens-title heading">{item.title}</h2>
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
                  <LazyLoad throttle={100} debounce={false}>
                    <img className="split-screens-image" alt="work sample website" src={image} />
                  </LazyLoad>
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