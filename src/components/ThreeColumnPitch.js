import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../styles/modules/grid.css';
import '../styles/components/pitch.css';
import '../styles/modules/icons.css';

const ThreeColumnPitch = (props) => {
  return (
    <section>
      <div className="pitch">
        <div className="container">
          <div className="pitch-columns row">
            {props.pitch.pitchItems.map((item, i) => {
              return (
                <div className="pitch-item col-xs-12 col-sm-4" key={i}>
                  <FontAwesome 
                    className='icon-lrg'
                    name={item.icon}
                    size='2x'
                    style={{ color: '#FFC107' }}
                  />
                  <h3 className="pitch-title heading">
                    {item.title}
                  </h3>
                  <div className="pitch-text">
                    {item.text}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThreeColumnPitch;