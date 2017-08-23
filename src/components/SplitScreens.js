import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/components/split-screens.css';
import '../images/work-mys.png';
import '../images/work-ss.png';
import '../images/work-ts.png';
import '../images/cv-webpage.png';

const SplitScreens = (props) => {
  return (
    <section>
      <div className="split-screens">
        <div className="container">
          {props.work.workItems.map((item, i) => {
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
                  <a href={item.link} target="_blank">
                    <button className="button-standard button-light button-light--dark-text" href={item.link}>Visit Website</button>
                  </a>
                </div>
                <div className="split-screens-item">
                  <img className="split-screens-image" alt="work sample website" src={item.image} />
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