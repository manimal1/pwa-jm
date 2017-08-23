import React from 'react';
import '../styles/modules/grid.css';
import '../styles/modules/section-header.css';

const SectionHeader = (props) => {
  return (
    <header className="container">
      <div className="section-header row">
        <div className="col-sm-10 col-sm-offset-1">
          <h1 className="section-header-title heading">
            {props.section.headerTitle}
          </h1>
          <h4 className="section-header-subtitle subheading">
            {props.section.headerText}
          </h4>
        </div>
      </div>
    </header>
  )
}

export default SectionHeader;